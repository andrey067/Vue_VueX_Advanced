<template>
    <slot 
        atributo1="Atributo passado pelo componente Pai"
        atributo2="Atributo passado pelo componente Pai"
    >
        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <!-- <VagaComponent :titulo="vaga.titulo" :descricao="vaga.descricao" :salario="vaga.salario"
                    :modalidade="vaga.modalidade" :tipo="vaga.tipo" :publicacao="vaga.publicacao" /> -->
                <VagaComponent v-bind="vaga" />
            </div>
        </div>
    </slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VagaComponent from '@/components/comuns/VagaComponent.vue';
import emitter from "@/services/emitter";

export default defineComponent({
    name: "ListaVaga",
    data: () => ({
        vagas: Array<any>()
    }),
    components: {
        VagaComponent,
    },
    mounted() {
        emitter.on("filtrarVaga", (termopesquisa) => {
            let vagasLocalStorage = JSON.parse(localStorage.getItem('vagas')!);
            // cria um nova array com uma validacao
            // this.vagas = vagas.filter(req => req.titulo.toLowerCase().includes(termopesquisa.toLowerCase()))

        })
        this.vagas = JSON.parse(localStorage.getItem('vagas')!);
    }
})
</script>

<style>
</style>