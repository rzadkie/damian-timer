import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const config = {
    apiKey: "AIzaSyCTRHUznJ_ZW7AWGfvApSsUtTB-TBABN_U",
    authDomain: "ttrpg-df-app.firebaseapp.com",
    projectId: "ttrpg-df-app",
    storageBucket: "ttrpg-df-app.appspot.com",
    messagingSenderId: "1048446056231",
    appId: "1:1048446056231:web:be86d9981f35e26a829b02",
    measurementId: "G-R1E1TWJDK5"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export {firebase, FieldValue};
