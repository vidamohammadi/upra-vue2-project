import Vue from 'vue'
import App from './App.vue'

// Import Vuetify و استایل‌ها
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

const vuetify = new Vuetify({})

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
