<script setup>
  import Header from './components/Header.vue';
  import Reminder from './components/Reminder.vue';
  import Completed from './components/Completed.vue';
  import Footer from './components/Footer.vue';
  import {ref} from 'vue';

  let recordatorios;
  
  if(localStorage.getItem("recordatorios") != null){
    recordatorios = ref({
      array: JSON.parse(localStorage.getItem("recordatorios"))
  });
  } else {
    recordatorios = ref({
      array: []
    });
  }
</script>

<template>
  <Header :recordatorios="recordatorios.array"/>
  <Completed :recordatorios="recordatorios.array"/>
  <hr/>
  <main>
    <div id="remindersContainer">
      <Reminder v-for="recordatorio in recordatorios.array" :key="recordatorio.id" :recordatorio="recordatorio" :recordatorios="recordatorios.array" />
    </div>
  </main>
  <Footer />
</template>

<style scoped>

</style>
