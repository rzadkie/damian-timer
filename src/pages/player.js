import '../scss/Player.scss';
import React, {Suspense ,useEffect, useState } from 'react';
import { db } from "../services/firebase";
import {collection, onSnapshot} from 'firebase/firestore';
import Skeleton from 'react-loading-skeleton';
import Loader from '../components/loader';


const Player = () => {
    const [characters, setCharacters] = useState([]);
    const [group, setGroup] = useState([]);
    const [active, setActive] = useState(false);


    useEffect(() => {
        const getCharacters = onSnapshot(collection(db, 'groups'), snapshot => {
            setGroup(snapshot.docs.map(group => ({...group.data()})));
            for (let i=0; i<group.length; i++) {
                onSnapshot(collection(db, 'groups', group[i].name + 'id', 'characters'), snapshot => {
                    snapshot.docs.map(user => (characters.push(user.data())));

                  })                
                }
                setActive(true);
            }
             
         )
        


        return () => {
            getCharacters();      
  }
}, [active])
    
    const LazyList = React.lazy(() => {
        return new Promise (resolve => setTimeout (resolve, 1000)).then(() => import('../components/player/list'));
    });

    return  (

            <div className='Container'>
            {!group ? (<Skeleton count={6} height={150}> </Skeleton>) : group.length > 0 ?
            (
                <div className='ListWrapper'>
                <Suspense fallback={<Loader/>}>
                <LazyList characters={characters}/>

                </Suspense>
                </div>               
        
            ) : null}
            </div>        
        
)  
}
export default Player;
