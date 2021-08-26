import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import FoxDialog from './components/dialog.vue'
import FoxButton from './components/button.vue'
import FoxInput from './components/input.vue'

Vue.config.productionTip = false

Vue.component(FoxButton.name, FoxButton)
Vue.component(FoxDialog.name, FoxDialog)
Vue.component(FoxInput.name, FoxInput)

new Vue({
  render: h => h(App)
}).$mount('#app')
