import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';


createApp(App).use(router).mount('#app')
