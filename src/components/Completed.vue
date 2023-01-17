<script setup>

defineProps({
    recordatorios: {
        type: Array,
        required: true,
    },
});

function borrarNotasCompletadas(array) {
    for(let i = 0; i < array.length; i++) {
        if (array[i].hecho) {
            array.splice(i, 1);
            i--;
        }
    }
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
      <span id="pendientes">&nbsp;{{ getPendientes(recordatorios) }}&nbsp;pendientes pendientes de un total de {{ getTotal(recordatorios) }}</span>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span id="deleteAll" @click="borrarNotasCompletadas(recordatorios)"><i class="fa-solid fa-x"></i>&nbsp;Borrar tareas completadas</span>
    </p>
</template>

<style scoped>

</style>
