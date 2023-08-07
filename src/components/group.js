import { useContext, useState } from "react";
import FirebaseContext from "../context/firebase";
import styled from 'styled-components';
import './Group.scss';

const DelBtn = styled.div`

`
const Text = styled.p`
margin 10px 5px 10px 0px;
`
const Delete = () => (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"/>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"/>
    </svg>

)   

const GroupComponent = styled.div`
background-color: ${props => props.selected ? '#8f1a0356' : 'transparent'};
cursor: pointer;
`


const Group = ({name, scope, active, select}) => {

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


    return (
        <GroupComponent className="Group" selected={select} onClick={() => {scope(name); active(name)}}>
                <Text>{name} </Text> <div className="DelBtn" onClick={deleteGroup}> <Delete/> </div>
        </GroupComponent>
    ) 
}
export default Group;