import Vue from 'vue'
import App from './App.vue'
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import './main.css'


import AOS from 'aos'
Vue.config.productionTip = false
Vue.component('InfiniteSlideBar', InfiniteSlideBar)

new Vue({
  created(){
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
