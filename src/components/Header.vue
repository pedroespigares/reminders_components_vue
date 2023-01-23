<script setup>
 import {ref} from 'vue';
 import { collection, addDoc } from '@firebase/firestore';
 import { useFirestore } from 'vuefire'


const db = useFirestore();

let texto = ref("");

function nuevaNota(db){
    if (texto.value != "") {
        const docRef = addDoc(collection(db, "recordatorios"), {
            titulo: texto.value,
            hecho: false,
            prioridad: 3,
            fecha: new Date(),
        });
        texto.value = "";
    }
}
</script>

<template>
    <header>
      <h1>Reminder - Pedro Espigares</h1>
      <input
        type="text"
        id="reminder"
        placeholder="¿Qué quieres recordar?"
        v-model="texto"
        @keyup.enter="nuevaNota(db)"
      />
    </header>
</template>