import { useContext } from "react";
import FirebaseContext from "../context/firebase";
import styled from 'styled-components';

const IncBtn = styled.button`
background-color: white;
width: 3rem;
height: 2rem;
color: black;
cursor: pointer;
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
                <p>{name} {stress}</p> <IncBtn onClick={deleteCharacter}>x</IncBtn>
        </div>
    ) 
}
export default Character