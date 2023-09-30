import type { App } from "vue";
import AButton from "./AButton.vue";
import ASwitch from "./ASwitch.vue";
import ACard from "./ACard.vue";

function include(app: App): App {
    return app
        .component("a-button", AButton)
        .component("a-switch", ASwitch)
        .component("a-card", ACard);
}

export { include, AButton, ASwitch, ACard };
