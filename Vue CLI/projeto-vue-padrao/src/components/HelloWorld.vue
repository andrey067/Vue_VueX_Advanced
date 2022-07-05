<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Variavel de ambiente - {{ varialve }}</h2>
    <h2>Links da API- {{ url_api }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    varialve: process.env.VUE_APP_MINHA_VARIAVEL_DE_AMBIENTE,
    url_api: process.env.VUE_APP_API_URL
  }),
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
