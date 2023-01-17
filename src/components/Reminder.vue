<script setup>
var props = defineProps(["recordatorio"]);

var emit = defineEmits(["checkNota", "borrarNota", "cambioPrioridad"]);

function notaClick(recordatorio){
  emit("checkNota", recordatorio);
}

function borrarClick(recordatorio){
  emit("borrarNota", recordatorio);
}

function prioridad(nuevaPrioridad){
  props.recordatorio.prioridad = nuevaPrioridad;
  emit("cambioPrioridad");
}


</script>

<template>
  <div class="singleReminder" :key="recordatorio.id">
    <div class="reminder--text">
      <i
        v-if="recordatorio.hecho"
        class="fa-regular fa-check-circle"
        @click="$emit('notaClick', recordatorio)"
      ></i>
      <i
        v-else
        class="fa-regular fa-circle"
        @click="$emit('notaClick', recordatorio)"
      ></i>
      <h2 v-bind:class="{ checked: recordatorio.hecho }">
        {{ recordatorio.titulo }}
      </h2>
      <i class="fa-solid fa-square-minus" @click="$emit('borrarClick',recordatorio)"></i>
    </div>

    <div class="reminder--data">
      <p>Prioridad</p>
      <button
        id="low"
        :class="[
          { marked: recordatorio.prioridad == 1 },
          { not_marked: recordatorio.prioridad != 1 },
        ]"
        @click="prioridad(1)"
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
        @click="prioridad(2)"
      >
        Normal
      </button>
      <button
        id="high"
        :class="[
          { marked: recordatorio.prioridad == 3 },
          { not_marked: recordatorio.priordad != 3 },
        ]"
        @click="prioridad(3)"
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