import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
import axios from 'axios';

const app = createApp(App)
const pinia = createPinia()
pinia.use(context=>{
    const storeId = context.store.$id
    const serializer = {
        serialize : JSON.stringify,
        deserialize : JSON.parse
    }
    const data = serializer.deserialize(window.localStorage.getItem(storeId))
    if(data){
        context.store.$patch(data)
    }
    context.store.$subscribe((m,s)=>{
        window.localStorage.setItem(storeId,serializer.serialize(s))
    })
})
app.use(createPinia())
app.use(router)
app.component('header-tag',Header)
app.component('footer-tag',Footer)
axios.defaults.baseURL = "http://localhost:3000"
app.use(pinia)
app.mount('#app')
