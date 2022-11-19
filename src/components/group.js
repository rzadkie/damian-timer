import { useContext, useState } from "react";
import FirebaseContext from "../context/firebase";
import styled from 'styled-components';
import './Group.scss';

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



const Group = ({name, scope, isSelected, onSelect}) => {
    const [st, setSt] = useState(isSelected);
    const {firebase} = useContext(FirebaseContext);

      const deleteGroup = async () => {
        try {
            await firebase.firestore().collection("groups").doc(name + 'id').delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }
     catch(error) {

     }
    }
    const Group = st ? styled.div`
    background-color: #550900;`
    :
    styled.div`
    background-color: #090100;`
    
    return (
        <Group onClick={() => {scope(name); onSelect();}}>
                <Text>{name} </Text> <IncBtn onClick={deleteGroup}>x</IncBtn>
        </Group>
    ) 
}
export default Group;