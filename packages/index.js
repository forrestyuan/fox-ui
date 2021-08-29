// 整个包的入口
import FoxDialog from './dialog.vue'
import FoxButton from './button.vue'
import FoxInput from './input.vue'
import FoxSwitch from './switch.vue'
import FoxRadio from './radio.vue'
import FoxRadioGroup from './radio-group.vue'
import FoxCheckbox from './checkbox.vue'
import FoxCheckboxGroup from './checkbox-group.vue'
import FoxForm from './form.vue'
import FoxFormItem from './form-item.vue'
import './fonts/font.scss'

const components = [
  FoxDialog,
  FoxButton,
  FoxInput,
  FoxSwitch,
  FoxRadio,
  FoxRadioGroup,
  FoxCheckbox,
  FoxCheckboxGroup,
  FoxForm,
  FoxFormItem
]
const install = (Vue) => {
  components.forEach(comp => {
    Vue.component(comp.name, comp)
  })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
