import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import store from './store'

Vue.config.productionTip = false
Vue.use(vueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})