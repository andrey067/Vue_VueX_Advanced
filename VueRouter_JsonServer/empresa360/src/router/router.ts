import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SiteView from '../views/SiteView.vue';
import VendasComponent from '../components/vendas/VendasComponent.vue';
import ServicosComponent from '../components/servicos/ServicosComponent.vue';
import LeadsComponent from '../components/vendas/LeadsComponent.vue'
import LeadComponent from '../components/vendas/LeadComponent.vue'
import ConstratosComponent from '../components/vendas/ContratosComponent.vue'
import DashboardComponent from '../components/dashboard/DashboardComponent.vue';
import VendasPadrao from '../components/vendas/VendasPadrao.vue';
import ServicoComponent from '../components/servicos/ServicoComponent.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: SiteView,
  },
  {
    path: '/home',
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
            component: ConstratosComponent,
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
              component: ServicoComponent,
              name: 'servico'
            }
          ]
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '/login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router