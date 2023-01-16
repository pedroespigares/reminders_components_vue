<script setup>

defineProps({
    recordatorios: {
        type: Array,
        required: true,
    },
});

function borrarNotasCompletadas(array) {
    array = array.filter((recordatorio) => {
        return !recordatorio.hecho;
    });
    localStorage.setItem("recordatorios", JSON.stringify(array));
}

function getPendientes(array) {
    let pendientes = 0;

    array.forEach((recordatorio) => {
        if (!recordatorio.hecho) {
            pendientes++;
        }
    });

    return pendientes;
};

function getTotal(array) {
    return array.length;
};

</script>

<template>
    <p id="tareasPen">
      <i class="fa-solid fa-chart-column"></i>
      <span id="pendientes">{{ getPendientes(recordatorios) }}pendientes pendientes de un total de {{ getTotal(recordatorios) }}</span>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span id="deleteAll" @click="borrarNotasCompletadas(recordatorios)"><i class="fa-solid fa-x"></i>Borrar tareas completadas</span>
    </p>
</template>

<style scoped>

</style>
