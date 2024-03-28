import { createApp } from 'vue'
import App from './App.vue'
import storyBook from "@/components/storyBook";
import {Icons} from "@/icons/icons.js";

const app = createApp(App)
const addComponent = (component_list) => {
    component_list.forEach(component => {
        app.component(component.name, component)
    })
}

addComponent([...storyBook])
Icons.setSvgCanvas()

app.mount('#app')