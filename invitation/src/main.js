import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'atropos/css'

const Vue = createApp(App);

Vue.use(router);
Vue.mount('#app');


import mainHome from './components/main/mainHome.vue'
Vue.component(mainHome.name, mainHome)


import mainCategory from './components/main/mainCategory.vue'
Vue.component(mainCategory.name, mainCategory)

import mainContact from './components/main/mainContact.vue'
Vue.component(mainContact.name, mainContact)

import footerDefault from './components/footer.vue'
Vue.component(footerDefault.name, footerDefault)