import { createApp } from 'vue'
import App from './App.vue'

import VueRellax from 'vue-rellax'
createApp(App).use(VueRellax);

createApp(App).mount('#app')

import mainHome from './components/main/mainHome.vue'
createApp(App).component(mainHome.name, mainHome)


import mainCategory from './components/main/mainCategory.vue'
createApp(App).component(mainCategory.name, mainCategory)