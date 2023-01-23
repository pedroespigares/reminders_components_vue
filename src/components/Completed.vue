<script setup>
    import { collection, doc, deleteDoc } from '@firebase/firestore';
    import { useCollection, useFirestore } from 'vuefire'

    const db = useFirestore();

    const recordatorios = useCollection(collection(db, 'recordatorios'));

function borrarNotasCompletadas(recordatorios) {
    recordatorios.forEach((recordatorio) => {
        if (recordatorio.hecho) {
            deleteDoc(doc(db, "recordatorios", recordatorio.id));
        }
    });
}

function getPendientes(recordatorios) {
    let pendientes = 0;
    recordatorios.forEach((recordatorio) => {
        if (!recordatorio.hecho) {
            pendientes++;
        }
    });
    return pendientes;
};

function getTotal(recordatorios) {
    return recordatorios.length;
};

</script>

<template>
    <p id="tareasPen">
      <i class="fa-solid fa-chart-column"></i>
      <span id="pendientes">&nbsp;{{ getPendientes(recordatorios) }}&nbsp;pendientes pendientes de un total de {{ getTotal(recordatorios) }}</span>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span id="deleteAll" @click="borrarNotasCompletadas(recordatorios)"><i class="fa-solid fa-x"></i>&nbsp;Borrar tareas completadas</span>
    </p>
</template>

<style scoped>

</style>
