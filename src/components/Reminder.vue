<script setup>
 import { doc, updateDoc } from '@firebase/firestore';
 import { useFirestore } from 'vuefire'


const db = useFirestore();
defineProps(["recordatorio"]);


var emit = defineEmits(["checkNota", "borrarNota", "cambioPrioridad"]);

function notaClick(id){
  emit("checkNota", id);
}

function borrarClick(id){
  emit("borrarNota", id);
}

function prioridad(db, nuevaPrioridad, id){
  updateDoc(doc(db, "recordatorios", id), {
      prioridad: nuevaPrioridad,
  });
  emit("cambioPrioridad");
}
</script>

<template>
  <div class="singleReminder" :key="recordatorio.id">
    <div class="reminder--text">
      <i
        v-if="recordatorio.hecho"
        class="fa-regular fa-check-circle"
        @click="$emit('notaClick', recordatorio.id)"
      ></i>
      <i
        v-else
        class="fa-regular fa-circle"
        @click="$emit('notaClick', recordatorio.id)"
      ></i>
      <h2 v-bind:class="{ checked: recordatorio.hecho }">
        {{ recordatorio.titulo }}
      </h2>
      <i class="fa-solid fa-square-minus" @click="$emit('borrarClick',recordatorio.id)"></i>
    </div>

    <div class="reminder--data">
      <p>Prioridad</p>
      <button
        id="low"
        :class="[
          { marked: recordatorio.prioridad == 1 },
          { not_marked: recordatorio.prioridad != 1 },
        ]"
        @click="prioridad(db, 1, recordatorio.id)"
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
        @click="prioridad(db, 2, recordatorio.id)"
      >
        Normal
      </button>
      <button
        id="high"
        :class="[
          { marked: recordatorio.prioridad == 3 },
          { not_marked: recordatorio.priordad != 3 },
        ]"
        @click="prioridad(db, 3, recordatorio.id)"
      >
        <i class="fa-solid fa-arrow-up"></i>
        High
      </button>
      <i class="fa-regular fa-clock"></i>
      <p>
        Añadido hace
        {{ Math.floor((Date.now() - recordatorio.fecha.toDate()) / 1000 / 60) }} minutos
      </p>
    </div>
  </div>
</template>