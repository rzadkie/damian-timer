import react, {useEffect, useState, useContext} from "react";
import './characterBoard.scss';
import Skeleton from 'react-loading-skeleton';
import { getCharacters, col} from '../../services/firebase';
import { onSnapshot } from "firebase/firestore";
import CharacterBoard from "./characterBoard";

const CharacterListBoardOnSelect = ({difficulty, time}) =>{

    
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        async function listOfCharacters(){
            const response = await getCharacters();
            setCharacters(response);
            //console.log(typeof response);
            //console.log( response);
        }
            const update = onSnapshot(col, snapshot => {
                setCharacters(snapshot.docs.map(user => ({...user.data()})))
            })

        return () => {
            update();
        }
    }, []);
   
    //console.log("diff in charListBoard: ", difficulty);
    return  !characters ? (<div><p>Firebase lived up to it's name</p> <Skeleton count={6} height={150}> </Skeleton></div>) : characters.length > 0 ? (
        <div className="BoardWrapper" >
                    {characters.map((character) =>(

                    <CharacterBoard
                    key={character.name + Math.random}
                    name={character.name}
                    stress={character.stress}
                    difficulty={difficulty}
                    time={time}
                    />
                    ))}
                    
                </div>
    ) : null
}
export default CharacterListBoardOnSelect;