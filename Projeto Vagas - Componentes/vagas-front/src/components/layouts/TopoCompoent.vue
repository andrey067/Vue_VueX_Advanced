<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Vagas</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- Erro na funcao callback -->
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#" @click="funcaoCallback()">Home</a>
                    </li> -->                    
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="navegarPara()">Publicar Vaga</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script lang="ts">import { defineComponent } from "vue";


export default defineComponent({
    name: "TopoCompoent",
    props:{
        funcaoCallback: Function
    },
    methods: {
        navegarPara() {
            this.$emit('nomeDoEventoQueSeraCapturadoNoComponentePai', () =>{
                console.log("funcao callbak pelo componente filho")
            });
        }
    }
})
</script>

<style lang="scss">
</style>