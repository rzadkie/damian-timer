import react, {useEffect, useState, useContext} from "react";
import styled from 'styled-components';
import '../scss/FearStat.scss'
import '../scss/CharacterManagementMenu.scss'
import FirebaseContext from "../context/firebase";
import { doesUsernameExist} from "../services/firebase";
import {doc, addDoc, collection} from 'firebase/firestore';
import CharacterList from "./characterList";
import CharacterBoard from "./board/characterBoard";
import CharacterListBoardOnSelect from "./board/characterListBoardSelect";
import Draggable from 'react-draggable'; 



const FearStat = ({diff, difficulty}) =>{


    const [name, setName] = useState('');
    const [stress, setStress] = useState('');
    const {firebase} = useContext(FirebaseContext);
    const [error, setError] = useState('');


    const handleNewCharacter = async (event) => {
        event.preventDefault();
        const nameExists = await doesUsernameExist(name);
        if (!nameExists.length) {
            try {
                //let nameid = name.replace(/\s+/g, '');
                await firebase.firestore().collection("characters").doc(name + 'id').set({
                    name: name.toLowerCase(),
                    stress: stress,
                });
                setName('');
                setStress('');

            } catch (error) {
                setName('');
                setStress('');
                setError(error.message);
            }
        }
        else {
            setError('That username is already taken')
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
                <form>
                    <input type="text" id='name' name="name" placeholder="name" onChange={({target}) => setName(target.value.toLowerCase())} value={name.toLowerCase()} required />
                    <input type="number" id='stress' name="stress" placeholder="stress" onChange={({target}) => setStress(target.value)} value={stress} required/>
                </form>
                    <button onClick={handleNewCharacter}> Add </button>
                    <button onClick={() => {document.querySelector('.CharacterCreationMenu').classList.toggle('show'); setName(''); setStress('')}}> cancel </button>
                
             </div>
             <div className="CharacterDeletionMenu">
                 <CharacterList/>
             </div>
             <p className="Close" onClick={() => {document.querySelector('.CharacterManagementMenu').classList.toggle('show')}}>x</p>
             </div>
            
            {/* <div className='CharList show'>
             <CharacterListBoardOnSelect />
            </div> */}


             <div className="Board">
  
            
            <CharacterListBoardOnSelect time={diff} difficulty={difficulty}/>

             </div>

        </div>
        

    )
}
export default FearStat;