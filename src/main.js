import { createApp } from 'vue'
import App from './App.vue'
import storyBook from "@/components/storyBook";
import UI from "@/components/UI"

const app = createApp(App)
const addComponent = (component_list) => {
    component_list.forEach(component => {
        app.component(component.name, component)
    })
}

addComponent([...storyBook, ...UI])

app.mount('#app')