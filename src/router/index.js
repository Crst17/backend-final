import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminCategoriaList from '@/views/admin/categoria/AdminCategoriaList'
import AdminArticuloList from '@/views/admin/articulo/AdminArticuloList'
import AdminUsuarioList from '@/views/admin/usuario/AdminUsuarioList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },

  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'admin',
        component: () => import(/* webpackChunkName: "adminHome" */ '../views/admin/AdminHome.vue'),
      },
      {
        path: 'categoria',
        name: 'adminCategoriaList',
        component: AdminCategoriaList, // Se supone que solo lo carga una vez y lo guarda en ram
      },
      {
        path: 'categoria/add',
        name: 'adminCategoriaAdd',
        component: () => import(/* webpackChunkName: "adminCategoriaAdd" */ '../views/admin/categoria/AdminCategoriaAdd.vue'),
      },
      {
        path: 'categoria/:id',
        name: 'adminCategoriaDetails',
        component: () => import(/* webpackChunkName: "adminCategoriaDetails" */ '../views/admin/categoria/AdminCategoriaDetails.vue'),
      },
      {
        path: 'articulo',
        name: 'adminArticuloList',
        component: AdminArticuloList
      },
      {
        path: 'articulo/add',
        name: 'adminArticuloAdd',
        component: () => import(/* webpackChunkName: "adminCategoriaAdd" */ '../views/admin/articulo/AdminArticuloAdd.vue'),
      },
      {
        path: 'articulo/:id',
        name: 'adminArticuloDetails',
        component: () => import(/* webpackChunkName: "adminCategoriaDetails" */ '../views/admin/articulo/AdminArticuloDetails.vue'),
      },
      {
        path: 'usuario',
        name: 'adminUsuarioList',
        component: AdminUsuarioList
      },
      {
        path: 'usuario/add',
        name: 'adminUsuarioAdd',
        component: () => import(/* webpackChunkName: "adminCategoriaAdd" */ '../views/admin/usuario/AdminUsuarioAdd.vue'),
      },
      {
        path: 'usuario/:id',
        name: 'adminUsuarioDetails',
        component: () => import(/* webpackChunkName: "adminCategoriaDetails" */ '../views/admin/usuario/AdminUsuarioDetails.vue'),
      },
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
