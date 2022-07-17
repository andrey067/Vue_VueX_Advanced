import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SiteView from '../views/SiteView.vue';
import VendasComponent from '../components/vendas/VendasComponent.vue';
import ServicosComponent from '../components/servicos/ServicosComponent.vue';
import LeadsComponent from '../components/vendas/LeadsComponent.vue'
import LeadComponent from '../components/vendas/LeadComponent.vue'
import ContratosComponent from '../components/vendas/ContratosComponent.vue'
import DashboardComponent from '../components/dashboard/DashboardComponent.vue';
import DashboardRodape from '../components/dashboard/DashboardRodape.vue';
import VendasPadrao from '../components/vendas/VendasPadrao.vue';
import ServicoComponent from '../components/servicos/ServicoComponent.vue';
import OpcoesComponent from '../components/servicos/OpcoesComponent.vue';
import IndicadoresComponent from '../components/servicos/IndicadoresComponent.vue';
import PaginaNaoEncontrada from '../views/PaginaNaoEncontrada.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',//localhost:3000/
    component: SiteView,
  },
  {
    path: '/home', //localhost:8080/home
    alias: '/app',
    component: HomeView,
    children: [
      {
        path: 'vendas',
        component: VendasComponent,
        children: [
          {
            path: 'leads',
            component: LeadsComponent,
            name: 'leads'
          },
          {
            path: 'leads/:id',
            component: LeadComponent,
            name: 'lead'
          },
          {
            path: 'contratos',
            component: ContratosComponent,
            name: 'rotaContratos'
          },
          {
            path: '',
            component: VendasPadrao
          },
        ]
      },
      {
        path: 'servicos',
        component: ServicosComponent,
        name: 'rotaServico',
        children:
          [
            {
              path: ':id',
              alias: '/s/:id',
              name: 'servico', components:
              {
                default: ServicoComponent,
                indicadores: IndicadoresComponent,
                opcoes: OpcoesComponent
              }
            }
          ]
      },
      {
        path: 'dashboard',
        components: {
          default: DashboardComponent,
          rodape: DashboardRodape
        }
      },
      { path: '/redirecionamentoServico-1', redirect: '/home/servicos' },
      { path: '/redirecionamentoServico-2', redirect: { name: 'leads' } }
    ]
  },
  {
    path: '/login',
    component: LoginView,
  },
  //rota pega tudo
  //{ path: '/:catchAll(.*)*', redirect: '/' } //Vue2 = *
  { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada } //Vue2 = *
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router