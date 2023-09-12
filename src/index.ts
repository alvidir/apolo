import type { App } from "vue";
import RegularButton from "./buttons/RegularButton.vue";
import SwitchButton from "./buttons/SwitchButton.vue";
import CheckButton from "./buttons/CheckButton.vue";
import "./styles/index.scss";

function include(app: App): App {
    return app
        .component("regular-button", RegularButton)
        .component("switch-button", SwitchButton)
        .component("check-button", CheckButton);
}

export { include, RegularButton, SwitchButton, CheckButton };
