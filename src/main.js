import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from './store/index';
import i18n from './langs/index' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/main.css' 
import 'boxicons'
import "vue3-select/dist/vue-select.css";


import appHeader from "@/components/Shared/appHeader" 
import appFooter from "@/components/Shared/appFooter" 
  
const app = createApp(App)
app.component("appHeader", appHeader)
app.component("appFooter", appFooter)
app.use(router)
app.use(store)   
app.use(i18n)  
app.mount('#app')
