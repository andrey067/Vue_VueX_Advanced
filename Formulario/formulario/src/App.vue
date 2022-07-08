<template>
  <FormularioComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioComponent from '@/components/FormularioComponent.vue';


export default defineComponent({
  name: 'App',
  components: {
    FormularioComponent
  }
});
</script>

<style>
</style>
