<template>
    <div>
        <div>
            <h5>{{ lead?.id }} - {{ lead?.nome }}</h5>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">ID</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" :value="lead?.id">
                </div>
            </div>

            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Nome</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" :value="lead?.nome">
                </div>
            </div>

            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Telefone</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" :value="lead?.telefone">
                </div>
            </div>

            <div class="col-auto d-flex justify-content-between">
                <!-- Navegacao Programatica -->
                <button type="button" class="btn btn-warning" @click="router.push({ name: 'leads' })">Voltar</button>
                <!-- <button type="button" class="btn btn-warning" @click="router.push('/home/vendas/leads')">Voltar</button> -->
                <button type="button" class="btn btn-primary">Atualizar</button>
            </div>
        </div>
    </div>
    <router-view />
</template>

<script setup lang="ts">
import { Lead } from "@src/models/Lead";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiclient from '../../services/apiclient';
const router = useRouter();
const route = useRoute();
const lead = ref<Lead>();

onMounted(() => {
    console.log(route)
    apiclient.getDadosApiPorId<Lead>(`http://localhost:3333/leads/${route.params.id}`).then((response: Lead) => {
        lead.value = response;
    })
})


</script>

<style>
</style>