<template>
    <div>
        <!-- <router-link class="btn btn-primary" :to="{ name: 'rotaContratos', query: { servicoId_like: 1 } }">LeadId =1
        </router-link> -->

        <!-- <router-link class="btn btn-primary" :to="{}">ServicoId =2</router-link> -->
        <div class="card mb-4">
            <div class="card-header">Contratos</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <label class="form-label">ID Contrato:</label>
                        <input v-model="parametroBusca.id_like" type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <label class="form-label">Data início:</label>
                        <div class="input-group">
                            <input v-model="parametroBusca.data_inicio_gte" type="date" class="form-control">
                            <input v-model="parametroBusca.data_inicio_lte" type="date" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary" @click="Pesquisar()">Pesquisar</button>
            </div>
        </div>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">LEAD</th>
                    <th scope="col">SERVICO</th>
                    <th scope="col">DATA INÍCIO</th>
                    <th scope="col">DATA FIM</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in dados" :key="d.id">
                    <td>{{ d.id }}</td>
                    <td>{{ d.lead.nome }}</td>
                    <td>{{ d.servico.servico }}</td>
                    <td>{{ d.data_inicio }}</td>
                    <td>{{ d.data_fim }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { Contrato } from '../../models/Contrato';
import { onMounted, ref, reactive } from 'vue';
import apiclient from '../../services/apiclient';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const parametroBusca = reactive({
    id_like: '',
    data_inicio_gte: '',
    data_inicio_lte: ''
});

function Pesquisar() {
    console.log(parametroBusca.id_like)
    console.log(parametroBusca.data_inicio_gte)
    console.log(parametroBusca.data_inicio_lte)
    const queryParams = new URLSearchParams(parametroBusca).toString()
    console.log("queryParams", queryParams);
    const url = `http://localhost:3333/contratos?${parametrosDeRelacionamento.value}&${queryParams}}`;
    apiclient.getDadosApi<Contrato[]>(url).then((response) => {
        dados.value = response
    })
}

const dados = ref<Contrato[]>()
const parametrosDeRelacionamento = ref<string>('_expand=lead&_expand=servico');
const route = useRoute()
onMounted(() => {
    //tratando params
    const queryParams = new URLSearchParams(route.query).toString()
    apiclient.getDadosApi<Contrato[]>(`http://localhost:3333/contratos?${parametrosDeRelacionamento.value}&${queryParams}}`).then((response: Contrato[]) => {
        dados.value = response
    })
})

onBeforeRouteUpdate((to, from) => {
    console.log(to) //url -- URLSearchParams
    const query = JSON.stringify(to.query);
    console.log("query", query)
    const queryParams = new URLSearchParams(to.query).toString();
    console.log("queryParams", queryParams)
    const url = `http://localhost:3333/contratos?${parametrosDeRelacionamento.value}&${queryParams}`;
    console.log("url", url)
    apiclient.getDadosApi<Contrato[]>(url).then((response: Contrato[]) => {
        dados.value = response
    })
});


</script>