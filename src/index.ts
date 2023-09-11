import type { App } from 'vue'
import RegularButton from './buttons/RegularButton.vue'
import SubmitButton from './buttons/SubmitButton.vue'
import SwitchButton from './buttons/SwitchButton.vue'
import CheckButton from './buttons/CheckButton.vue'

function include(app: App): App {
  return app
    .component('regular-button', RegularButton)
    .component('submit-button', SubmitButton)
    .component('switch-button', SwitchButton)
    .component('check-button', CheckButton)
}

export { include, RegularButton, SubmitButton, SwitchButton, CheckButton }
