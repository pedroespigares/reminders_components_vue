<script setup>
 import {ref} from 'vue';

defineProps({
    recordatorios: {
        type: Array,
        required: true,
    },
});

let texto = ref("");

function nuevaNota(array){
    if (texto != "") {
        let nuevaNota = {
            id: array.length + 1,
            titulo: texto,
            hecho: false,
            prioridad: 3,
            fecha: Date.now()
        };
        array.push(nuevaNota);
        texto = "";
    }
    localStorage.setItem("recordatorios", JSON.stringify(array));
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
        @keyup.enter="nuevaNota(recordatorios)"
      />
    </header>
</template>

<style scoped>

</style>
