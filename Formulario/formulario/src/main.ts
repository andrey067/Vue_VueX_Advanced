import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $moment: typeof moment;
    }
}

const app = createApp(App);


app.use(Maska); //plugin
app.config.globalProperties.$moment = moment;

app.mount('#app');


