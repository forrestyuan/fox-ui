import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import FoxButton from './components/button.vue'
import FoxDialog from './components/dialog.vue'

Vue.config.productionTip = false

Vue.component(FoxButton.name, FoxButton)
Vue.component(FoxDialog.name, FoxDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
