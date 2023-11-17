import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
  
}).$mount('#app')
