import { useContext } from "react";
import FirebaseContext from "../../context/firebase";
import styled from 'styled-components';
import { Link, Routes, useParams } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import './character.scss';
import confused_travolta from '../../confused_travlota.gif';


const Delete = () => (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"/>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"/>
    </svg>

)


const Text = styled.p`
margin 10px 5px 10px 0px;
font-size: 28px;
word-wrap: break-word;
`
const TextInList = styled.div`
justify-content: center;
align-items: center;
display: flex;
text-align: center;
font-size:36px;
margin 15px 5px 15px 0px;
//border: solid 1px #fafafa;
overflow-wrap: break-word;

&:hover{
    filter: brightness(0.5);
}
`

const Character = ({name, avatar, stress, scope, use_case}) => {

    const {firebase} = useContext(FirebaseContext);

      const deleteCharacter = async () => {
        try {
            await firebase.firestore().collection("groups").doc(scope + 'id').collection('characters').doc(name + 'id').delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }
     catch(error) {

     }
    }
    const selectUseCase = () => ({
        game_master_menu: <div className="CharacterGM" > <Text>{name} {stress}</Text><div className="DelBtn" onClick={deleteCharacter}><Delete/></div></div>,
        player_select_menu: <TextInList> <img className="Avatar" alt="" src={avatar? avatar : confused_travolta}/>
        <Link className="Link" to={`/${scope}/${name}`}> {name} </Link>  </TextInList>,
        player_menu: <div > <Text>{name} {stress}</Text> </div>,
    })
    return (
        <div>
            {selectUseCase()[use_case]}
        </div>
    ) 
}
export default Character