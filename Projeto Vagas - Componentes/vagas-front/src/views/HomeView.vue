<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <PesquisarVaga />
            </div>
        </div>
        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <!-- <VagaComponent :titulo="vaga.titulo" :descricao="vaga.descricao" :salario="vaga.salario"
                    :modalidade="vaga.modalidade" :tipo="vaga.tipo" :publicacao="vaga.publicacao" /> -->
                <VagaComponent v-bind="vaga" />
            </div>
        </div>
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
import VagaComponent from '@/components/comuns/VagaComponent.vue';
import emitter from '../services/emitter';

export default defineComponent({
    name: "HomeView",
    data: () => ({
        usuarioOnline: 0,
        vagas: []
    }),
    components: { PesquisarVaga, IndicadorComponent, VagaComponent },
    methods: {
        getUsuarioOnline() {
            this.usuarioOnline = Math.floor(Math.random() * 100)
        }
    },
    created() {
        setInterval(this.getUsuarioOnline, 1000)
    },
    mounted() {
        emitter.on("filtrarVaga", (termopesquisa) => {
            const vagas = JSON.parse(localStorage.getItem('vagas')!);
            // cria um nova array com uma validacao
            // this.vagas = vagas.filter(req => req.titulo.toLowerCase().includes(termopesquisa.toLowerCase()))

        })
        this.vagas = JSON.parse(localStorage.getItem('vagas')!);
    },

});
</script>

<style>
</style>