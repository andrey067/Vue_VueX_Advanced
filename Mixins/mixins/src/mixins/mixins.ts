import { ref } from "vue";

let itens = ref<any>([]);
let item = ref('');
export default {    
    AdicionarFilme() {
        itens.push(item);
        console.log("chegamos até aqui", item.value, itens.value)
    }

}

 