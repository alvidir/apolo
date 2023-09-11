import installApolo from 'apolo'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
installApolo(app)

app.use(router)

app.mount('#app')
