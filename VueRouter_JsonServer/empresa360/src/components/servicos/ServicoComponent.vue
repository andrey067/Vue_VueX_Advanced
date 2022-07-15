<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ servico?.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{ servico?.descricao }}</p>
        </div>
    </div>
</template>


<script setup lang="ts">
import { Servico } from "@src/models/Servico";
import { nextTick, onMounted, ref, watch } from "vue";
import { onBeforeRouteUpdate, RouteParams, useRoute } from "vue-router";
import apiclient from '../../services/apiclient';

const route = useRoute();
const servico = ref<Servico>();

onMounted(() => {
    // console.log(route)
    apiclient.getDadosApiPorId<Servico>(`http://localhost:3333/servicos/${route.params.id}`).then((response: Servico) => {
        servico.value = response;
    });
});


onBeforeRouteUpdate((to, from) => {
    //to = route para onde estamos indo
    // from = route pde onde estamos vindo
    //next = faz com que o fluxo de navegacao siga em frente
    if (to.params.id !== undefined)
        apiclient.getDadosApiPorId<Servico>(`http://localhost:3333/servicos/${to.params.id}`).then((response: Servico) => {
            servico.value = response;
        });
    console.log(to.params.id)
    console.log(from.params.id)

})
// watch(() => route.params, (to: RouteParams) => {
//     if (to.id !== undefined)
//         apiclient.getDadosApiPorId<Servico>(`http://localhost:3333/servicos/${to.id}`).then((response: Servico) => {
//             servico.value = response;
//         });
// })

</script>

<style>
</style>import { Servico } from "@src/models/Servico";

