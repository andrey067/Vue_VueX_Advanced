<template>
    <div class="card">

        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                        {{ titulo }}
                    </div>
                    <div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" v-model="favoritada">
                            <label class="form-check-label">Favoritar</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-body">
            <p>{{ descricao }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }}| Tipo: {{ getTipo }} |
                Publicação:
                {{ getPublicacao }}</small>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import emitter from "@/services/emitter";

export default defineComponent({
    name: "VagaComponent",
    data: () => ({
        favoritada: false
    }),
    watch: {
        favoritada(valorNovo, _) {
            if (valorNovo) {
                emitter.emit("favoritarVaga", this.titulo);
            } else {
                emitter.emit("desfavoritarVaga", this.titulo);
            }
        }
    },
    // props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao']
    props: {
        titulo: {
            type: String,
            required: true,
            validator(p: string) {
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
    },
})
</script>

<style>
</style>