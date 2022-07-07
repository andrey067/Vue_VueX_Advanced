<template>
  <!-- chamada via $emit do compoente filho -->
  <!-- <topo-compoent @nomeDoEventoQueSeraCapturadoNoComponentePai="acao($event())" /> -->
  <topo-compoent :funcaoCallback="acao" />
  <conteudo-component />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ConteudoComponent from './components/layouts/ConteudoComponent.vue';
import TopoCompoent from './components/layouts/TopoCompoent.vue';

export default defineComponent({
  name: 'App',
  methods: {
    acao(_ : Event): void {
      console.log("Funcao no componente pai e chamda no componente filho")
    }
  },
  components: {
    ConteudoComponent,
    TopoCompoent
  }
});
</script>

<style scoped lang="scss">
</style>
