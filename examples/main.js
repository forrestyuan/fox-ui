import Vue from 'vue'
import App from './App.vue'
import FoxUI from '../packages'

Vue.config.productionTip = false

Vue.use(FoxUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
