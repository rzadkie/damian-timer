import { useContext } from "react";
import FirebaseContext from "../context/firebase";
import styled from 'styled-components';

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

const Character = ({name, stress}) => {

    const {firebase} = useContext(FirebaseContext);

    const mystyle = {
        width: "200px",
        heigth: "200px",
        color: 'white'

      };

      const deleteCharacter = async () => {
        try {
            await firebase.firestore().collection("characters").doc(name + 'id').delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }
     catch(error) {

     }
    }

    return (
        <div >
                <Text>{name} {stress}</Text> <IncBtn onClick={deleteCharacter}>x</IncBtn>
        </div>
    ) 
}
export default Character