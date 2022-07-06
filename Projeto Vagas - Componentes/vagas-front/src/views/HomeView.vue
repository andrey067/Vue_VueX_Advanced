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
import VagaComponent from '../components/comuns/VagaComponent.vue';

export default defineComponent({
    name: "HomeView",
    data: () => ({
        usuarioOnline: 0,
        vagas: [
            {
                titulo: 'Analista Programador PHP Pleno',
                descricao: 'Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.',
                salario: 6000,
                modalidade: 'Home Office',
                tipo: 'PJ',
                publicacao: '2021-10-10'
            },
            {
                titulo: 'Programador JavaScript Angular',
                descricao: 'Profissional com conhecimentos avançados em JavaScript e Angular.',
                salario: 5000,
                modalidade: 'Presencial',
                tipo: 'CLT',
                publicacao: '2021-10-07'
            },
            {
                titulo: 'Programador JavaScript Vue',
                descricao: 'Profissional com conhecimentos avançados em JavaScript e Vue.',
                salario: 5000,
                modalidade: 'Home Office',
                tipo: 'CLT',
                publicacao: '2021-10-06'
            },
            {
                titulo: 'Analista de Banco de Dados Sênior',
                descricao: 'Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL',
                salario: 9000,
                modalidade: 'Presencial',
                tipo: 'PJ',
                publicacao: '2021-10-06'
            },
            {
                titulo: 'Programador Web Júnior',
                // descricao: 'Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL',
                salario: 3000,
                modalidade: 'Presencial',
                tipo: 'CLT',
                publicacao: '2021-10-05'
            }
        ]
    }),
    components: { PesquisarVaga, IndicadorComponent, VagaComponent },
    methods: {
        getUsuarioOnline() {
            this.usuarioOnline = Math.floor(Math.random() * 100)
        }
    },
    created() {
        setInterval(this.getUsuarioOnline, 1000)
    }
});
</script>

<style>
</style>