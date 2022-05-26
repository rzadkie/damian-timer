import { useState, useContext } from "react";
import FirebaseContext from "../context/firebase";

export default function Character({name, stress}){

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
                <p>{name} {stress}</p> <p onClick={deleteCharacter}>x</p>
        </div>
    ) 
}