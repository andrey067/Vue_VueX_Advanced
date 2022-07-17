<template>
  <h5>Serviços</h5>
  <hr>
  <div class="content">
    <div class="d-flex justify-content">
      <div v-for="s in servicos" :key="s.id" class=" col card-deck my-3">
        <div class="card" style="width: 11rem">
          <img class="card-img-top" :src="`/img/${s.icone}`" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <router-link :to="{ name: 'servico', params: { id: s.id } }">
              <p class="card-text">{{ s.servico }}</p>
            </router-link>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    <router-view class="mt-3" />
    <router-view name="opcoes" />
    <router-view name="indicadores" />
  </div>
</template>

<script setup lang="ts">
import { Servico } from "@src/models/Servico";
import { onMounted, ref } from "vue";
import apiclient from "../../services/apiclient";

const servicos = ref([] as Servico[]);

onMounted(() => {
  apiclient.getDadosApi<Servico[]>("http://localhost:3333/servicos").then((response: Servico[]) => {
    servicos.value = response
  })

});
</script>

<style scoped >
.card-img-top {
  width: 100%;
  height: 10vw;
  object-fit: cover;
}

.card {
  box-shadow: var(--shadow-small);
}

.card-deck:hover>div {
  opacity: 0.5;
  filter: grayscale(100%);
  transition: all 100ms ease-in-out 0ms;
  transition-property: all;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;
  transition-delay: 0ms;
}

.card-deck:hover>div:hover {
  opacity: 1;
  filter: grayscale(0%);
  box-shadow: var(--shadow-large);
}
</style>