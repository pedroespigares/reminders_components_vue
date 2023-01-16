<script setup>
defineProps({
  recordatorio: {
    type: Object,
    required: true,
  },

  recordatorios: {
        type: Array,
        required: true,
    },
});

function checkNota(recordatorio, array) {
  recordatorio.hecho = !recordatorio.hecho;
  localStorage.setItem("recordatorios", JSON.stringify(array));
}

function borrarNota(recordatorio, array) {
  array.splice(array.indexOf(recordatorio), 1);
  localStorage.setItem("recordatorios", JSON.stringify(array));
}

function cambiarPrioridad(recordatorio, prioridad, array) {
  recordatorio.prioridad = prioridad;
  localStorage.setItem("recordatorios", JSON.stringify(array));
}
</script>

<template>
  <div class="singleReminder" :key="recordatorio.id">
    <div class="reminder--text">
      <i
        v-if="recordatorio.hecho"
        class="fa-regular fa-check-circle"
        @click="checkNota(recordatorio, recordatorios)"
      ></i>
      <i
        v-else
        class="fa-regular fa-circle"
        @click="checkNota(recordatorio, recordatorios)"
      ></i>
      <h2 v-bind:class="{ checked: recordatorio.hecho }">
        {{ recordatorio.titulo }}
      </h2>
      <i class="fa-solid fa-square-minus" @click="borrarNota(recordatorio, recordatorios)"></i>
    </div>

    <div class="reminder--data">
      <p>Prioridad</p>
      <button
        id="low"
        :class="[
          { marked: recordatorio.prioridad == 1 },
          { not_marked: recordatorio.prioridad != 1 },
        ]"
        @click="cambiarPrioridad(recordatorio, 1, recordatorios)"
      >
        <i class="fa-solid fa-arrow-down"></i>
        Low
      </button>
      <button
        id="medium"
        :class="[
          { marked: recordatorio.prioridad == 2 },
          { not_marked: recordatorio.priordad != 2 },
        ]"
        @click="cambiarPrioridad(recordatorio, 2, recordatorios)"
      >
        Normal
      </button>
      <button
        id="high"
        :class="[
          { marked: recordatorio.prioridad == 3 },
          { not_marked: recordatorio.priordad != 3 },
        ]"
        @click="cambiarPrioridad(recordatorio, 3, recordatorios)"
      >
        <i class="fa-solid fa-arrow-up"></i>
        High
      </button>
      <i class="fa-regular fa-clock"></i>
      <p>
        Añadido hace
        {{ Math.floor((Date.now() - recordatorio.fecha) / 1000 / 60) }} minutos
      </p>
    </div>
  </div>
</template>

<style scoped></style>
