import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App);

Vue.directive('texto', {
    //chamado antes que os atributos do elemento ou ouvintes de event sejam aplicados
    created(el) {
        console.log("Diretiva aplicada");
        console.log(el);
    }
});

Vue.mount('#app')
