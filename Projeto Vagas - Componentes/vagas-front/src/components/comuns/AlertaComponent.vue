<template>
    <!-- Recebendo html do componente Pai -->
    <!-- <div>
        <slot></slot>
    </div> -->
    <!-- Passando multiplos slots  -->
    <div :class="estiloAlerta" role="alert">
        <slot name="titulo">
            <h3>Titudo da mensagem de feedback</h3>
        </slot>
        <hr>
        <slot name="descricao">
            <p>Mensagem de feedback</p>
        </slot>

        <!-- Slot padrao -->
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AlertaComponent",
    props: {
        tipo: String
    },
    computed: {
        estiloAlerta() {
            switch (this.tipo) {
                case 'erro': return 'alert alert-danger'
                case 'sucesso': return 'alert alert-success'
                default: return 'alert alert-success'
            }
        }
    }
})
</script>

<style>
</style>