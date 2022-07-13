<template>
    <div>
        <h3>ListFilmes</h3>
        <input type="text" placeholder="Nome do filmes" v-model="item">
        <button type="button" @click="Listamixins.AdicionarFilme()">Adicionar</button>
        <br>
        <br>
        <ul>
            <li v-for="(item, index) in itens" :key="item.indexOf">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Listamixins from '../mixins/mixins'

[Listamixins]

</script>

<style scoped>
</style>
