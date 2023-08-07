import { useParams } from "react-router-dom"
import {useEffect, useState} from "react";
import { db} from "../services/firebase";
import {doc, collection, onSnapshot} from 'firebase/firestore';
import '../scss/Player.scss';
import confused_travolta from '../confused_travlota.gif';
import InfoPanel from "../components/info_panel/info_panel";

const PlayerSheet = () => {
    let { name, scope } = useParams();
    console.log(scope);
    
    
    const [character, setCharacter] = useState(null);
    const [stats, setStats] = useState({});
    
    useEffect(() => {
        const updateCharacters = onSnapshot(doc(db, 'groups', scope + 'id', 'characters', name + 'id'), snapshot => {
            setCharacter(snapshot.data())
        })
        const updateStats = onSnapshot(doc(db, 'groups', scope + 'id'), snapshot => {
            setStats(snapshot.data())
        })
        return () => {
            updateCharacters();
            updateStats();
        }
    }, [])  
    
    const [lightName, setLightName] = useState('300 bocianów');
    
    useEffect(() => {
        switch (true) {
            case (stats.light_value >= 76):
                setLightName('Radiant Light');
                break;
            case (stats.light_value >= 51 && stats.light_value <= 75):
                setLightName('Dim Light');
                break;
            case (stats.light_value >= 26 && stats.light_value <= 50):
                setLightName('Shadowy Gloom');
                break;
            case (stats.light_value >= 1 && stats.light_value <= 25):
                setLightName('Pitch Black');
                break;
            default:
        }
    }, [stats.light_value])
    


    console.log(lightName, stats.light_value);

    return character ?(
        <div className="Container">
            <div className="AvatarContainer">
            <img className="Avatar" alt ='avatar' src={character.avatar_url ? character.avatar_url : confused_travolta}/>
            </div>
            <h1>{name} </h1> 
            <p> {character.stress}</p>
            <InfoPanel light={lightName} stats={''} value={stats.light_value}/>
        </div>
    ) : null
}
export default PlayerSheet;