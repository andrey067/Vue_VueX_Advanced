<template>
  <h1>TExto</h1>
  <topo-compoent />
  <conteudo-component />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ConteudoComponent from './components/layouts/ConteudoComponent.vue';
import TopoCompoent from './components/layouts/TopoCompoent.vue';

export default defineComponent({
  name: 'App',
  components: {
    ConteudoComponent,
    TopoCompoent
  }
});
</script>

<style scoped lang="scss">
h1 {
  color: red
}
</style>
