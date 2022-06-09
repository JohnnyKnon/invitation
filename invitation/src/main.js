import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import mainHome from './components/main/mainHome.vue'
createApp(App).component(mainHome.name, mainHome)