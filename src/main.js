import { createApp } from 'vue'
import { firebaseApp } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'

import './assets/main.css'
const app = createApp(App);
app
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })

createApp(App).mount('#app')
