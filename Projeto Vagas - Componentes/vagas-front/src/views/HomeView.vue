<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <PesquisarVaga />
            </div>
        </div>
        <!-- <VagaComponent :titulo="vaga.titulo" :descricao="vaga.descricao" :salario="vaga.salario"
                    :modalidade="vaga.modalidade" :tipo="vaga.tipo" :publicacao="vaga.publicacao" /> -->

        <h2>Template customizado</h2>
        <ListaVaga v-slot:default="slotProps">
            <div v-for="(vaga, index) in slotProps.vagas" :key="index">
                <h4>{{ vaga.titulo }}</h4>
                <p>{{ vaga.descricao }}</p>
                <hr>
            </div>
        </ListaVaga>

        <br><br>
        <h2>Template padrao</h2>
        <ListaVaga></ListaVaga>

        <div class="row mt-5">
            <div class="col-4">
                <IndicadorComponent titulo="Vagas Abertas" valor="100" bg="bg-dark" color="text-white" />
            </div>

            <div class="col-4">
                <IndicadorComponent titulo="Profissionais cadastraos" valor="50" bg="bg-dark" color="text-white" />
            </div>

            <div class="col-4">
                <IndicadorComponent titulo="Visitantes online" :valor="usuarioOnline" bg="bg-light" color="text-dark" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue';
import IndicadorComponent from '@/components/comuns/IndicadorComponent.vue';
import emitter from '../services/emitter';
import ListaVaga from '@/components/comuns/ListaVaga.vue';

export default defineComponent({
    name: "HomeView",
    data: () => ({
        usuarioOnline: 0
    }),
    components: { PesquisarVaga, IndicadorComponent, ListaVaga },
    methods: {
        getUsuarioOnline() {
            this.usuarioOnline = Math.floor(Math.random() * 100)
        }
    },
    created() {
        setInterval(this.getUsuarioOnline, 1000)
    },
});
</script>

<style>
</style>