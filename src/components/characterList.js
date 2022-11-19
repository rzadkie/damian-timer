import react, {useEffect, useState, useContext} from "react";

import Skeleton from 'react-loading-skeleton';
import { onSnapshot } from "firebase/firestore";

import { getCharacters, col} from '../services/firebase';
import Character from "./character/character";

const CharacterList = ({characters, scope}) =>{

    

    return  !characters ? (<Skeleton className="CharacterList" count={1} height={150}/>) : characters.length > 0 ? (
        <div >
                    {characters.map((character) =>(

                    <Character
                    key={character.name + Math.random}
                    name={character.name}
                    stress={character.stress}
                    scope={scope}
                    use_case='game_master_menu'
                    />
                    ))}
                    
                </div>
    ) : null
}
export default CharacterList;