<script setup>
  import Header from './components/Header.vue';
  import Reminder from './components/Reminder.vue';
  import Completed from './components/Completed.vue';
  import Footer from './components/Footer.vue';
  import {ref} from 'vue';
  import {toRaw} from 'vue';

  let recordatorios;
  
  if(localStorage.getItem("recordatorios") != null){
    recordatorios = ref(JSON.parse(localStorage.getItem("recordatorios")));
  } else {
    recordatorios = ref([]);
  }

  // rawRecordatorios es una copia de recordatorios que elimina el objeto proxy de Vue
  let rawRecordatorios = toRaw(recordatorios.value);

  // Despues lo volvemos a convertir en ref para que sea reactivo
  rawRecordatorios = ref(rawRecordatorios);

  function checkNota(recordatorio, array) {
  recordatorio.hecho = !recordatorio.hecho;
  localStorage.setItem("recordatorios", JSON.stringify(array));
}

  function borrarNota(recordatorio, array) {
    array.splice(array.indexOf(recordatorio), 1);
    localStorage.setItem("recordatorios", JSON.stringify(array));
  }

  function prioridad(){
    recordatorios.value.sort((a, b) => {
      return b.prioridad - a.prioridad;
    });

    localStorage.setItem("recordatorios", JSON.stringify(rawRecordatorios.value));
  }
  
</script>

<template>
  <Header :recordatorios="recordatorios"/>
  <Completed :recordatorios="recordatorios"/>
  <hr/>
  <main>
    <div id="remindersContainer">
      <Reminder 
      v-for="recordatorio in recordatorios"
      :recordatorio="recordatorio"
      :key="recordatorio.id" 
      @nota-click="checkNota(recordatorio, rawRecordatorios)"
      @borrar-click="borrarNota(recordatorio, rawRecordatorios)"
      @cambioPrioridad="prioridad"/>
    </div>
  </main>
  <Footer />
</template>