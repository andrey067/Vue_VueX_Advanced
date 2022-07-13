import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SiteView from '../views/SiteView.vue';
import VendasComponent from '../components/vendas/VendasComponent.vue';
import ServicosComponent from '../components/servicos/ServicoComponent.vue';
import LeadsComponent from '../components/vendas/LeadsComponent.vue'
import ConstratosComponent from '../components/vendas/ContratosComponent.vue'

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
            component: LeadsComponent
          },
          {
            path: 'contratos',
            component: ConstratosComponent
          }
        ]
      },
      {
        path: 'servicos',
        component: ServicosComponent
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