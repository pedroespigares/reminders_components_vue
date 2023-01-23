import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCMl-WHwOKBLrveO53dWrHzTcfvLfSvCD8",
    authDomain: "reminders-list-pedro.firebaseapp.com",
    projectId: "reminders-list-pedro",
    storageBucket: "reminders-list-pedro.appspot.com",
    messagingSenderId: "220856851215",
    appId: "1:220856851215:web:2379d7cb15ab3af338fc7a",
    measurementId: "G-ER7769LLXR"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')