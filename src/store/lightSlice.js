import {createSlice} from "@reduxjs/toolkit";
import { db} from "../services/firebase";
import {doc, getDoc, collection, onSnapshot} from 'firebase/firestore';


const fetchInitalLight = async(scope, context) => {
    try{
        const updateStats = onSnapshot(doc(db, 'groups', scope + 'id'), snapshot => {
            return snapshot.data();
        })
        //let xqx;
        //const fetch = context.firebase.firestore().collection("groups").doc(scope + 'id').get().light_value;
        // fetch.get().then((doc) => {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data().light_value);
        //         //xqx = doc.data();
        //         return doc.data();
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch((error) => {
        //     console.log("Error getting document:", error);
        // });
        
        //const data = await fetch.json();
        //return xqx;
    } catch (error) {
        console.log('update failed: ', error)
    }
}

const updateStats = async (scope) => {
    const xqx = doc(db, 'groups', scope + 'id');
    const dos = await getDoc(xqx);
    console.log(dos.data().then((value) => {
        console.log(value);
        // Expected output: "Success!"
      }));
    return dos.data();
    
}

const initialState = {
    value: 0,
}


const updateValues = async (value, scope, context) => {
    try {
        console.log('works?', value, scope, context)
        await context.firebase.firestore().collection("groups").doc(scope + 'id').update({
        light_value: value
        })
    } catch (error) {
        console.log('update failed: ', error)
    }
}

export const lightSlice = createSlice({
    name: 'lighter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value = Math.min(Math.max(0, state.value + action.payload.light_value), 100);
            updateValues(state.value, action.payload.scope, action.payload.firebase)
        },
        set_fetched_state: (state, action) => {
            state.value = updateStats(action.payload.scope);
        }
    }
})

export const {increment, set_fetched_state} = lightSlice.actions;

export default lightSlice.reducer;