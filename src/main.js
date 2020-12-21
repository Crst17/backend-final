import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import moment from 'moment'

const base = axios.create({
  //baseURL: 'https://glacial-everglades-74306.herokuapp.com'
  baseURL: 'http://localhost:3000/'
  //Remote heroku server
  // baseURL: 'https://thawing-mesa-24274.herokuapp.com/'
})

Vue.prototype.$http = base;

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  if (!value) {
    return ''
  }
  moment.locale('es')
  return moment(value).format("DD/MM/YYYY hh:mm a");
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
