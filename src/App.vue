<script setup>
  import Header from './components/Header.vue';
  import Reminder from './components/Reminder.vue';
  import Completed from './components/Completed.vue';
  import Footer from './components/Footer.vue';
  import {ref} from 'vue';

  let recordatorios;
  
  if(localStorage.getItem("recordatorios") != null){
    recordatorios = ref(JSON.parse(localStorage.getItem("recordatorios")));
  } else {
    recordatorios = ref([]);
  }
</script>

<template>
  <Header :recordatorios="recordatorios"/>
  <Completed :recordatorios="recordatorios"/>
  <hr/>
  <main>
    <div id="remindersContainer">
      <Reminder v-for="recordatorio in recordatorios" :key="recordatorio.id" :recordatorio="recordatorio" :recordatorios="recordatorios" />
    </div>
  </main>
  <Footer />
</template>

<style scoped>

</style>
