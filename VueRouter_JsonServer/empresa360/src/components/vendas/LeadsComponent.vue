

<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NOME</th>
          <th scope="col">TELEFONE</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.nome }}</td>
          <td>{{ d.telefone }}</td>
          <td>
            <!-- <router-link :to="`/home/vendas/leads/${d.id}`" class="btn btn-sm btn-primary">
              <i class="bi bi-pencil-square" style="cursor: pointer"></i>
            </router-link> -->
            <router-link :to="{ name: 'lead', params: { id: d.id } }" class="btn btn-sm btn-primary">
              <i class="bi bi-pencil-square" style="cursor: pointer"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Lead } from "@src/models/Lead";
import { onMounted, ref } from "vue";
import apiclient from "../../services/apiclient";

const dados = ref([] as Lead[]);

onMounted(() => {
  apiclient.getDadosApi<Lead[]>("http://localhost:3000/leads").then((response: Lead[]) => {
    dados.value = response
  })

});
</script>

<style>
</style>