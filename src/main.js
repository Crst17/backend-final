import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import swal from 'sweetalert';

const base = axios.create({
    //baseURL: 'https://glacial-everglades-74306.herokuapp.com'
    baseURL: 'http://localhost:3000/'
        //Remote heroku server
        //baseURL: 'https://thawing-mesa-24274.herokuapp.com/'
})
Vue.prototype.$http = base;

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')