<template>
    <div class="container">
        <div class="row">
            <div class="col-6 bg-light">
                <span class="fs-4">ENTRADA DE DADOS</span>
                <hr>
                <form>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Nome:</label>
                        <div class="col">
                            <!-- apos perder o foco do input reflete na model -->
                            <input type="text" class="form-control" v-model.lazy="formulario.nome">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">E-mail:</label>
                        <div class="col">
                            <input type="email" class="form-control" v-model="formulario.email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Senha:</label>
                        <div class="col">
                            <!-- Remove o espaços -->
                            <input type="password" class="form-control" v-model.trim="formulario.senha">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Idade:</label>
                        <div class="col">
                            <input type="number" class="form-control" v-model="formulario.idade">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Gênero:</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Feminino"
                                    v-model="formulario.genero">
                                <label class="form-check-label">
                                    Feminino
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Masculino"
                                    v-model="formulario.genero">
                                <label class="form-check-label">
                                    Masculino
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Licença:</label>
                        <div class="col">
                            <div class="form-check form-switch">
                                <!-- <input class="form-check-input" type="checkbox" v-model="form.licenca" true-value="SIM"
                                    false-value="NÂO"> -->
                                <input class="form-check-input" type="checkbox" v-model="formulario.licenca">
                                <label class="form-check-label">Li e aceito os termos</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Interesses:</label>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="JavaScript"
                                    v-model="formulario.interesses">
                                <label class="form-check-label">
                                    JavaScript
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="VueJS"
                                    v-model="formulario.interesses">
                                <label class="form-check-label">
                                    VueJS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="Angular"
                                    v-model="formulario.interesses">
                                <label class="form-check-label">
                                    Angular
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="NodeJS"
                                    v-model="formulario.interesses">
                                <label class="form-check-label">
                                    NodeJS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Telefone:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'(##) #####-####'"
                                v-model="formulario.telefone">
                            <small class="text-muted">Formato: 11 97777-5555</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CEP:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'#####-###'" v-model="formulario.cep">
                            <small class="text-muted">Formato: 00000-000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CPF:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'###.###.###-##'" v-model="formulario.cpf">
                            <small class="text-muted">Formato: 000.000.000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CNPJ:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'##.###.###/####-##'"
                                v-model="formulario.cnpj">
                            <small class="text-muted">Formato: 00.000.000/0000-0</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">RG:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'#*-X'" v-model="formulario.rg">
                            <small class="text-muted">Formato: Sem padrão</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa Veiculo:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'AAA-####'"
                                v-model="formulario.placaVeiculo">
                            <small class="text-muted">Formato: AAA-0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa Merco Sul:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-maska="'AAA#A##'"
                                v-model="formulario.placaVeiculoMercoSul">
                            <small class="text-muted">Formato: AAA0A00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data:</label>
                        <div class="col">
                            <input type="date" class="form-control" v-model="formulario.data">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data/hora local:</label>
                        <div class="col">
                            <input type="datetime-local" class="form-control" v-model="formulario.dataHoraLocal">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Mês:</label>
                        <div class="col">
                            <input type="month" class="form-control" v-model="formulario.mes">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Semana:</label>
                        <div class="col">
                            <input type="week" class="form-control" v-model="formulario.semana">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Hora:</label>
                        <div class="col">
                            <input type="time" class="form-control" v-model="formulario.hora">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cor:</label>
                        <div class="col">
                            <input type="color" class="form-color" v-model="formulario.cor">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Valor limite:</label>
                        <div class="col">
                            <input type="range" class="form-range" min="0" max="100" step="1"
                                v-model="formulario.range">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                            <input type="hidden" class="form-control" v-model="formulario.hidden">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Upload:</label>
                        <div class="col">
                            <!-- <input type="file" class="form-control" multiple @change="selecionarArquivo($event)"> -->
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Text Area:</label>
                        <div class="col">
                            <input type="text-area" class="form-control" v-model="formulario.textArea">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cursos:</label>
                        <div class="col">
                            <select class="form-select" v-model="formulario.curso">
                                <option value="" disabled>--Selecione uma opção</option>
                                <option v-for="curso in cursos" :key="curso.id" :value="curso">
                                    {{ curso.id }} - {{ curso.curso }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col">
                            <label class="col-3 col-form-label">Estrelas:</label>
                            <InputEstrela :numero-estrela="4" />
                        </div>
                    </div>
                </form>
            </div>
            <hr>
            <div class="mb-3 row">
                <div class="col d-flex justify-content-between">
                    <button class="btn btn-secondary" type="reset">Limpar</button>
                    <button class="btn btn-success" type="button">Enviar (btn)</button>
                    <button class="btn btn-success" type="submit">Enviar (submit)</button>
                </div>
            </div>
        </div>

        <div class="col-6 text-white bg-secondary" :style="'background-color' + formulario.cor + '!important'">
            <span class="fs-4">ESTADO DO OBJETO</span>
            <hr>
            <div class="mb-5 row">
                <span>Estado do objeto</span>
                {{ formulario }}
            </div>

            <span class="fs-4">SAÍDA DE DADOS</span>
            <hr>
            <div class="mb-3 row">
                <span>Nome:{{ formulario.nome }}</span>
            </div>
            <div class="mb-3 row">
                <span>E-mail:{{ formulario.email }}</span>
            </div>
            <div class="mb-3 row">
                <span>Senha:{{ formulario.senha }}</span>
            </div>
            <div class="mb-3 row">
                <span>Idade:</span>
            </div>
            <div class="mb-3 row">
                <span>Gênero: {{ formulario.genero }}</span>
            </div>
            <div class="mb-3 row">
                <span>Licença: {{ formulario.licenca }}</span>
            </div>
            <div class="mb-3 row">
                <span>Interesses:
                    <ul>
                        <li v-for="(interesse, index) in formulario.interesses" :key="index">{{ interesse }}</li>
                    </ul>
                </span>
            </div>
            <div class="mb-3 row">
                <span>Telefone: {{ formulario.telefone }}</span>
            </div>
            <div class="mb-3 row">
                <span>Cep: {{ formulario.cep }}</span>
            </div>
            <div class="mb-3 row">
                <span>CPF: {{ formulario.cpf }}</span>
            </div>
            <div class="mb-3 row">
                <span>CNPJ: {{ formulario.cnpj }}</span>
            </div>
            <div class="mb-3 row">
                <span>CARTAO DEBITO: {{ formulario.cartaoDebito }}</span>
            </div>
            <div class="mb-3 row">
                <span>Data: {{ formulario.data }} | {{ $moment(formulario.data).format('DD/MM/YYYY') }}</span>
            </div>
            <div class="mb-3 row">
                <span>Data/hora local: {{ formulario.dataHoraLocal }}</span>
                <ul>
                    <li>
                        {{ $moment(formulario.dataHoraLocal).format('dddd') }}
                    </li>
                    <!-- adicionar Dias e removendo datas -->
                    <li>
                        {{ $moment(formulario.dataHoraLocal).add(10, 'days') }}
                    </li>
                    <li>
                        {{ $moment(formulario.dataHoraLocal).add(1, 'month') }}
                    </li>
                    <li>
                        {{ $moment(formulario.dataHoraLocal).add(2, 'years') }}
                    </li>
                    <li>
                        {{ $moment(formulario.dataHoraLocal).subtract(2, 'years') }}
                    </li>
                </ul>
            </div>
            <div class="mb-3 row">
                <span>Mês: {{ formulario.mes }}</span>
            </div>
            <div class="mb-3 row">
                <span>Semana: {{ formulario.semana }}</span>
            </div>
            <div class="mb-3 row">
                <span>Hora: {{ formulario.hora }}</span>
            </div>
            <div class="mb-3 row">
                <span>Cor: {{ formulario.cor }}</span>
            </div>
            <div class="mb-3 row">
                <span>Valor limite: {{ formulario.range }}</span>
            </div>
            <div class="mb-3 row">
                <span>Escondido: {{ formulario.hidden }}</span>
            </div>
            <div class="mb-3 row">
                <span>Upload:</span>
            </div>
            <div class="mb-3 row">
                <span>TextArea:</span>
                <pre>{{ formulario.textArea }}</pre>
            </div>
            <div class="mb-3 row">
                <span>Curso: {{ formulario.curso }}</span>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputEstrela from "./InputEstrela.vue";

export default defineComponent({
    name: "FormularioComponent",
    data: () => ({
        cursos: [
            { id: 1, curso: "Bancos de Dados Relacionais" },
            { id: 2, curso: "Desenvolvimento Web Avançado com Vue" },
            { id: 3, curso: "Desenvolvimento Web Avançando com Laravel" },
            { id: 4, curso: "Curso Completo do Desenvolvedor NodeJS e MongoDB" }
        ],
        formulario: {
            nome: "",
            email: "",
            idade: Number,
            senha: "",
            licenca: false,
            // licenca: "SIM"
            interesses: Array<any>(),
            genero: "",
            telefone: "",
            cep: "",
            cpf: "",
            cnpj: "",
            rg: "",
            cartaoDebito: "",
            placaVeiculo: "",
            placaVeiculoMercoSul: "",
            data: "",
            dataHoraLocal: "",
            mes: "",
            semana: "",
            hora: "",
            cor: "#6c757d",
            range: "",
            hidden: "Este input esta escondigo",
            file: Object(),
            textArea: "",
            curso: ""
        },
        methods: {
            selecionarArquivo(evento: Event) {
                console.log(evento);
            }
        },
    }),
    components: { InputEstrela }
}) 
</script>
