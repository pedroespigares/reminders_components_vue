<script setup>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ref } from 'vue';

var email = ref('');
var contraseña = ref('');

function alta() {
    createUserWithEmailAndPassword(auth, email.value, contraseña.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        email.value = '';
        contraseña.value = '';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

// Para logeo
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { ref } from 'vue';

// var email = ref('');
// var contraseña = ref('');

// function login() {
//     signInWithEmailAndPassword(auth, email.value, contraseña.value)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         email.value = '';
//         contraseña.value = '';
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
// }

// Para logeo con Google
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../firebase';
// import { ref } from 'vue';

// var email = ref('');
// var contraseña = ref('');

// function loginGoogle() {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//     .then((userCredential) => {
//         // The signed-in user info.
//         const user = userCredential.user;
//         // ...
//     }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//  
//     });
// }
</script>

<template>
    email: <input type="email" name="" id="" v-model="email">
    contraseña: <input type="password" name="" id="" v-model="contraseña">
    <button @click="alta">Registrarse</button>
</template>