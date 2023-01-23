<script setup>
  import Header from './components/Header.vue';
  import Reminder from './components/Reminder.vue';
  import Completed from './components/Completed.vue';
  import Footer from './components/Footer.vue';
  import { collection, doc, deleteDoc, updateDoc } from '@firebase/firestore';
  import { useCollection, useFirestore } from 'vuefire'

  const db = useFirestore();

  const recordatorios = useCollection(collection(db, 'recordatorios'));


  function checkNota(id) {
    let recordatorio = recordatorios.value.find((recordatorio) => {
      return recordatorio.id == id;
    });
    let hecho = recordatorio.hecho;

    updateDoc(doc(db, "recordatorios", id), {
        hecho: !hecho,
    });
  }

  function borrarNota(id) {
    deleteDoc(doc(db, "recordatorios", id));
  }
</script>

<template>
  <Header/>
  <Completed/>
  <hr/>
  <main>
    <div id="remindersContainer">
      <Reminder 
      v-for="recordatorio in recordatorios"
      :recordatorio="recordatorio"
      :key="recordatorio.id" 
      @nota-click="checkNota(recordatorio.id)"
      @borrar-click="borrarNota(recordatorio.id)"/>
    </div>
  </main>
  <Footer/>
</template>