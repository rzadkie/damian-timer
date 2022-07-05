import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(name) {
    const result = await firebase.firestore().collection('characters').where('name', '==', name).get();
    console.log(result);
    return result.docs.map((character) => character.data().lenght > 0);
}

export async function getUserByUserID(userId) {
    const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    return user;
}

export async function getCharacters() {
    let query = firebase.firestore().collection('characters');

    const result = await query.get();
    const characters = result.docs.map((user) => ({
        ...user.data()    }));

    return characters;
}

export async function getCharactersLive() {
    let query = firebase.firestore().collection('characters');

    const result = await query.get();
    const characters = result.docs.map((user) => ({
        ...user.data()    }));

    return characters;
}
