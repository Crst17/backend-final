import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "landing" */ '../views/Landing.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    }, {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ( /* webpackChunkName: "admin" */ '../views/Admin.vue')
    }, {
        path: '/services/service1',
        name: 'Service1',
        component: () =>
            import ( /* webpackChunkName: "service1" */ '../views/services/Service1.vue')
    }, {
        path: '/services/service2',
        name: 'Service2',
        component: () =>
            import ( /* webpackChunkName: "service2" */ '../views/services/Service2.vue')
    }, {
        path: '/services/service3',
        name: 'Service3',
        component: () =>
            import ( /* webpackChunkName: "service1" */ '../views/services/Service3.vue')
    }

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router