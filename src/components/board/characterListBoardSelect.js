import react, {useEffect, useState, useContext} from "react";
import './characterListBoardSelect.scss';
import Skeleton from 'react-loading-skeleton';
import { getCharacters } from '../../services/firebase';
import CharacterBoard from "./characterBoard";

export default function CharacterListBoardOnSelect({difficulty, time}){

    
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        async function listOfCharacters(){
            const response = await getCharacters();
            setCharacters(response);

        }
 
            listOfCharacters();
    }, []);
   
    console.log(characters);
    return  !characters ? (<Skeleton count={1} height={150}/>) : characters.length > 0 ? (
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