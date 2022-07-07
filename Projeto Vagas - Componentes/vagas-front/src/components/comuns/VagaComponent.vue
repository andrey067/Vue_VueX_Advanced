<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{ titulo }}</div>
        <div class="card-body">
            <p>{{ descricao }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }}| Tipo: {{ getTipo }} |
                Publicação:
                {{ publicacao }}</small>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
    name: "VagaComponent",
    // props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao']
    props: {
        titulo: {
            type: String,
            required: true,
            validator(p: string) {
                //console.log('Prop: ', p, )
                if (p.length < 6) return false //se estiver inválido
                return true //se estiver válido
            }
        },
        descricao: {
            type: String,
            require: true,
            default: 'Contratante não cadastro um descrição',
        },
        salario: {
            type: Number,
            require: true
        },
        modalidade: {
            type: String,
            require: true
        },
        publicacao: {
            type: String,
            require: true,            
        },
        tipo: {
            type: String,
            require: true
        },
    },
    computed: {
        getModalidade() {
            switch (this.modalidade) {
                case '1': return 'Home Office';
                case '2': return 'Presencial';
            }
            return '';
        },
        getTipo() {
            switch (this.tipo) {
                case '1': return 'CLT';
                case '2': return 'PJ';
            }
            return ''
        },
        getPublicacao() {
            if (this.publicacao?.valueOf() == undefined) {
                let datapublicacao = new Date('').toLocaleDateString('pt-br');
                return datapublicacao;
            }
            return new Date(Date.now()).toLocaleDateString('pt-br')
        }
    }
})
</script>

<style>
</style>