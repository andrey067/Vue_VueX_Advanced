<template>
  <div style="display: flex; flex-direction: row;">
    <div style="flex-basis: 33%">
      <ListaFilmes />
    </div>
    <div style="flex-basis: 33%">
      <ListaPessoa />
    </div>

    <div style="flex-basis: 33%">
      <ListaVideoGames />
    </div>
  </div>
</template>

<script setup lang="ts">
import ListaFilmes from './components/ListaFilmes.vue';
import ListaPessoa from './components/ListaPessoa.vue';
import ListaVideoGames from './components/ListaVideoGames.vue';

</script>
<style scoped>
</style>
