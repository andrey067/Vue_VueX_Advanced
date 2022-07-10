<template>
    <div>
        <!-- <i v-for="estrela in estrelas" :key="estrela.id" :class="estrela.estilo"></i> -->
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "InputEstrela",
    props: {
        numeroEstrela: {
            type: Number,
            required: true,
            default: 0
        }
    },
    data: () => ({
        estrelas: []
    }),
    created() {
        this.iniciarEstrelas();
    },
    methods: {
        iniciarEstrelas() {
            for (let i = 0; i < this.numeroEstrela; i++) {
                // this.estrelas[i] = { id: i, estilo: 'bi-star estrela' }
            }
        }
    }
})
</script>

<style>
.estrela {
    font-size: 1.5rem;
    color: #999;
    margin-left: 1px;
    margin-right: 1px;
}
</style>