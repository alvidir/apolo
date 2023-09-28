import type { App } from "vue";
import AButton from "./AButton.vue";
import ASwitch from "./ASwitch.vue";

function include(app: App): App {
    return app
        .component("a-button", AButton)
        .component("a-switch", ASwitch);
}

export { include, AButton, ASwitch };
