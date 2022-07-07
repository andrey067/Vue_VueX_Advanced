<template>
    <div class="h-100 p-5 bg-light border rounded-3">
        <h2>Pesquisar Vagas</h2>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label>Título da vaga</label>
                    <input type="text" class="form-control" v-model="termoPesquisado"
                        placeholder="Pesquise por palavras chaves, por exemplo 'PHP', 'Pleno', 'Analista'">
                    <small class="form-text text-muted">Informe palavras que estejam relacionadas com o
                        título da vaga que você procura</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-outline-dark mt-2" type="button" @click="pesquisarVaga">Buscar</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import emitter from '@/services/emitter';
export default defineComponent({
    name: "PesquisaVaga",
    data: () => ({
        termoPesquisado: ''
    }),
    methods: {
        pesquisarVaga() {
            emitter.emit("filtrarVaga", this.termoPesquisado)
        }
    }
})
</script>

<style>
</style>