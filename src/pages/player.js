import '../scss/Player.scss';
import { useEffect, useState } from 'react';
import { db } from "../services/firebase";
import {collection, onSnapshot} from 'firebase/firestore';
import Character from '../components/character';
import Skeleton from 'react-loading-skeleton';



const Player = () => {
    const [characters, setCharacters] = useState(false);
    const [active, setActive] = useState(false);
    const [charactersArr, setCharactersArr] = useState();

    let CharCl = class {
        constructor(man){
            this.man = man;
        }

        mapThisShit(){
            let osm = [];
            this.man.map(mann => (osm.push(mann)));
            return osm;
        }
    }

    useEffect(() => {
        let groupArr = [];
        let charArr = [];
        const getCharacters = onSnapshot(collection(db, 'groups'), snapshot => {
            groupArr = snapshot.docs.map(group => ({...group.data()}));
            for (let i=0; i<groupArr.length; i++) {
                onSnapshot(collection(db, 'groups', groupArr[i].name + 'id', 'characters'), snapshot => {
                    snapshot.docs.map(user => (charArr.push(user.data())));

                  })
                  
                }
                setCharacters(charArr);
                setActive(true);
            }
             
         )
        


        return () => {
            getCharacters();      
  }
}, [])

console.log(characters);

    return active ?
        <div className="Container" >
        {characters.map((character) =>(
        console.log(character)



        ))}
        
    </div>
    : 
    <p>xq</p>
     
    
}
export default Player;

// character.map(player => {
//     <Character
//       name={player.name}
//       use_case='player_select_menu'
//       key={player.length+Math.random()}
//     />
//   })


