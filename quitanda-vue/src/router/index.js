import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/Contato.vue'),
    },
    {
      path: '/cadastrar-senha',
      name: 'cadastrar',
      component: () => import('../views/Cadastrar_Senha.vue'),
    },
    {
      path: '/recuperar-senha',
      name: 'recuperar_senha',
      component: () => import('../views/Recuperar_Senha.vue'),
    },
    {
      path: '/tela-cadastro',
      name: 'tela-cadastro',
      component: () => import('../views/Tela_Cadastro.vue')
    },
    {
      path: '/politica-privacidade',
      name: 'politica-privacidade',
      component: () => import ('../views/Politica_Privacidade.vue') 
    },
    {
      path: '/termos-de-uso',
      name: 'termos-de-uso',
      component: () => import ('../views/Termos_De_Uso.vue')
    },
    {
      path: '/trocas-devolucoes',
      name: 'trocas-devolucoes',
      component: () => import ('../views/Trocas_Devolucoes.vue')
    },
    {
      path: '/quem-somos',
      name: 'quem-somos',
      component: () => import ('../views/Quem_Somos.vue')
    }
  ],
})

export default router
