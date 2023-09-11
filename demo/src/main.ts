import { include } from 'apolo'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
include(app)

app.use(router)

app.mount('#app')
