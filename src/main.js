import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import FoxDialog from './components/dialog.vue'
import FoxButton from './components/button.vue'
import FoxInput from './components/input.vue'
import FoxSwitch from './components/switch.vue'
import FoxRadio from './components/radio.vue'
import FoxRadioGroup from './components/radio-group.vue'
import FoxCheckbox from './components/checkbox.vue'
import FoxCheckboxGroup from './components/checkbox-group.vue'
import FoxForm from './components/form.vue'
import FoxFormItem from './components/form-item.vue'

Vue.config.productionTip = false

Vue.component(FoxButton.name, FoxButton)
Vue.component(FoxDialog.name, FoxDialog)
Vue.component(FoxInput.name, FoxInput)
Vue.component(FoxSwitch.name, FoxSwitch)
Vue.component(FoxRadio.name, FoxRadio)
Vue.component(FoxRadioGroup.name, FoxRadioGroup)
Vue.component(FoxCheckbox.name, FoxCheckbox)
Vue.component(FoxCheckboxGroup.name, FoxCheckboxGroup)
Vue.component(FoxForm.name, FoxForm)
Vue.component(FoxFormItem.name, FoxFormItem)

new Vue({
  render: h => h(App)
}).$mount('#app')
