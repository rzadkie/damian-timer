import { useContext } from "react";
import FirebaseContext from "../../context/firebase";
import styled from 'styled-components';
import { Link, Routes, useParams } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import './character.scss';

const IncBtn = styled.button`
background-color: white;
width: 3rem;
height: 2rem;
color: black;
cursor: pointer;
margin: 5px 0px 20px 0px;
`
const Text = styled.p`
margin 10px 5px 10px 0px;
`
const TextInList = styled.p`
text-align: center;
font-size:36px;
margin 15px 5px 15px 0px;
&:hover{
    filter: brightness(0.5);
}
`

const Character = ({name, stress, scope, use_case}) => {

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
        game_master_menu: <div > <Text>{name} {stress}</Text> <IncBtn onClick={deleteCharacter}>x</IncBtn> </div>,
        player_select_menu: <TextInList> <Link className="Link" to={`/${scope}/${name}`}> {name}</Link> </TextInList>,
        player_menu: <div > <Text>{name} {stress}</Text> </div>,
    })
    console.log(name)
    return (
        <div>
            {selectUseCase()[use_case]}
        </div>
    ) 
}
export default Character