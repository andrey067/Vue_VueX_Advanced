import { createApp } from 'vue'
import App from './App.vue'

//importando mitt
import mitt from 'mitt'

const emitter = mitt();

//Iniciar a instacia do vue com base no componente
//createApp(App).mount('#app')
const app = createApp(App);

//configurar a instancia do pacote mitt como sendo uma propriedade global
//disponivel para toda a instancia do app
app.config.globalProperties.emitter = emitter;
app.mount('#app');
