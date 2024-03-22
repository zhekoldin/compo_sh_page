import { createApp } from 'vue'
import App from './App.vue'
import storyBook from "@/components/storyBook";

const app = createApp(App)
storyBook.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')