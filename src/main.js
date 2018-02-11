import Vue from 'vue'
import App from './App'
import router from './router'

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
