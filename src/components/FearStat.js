import {useEffect, useState, useContext} from "react";
import '../scss/FearStat.scss'
import '../scss/CharacterManagementMenu.scss'
import FirebaseContext from "../context/firebase";
import { db, doesUsernameExist} from "../services/firebase";
import {doc, collection, onSnapshot} from 'firebase/firestore';
import CharacterList from "./characterList";
import GroupList from "./groupList";

const Close = (props) => (
    <svg width="24" className={props.className} height="24" fill="none" viewBox="0 0 24 24">
  <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"/>
  <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 9.75L14.25 14.25"/>
  <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 9.75L9.75 14.25"/>
    </svg>
)

const FearStat = ({diff, difficulty, groups, selectedCharacters, getScope}) =>{


    const [characterName, setCharacterName] = useState('');
    const [groupName, setGroupName] = useState('');
    const [stress, setStress] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const {firebase} = useContext(FirebaseContext);
    const [error, setError] = useState('');
    const [characters, setCharacters] = useState(null);
    const [scope, setScope] = useState();
    const [initialLight, setInitialLight] = useState();


    const selectScope = (name) => {
        setScope(name);
        console.log(scope);
    }
    selectedCharacters(characters);

    getScope(scope);


    useEffect(() => {
        const updateCharacters = onSnapshot(collection(db, 'groups', scope + 'id', 'characters'), snapshot => {
                setCharacters(snapshot.docs.map(user => ({...user.data()})));
                

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
                    group: scope,
                    avatar_url: avatarUrl ? avatarUrl : null,
                    effects: {
                        xqx: {
                        state: true,
                        duration: Date.now()
                        },
                        cock: false,
                        elektrostatyczny_pizdnik: true,
                        cock_effects: {
                            cock: false,
                            elektrostatyczny_pizdnik: true,

                        },
                        xqx_effects: {
                            xqx_cock: false,
                            elektrostatyczny_pizdnik: true,

                        }
                    }
                });
                setCharacterName('');
                setStress('');
                setAvatarUrl('');
                

            } catch (error) {
                setCharacterName('');
                setStress('');
                setAvatarUrl('');
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
                await firebase.firestore().collection("groups").doc(scope + 'id').set({
                    name: groupName,
                    light_value: 100,
                    light_name: ' '

                });
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




    return(
            <div className="CharacterManagementMenu show">
                <div className="CharacterCreationMenu">
                <h4>Add new Character</h4>
                <form autoComplete="off">
                    <div className="inputWrapper">
                    <input type="text" id='name' name="name" placeholder="name*" onChange={({target}) => setCharacterName(target.value.toLowerCase())} value={characterName.toLowerCase()} required />
                    </div>
                    <div className="inputWrapper">
                    <input type="number" id='stress' name="stress" placeholder="stress*" onChange={({target}) => setStress(target.value)} value={stress} required/>
                    </div>
                    <div className="inputWrapper">
                    <input type="text" id='avatar_url' name="avatar_url" placeholder="avatar url" onChange={({target}) => setAvatarUrl(target.value.toLowerCase())} value={avatarUrl.toLowerCase()} />
                    </div>

                </form>
                <div className="FormButtonWrapper">
                    <button className="SmlButton" onClick={handleNewCharacter}> Add </button>
                    <button className="SmlButton" onClick={() => {document.querySelector('.CharacterCreationMenu').classList.toggle('show'); setCharacterName(''); setStress('')}}> cancel </button>
                    </div>
                
             </div>
             <div className="GroupCreationMenu">
                <h4>Add new Party</h4>
                <form autoComplete="off">
                <div className="inputWrapper">
                    <input type="text" id='name' name="name" placeholder="name" onChange={({target}) => setGroupName(target.value.toLowerCase())} value={groupName.toLowerCase()} required />
                </div>

                </form>
                <div className="FormButtonWrapper">
                    <button className="SmlButton" onClick={handleNewGroup}> Add </button>
                    <button className="SmlButton" onClick={() => {document.querySelector('.CharacterCreationMenu').classList.toggle('show'); setGroupName(''); setStress('')}}> cancel </button>
                </div>
                
             </div>
             <div className="GroupDeletionMenu">
                <GroupList groups={groups} scope={selectScope}/>

             </div>
             <div className="CharacterDeletionMenu">
                 <CharacterList characters={characters} scope={scope}/>
             </div>
             <div onClick={() => document.querySelector('.CharacterManagementMenu').classList.toggle('show')}>

             <Close  className={"Close"} />
             </div>
             </div>
            

        

    )
}
export default FearStat;