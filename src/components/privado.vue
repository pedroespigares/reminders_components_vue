<script setup>

// En la definicion de la ruta privada hay que poner
// beforeEnter: (to, from, next) => {
//   return isLogged;
// }

import { ref } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const isLogged = ref(false);

auth.onAuthStateChanged((user) => {
    if (user) {
        isLogged.value = true;
    } else {
        isLogged.value = false;
    }
});

function cerrarSesion() {
    auth.signOut();
}
</script>

<template>
    <h1>Área privada</h1>
    <button @click="cerrarSesion">Cerrar sesión</button>
</template>