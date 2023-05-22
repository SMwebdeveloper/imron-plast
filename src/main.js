import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel'
import './main.css'

import AOS from 'aos'
Vue.config.productionTip = false
Vue.use(VueCarousel)

new Vue({
  created(){
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
