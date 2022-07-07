import { defineComponent } from "vue";

<template>
    <div>
        <div class="divVagasFavoritas">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">Vagas Favoritas</button>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Vagas Favoritadas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(vaga, index) in vagas" :key="index">
                        {{ vaga }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emitter from "@/services/emitter";

export default defineComponent({
    name: "VagasFavoritas",
    data: () => ({
        vagas: Array<string>()
    }),
    mounted() {
        emitter.on("favoritarVaga", (titulo) => {
            let tituloTipado = titulo as string;
            this.vagas.push(tituloTipado);
        }),
            emitter.on("desfavoritarVaga", (titulo) => {
                let tituloTipado = titulo as string;
                let indiceArray = this.vagas.indexOf(tituloTipado);
                if (indiceArray !== -1) this.vagas.splice(indiceArray, 1);
            })
    }
})

</script>

<style scoped>
.divVagasFavoritas {
    position: absolute;
    z-index: 1;
    top: 70px;
    right: 0px
}
</style>