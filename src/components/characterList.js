import react, {useEffect, useState, useContext} from "react";

import Skeleton from 'react-loading-skeleton';
import { getCharacters } from '../services/firebase';
import Character from "./character";

const CharacterList = () =>{

    
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        async function listOfCharacters(){
            const response = await getCharacters();
            setCharacters(response);

        }

            listOfCharacters();
    }, []);
   
    console.log(characters);
    return  !characters ? (<Skeleton className="CharacterList" count={1} height={150}/>) : characters.length > 0 ? (
        <div >
                    {characters.map((character) =>(

                    <Character
                    key={character.name + Math.random}
                    name={character.name}
                    stress={character.stress}
                    />
                    ))}
                    
                </div>
    ) : null
}
export default CharacterList;