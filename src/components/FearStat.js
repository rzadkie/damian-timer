import react, {useEffect, useState, useContext} from "react";
import styled, { ThemeProvider } from 'styled-components';
import '../scss/FearStat.scss'
import '../scss/CharacterManagementMenu.scss'
import FirebaseContext from "../context/firebase";
import { db, doesUsernameExist, col, grp} from "../services/firebase";
import {doc, getDoc, addDoc, collection, onSnapshot, getFirestore} from 'firebase/firestore';
import { firebase, FieldValue } from '../lib/firebase';
import CharacterList from "./characterList";
import GroupList from "./groupList";
import CharacterBoard from "./board/characterBoard";
import CharacterListBoardOnSelect from "./board/characterListBoardSelect";



const FearStat = ({diff, difficulty, groups}) =>{


    const [characterName, setCharacterName] = useState('');
    const [groupName, setGroupName] = useState('');
    const [stress, setStress] = useState('');
    const {firebase} = useContext(FirebaseContext);
    const [error, setError] = useState('');
    const [characters, setCharacters] = useState(null);
    const [scope, setScope] = useState();
    const [xqx, setXqx] = useState();


    const selectScope = (name) => {
        setScope(name);
        console.log(scope);
    }

    useEffect(() => {
        const updateCharacters = onSnapshot(collection(db, 'groups', scope + 'id', 'characters'), snapshot => {
                setCharacters(snapshot.docs.map(user => ({...user.data()})))
        })

        return () => {
            updateCharacters();

        }
    }, [scope])


    const handleNewCharacter = async (event) => {
        event.preventDefault();
        const nameExists = await doesUsernameExist(characterName);
        if (!nameExists.length) {
            try {
                //let nameid = name.replace(/\s+/g, '');
                await firebase.firestore().collection("groups").doc(scope + 'id').collection('characters').doc(characterName + 'id').set({
                    name: characterName.toLowerCase(),
                    stress: stress,
                });
                setCharacterName('');
                setStress('');

            } catch (error) {
                setCharacterName('');
                setStress('');
                setError(error.message);
            }
        }
        else {
            setError('That name is already taken')
        }
        try {

        } catch (error) {

        }
    };

    const handleNewGroup = async (event) => {
        event.preventDefault();
        const nameExists = await doesUsernameExist(groupName);
        if (!nameExists.length) {
            try {
                //let nameid = name.replace(/\s+/g, '');
                await firebase.firestore().collection("groups").doc(groupName + 'id').set({name: groupName});
                await firebase.firestore().collection("groups").doc(groupName + 'id').collection('characters').doc('tempid').set({
                    name: 'temp'
                });
                setGroupName('');

            } catch (error) {
                setGroupName('');
                console.error(error);
            }
        }
        else {
            setError('That name is already taken')
        }
        try {

        } catch (error) {

        }
    };



//    let {characters: {name, stress} } = chara;

    return(
        <div className="StatBox">
            <nav className="Interface">
                <button onClick={() => {document.querySelector('.CharacterManagementMenu').classList.toggle('show')}}> manage </button>
            </nav>
            <div className="CharacterManagementMenu show">
                <div className="CharacterCreationMenu">
                <h4>Add new Character</h4>
                <form>
                    <input type="text" id='name' name="name" placeholder="name" onChange={({target}) => setCharacterName(target.value.toLowerCase())} value={characterName.toLowerCase()} required />
                    <input type="number" id='stress' name="stress" placeholder="stress" onChange={({target}) => setStress(target.value)} value={stress} required/>
                </form>
                <div className="FormButtonWrapper">
                    <button onClick={handleNewCharacter}> Add </button>
                    <button onClick={() => {document.querySelector('.CharacterCreationMenu').classList.toggle('show'); setCharacterName(''); setStress('')}}> cancel </button>
                    </div>
                
             </div>
             <div className="GroupCreationMenu">
                <h4>Add new Party</h4>
                <form>
                    <input type="text" id='name' name="name" placeholder="name" onChange={({target}) => setGroupName(target.value.toLowerCase())} value={groupName.toLowerCase()} required />
                </form>
                <div className="FormButtonWrapper">
                    <button onClick={handleNewGroup}> Add </button>
                    <button onClick={() => {document.querySelector('.CharacterCreationMenu').classList.toggle('show'); setGroupName(''); setStress('')}}> cancel </button>
                </div>
                
             </div>
             <div className="GroupDeletionMenu">
                <GroupList groups={groups} scope={selectScope}/>

             </div>
             <div className="CharacterDeletionMenu">
                 <CharacterList characters={characters} scope={scope}/>
             </div>
             <h5 className="Close" onClick={() => {document.querySelector('.CharacterManagementMenu').classList.toggle('show')}}>x</h5>
             </div>
            
             <div className="Board">
  
            
            <CharacterListBoardOnSelect time={diff} difficulty={difficulty} characters={characters}/>

             </div>

        </div>
        

    )
}
export default FearStat;