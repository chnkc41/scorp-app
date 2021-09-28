import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store';
import i18n from './langs/index' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/main.css' 
import 'boxicons'


  
const app = createApp(App)
app.use(router)
app.use(store)   
app.use(i18n)  
app.mount('#app')
