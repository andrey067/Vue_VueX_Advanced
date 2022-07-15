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
import { onMounted, ref, watch } from "vue";
import { RouteParams, useRoute } from "vue-router";
import apiclient from '../../services/apiclient';

const route = useRoute();
const servico = ref<Servico>();

onMounted(() => {
    // console.log(route)
    apiclient.getDadosApiPorId<Servico>(`http://localhost:3333/servicos/${route.params.id}`).then((response: Servico) => {
        servico.value = response;
    });
});

watch(() => route.params, (to: RouteParams) => {
    if (to.id !== undefined)
        apiclient.getDadosApiPorId<Servico>(`http://localhost:3333/servicos/${to.id}`).then((response: Servico) => {
            servico.value = response;
        });
})

</script>

<style>
</style>import { Servico } from "@src/models/Servico";

