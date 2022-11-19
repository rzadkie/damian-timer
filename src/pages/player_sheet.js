import { useParams } from "react-router-dom"
import {useEffect, useState} from "react";
import { db} from "../services/firebase";
import {doc, collection, onSnapshot} from 'firebase/firestore';
import '../scss/Player.scss';
import confused_travolta from '../confused_travlota.gif';

const PlayerSheet = () => {
    let { name, scope } = useParams();
    console.log(scope);


    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const updateCharacters = onSnapshot(doc(db, 'groups', scope + 'id', 'characters', name + 'id'), snapshot => {
                setCharacter(snapshot.data())
        })

        return () => {
            updateCharacters();

        }
    }, [])    
    console.log(character);

    return character ?(
        <div className="Container">
            <div className="AvatarContainer">
            <img className="Avatar" alt ='avatar' src={character.avatar_url ? character.avatar_url : confused_travolta}/>
            </div>
            <h1>{name} </h1> 
            <p> {character.stress}</p>
        </div>
    ) : null
}
export default PlayerSheet;