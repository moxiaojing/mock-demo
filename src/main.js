// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Resource from 'vue-resource'
import data from './urls/mock'

Vue.config.productionTip = false
Vue.use(Resource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data,
  template: '<App/>',
  components: {
    App
  }
})
