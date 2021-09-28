 
import { createI18n } from 'vue-i18n'
import en from './en.json'
import tr from './tr.json' 

const messages = {
  tr: tr,
  en: en
}
 
const i18n = createI18n({
  locale: localStorage.getItem("lang") , // set locale
  fallbackLocale: localStorage.getItem("lang") , // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

export default i18n