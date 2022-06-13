import { createApp } from 'vue'
import App from './App.vue'
import 'atropos/css'


createApp(App).mount('#app')

import mainHome from './components/main/mainHome.vue'
createApp(App).component(mainHome.name, mainHome)


import mainCategory from './components/main/mainCategory.vue'
createApp(App).component(mainCategory.name, mainCategory)

import mainContact from './components/main/mainContact.vue'
createApp(App).component(mainContact.name, mainContact)

import footerDefault from './components/footer.vue'
createApp(App).component(footerDefault.name, footerDefault)