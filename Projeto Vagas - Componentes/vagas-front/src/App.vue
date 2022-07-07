<template>
  <!-- chamada via $emit do compoente filho -->
  <!-- <topo-compoent @nomeDoEventoQueSeraCapturadoNoComponentePai="acao($event())" /> -->
  <vagas-favoritas></vagas-favoritas>
  <topo-compoent :funcaoCallback="acao" />

  <!-- Passando html para o componente filho usando slot -->
  <!-- <alerta-component v-if="exibirAlerta">
    <div class="alert alert-success" role="alert">
      <h5>Título do alerta</h5>
      <hr>
      <p>Descrição do alerta</p>
    </div>
  </alerta-component> -->

  <alerta-component v-if="exibirAlerta" :tipo="alerta.tipo">
    <template v-slot:titulo>
      <h5>{{ alerta.titulo }}</h5>
    </template>
    <template v-slot:descricao>
      <p>{{ alerta.descricao }}</p>
    </template>
  </alerta-component>

  <conteudo-component />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import emitter from './services/emitter';
import ConteudoComponent from './components/layouts/ConteudoComponent.vue';
import TopoCompoent from './components/layouts/TopoCompoent.vue';
import VagasFavoritas from './components/comuns/VagasFavoritas.vue';
import AlertaComponent from '@/components/comuns/AlertaComponent.vue'

export default defineComponent({
  name: 'App',
  data: () => ({
    exibirAlerta: false,
    alerta: Object()
  }),
  methods: {
    acao(): void {
      console.log("Funcao no componente pai e chamda no componente filho")
    }
  },
  components: {
    ConteudoComponent,
    TopoCompoent,
    VagasFavoritas,
    AlertaComponent
  },
  mounted() {
    emitter.on('Alerta', (mensagem) => {
      this.alerta = mensagem;
      this.exibirAlerta = true;
      setTimeout(() => {
        this.exibirAlerta = false;
      }, 4000)
      console.log("Apresentar a mensagem de alerta customizado");
    });
  }
});
</script>

<style scoped lang="scss">
</style>
