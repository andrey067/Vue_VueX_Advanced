<template>
    <div>        
        <HomeView/>
        <PublicarVaga/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "../../views/HomeView.vue";
import PublicarVaga from "../../views/PublicarVaga.vue";

export default defineComponent({
    name: "ConteudoComponent",
    components: { HomeView, PublicarVaga }
});
</script>

<style lang="scss">
</style>