import Vue from 'vue'
import App from './App.vue'
import router from './router'
import materialize from "./plugins/materialize"


Vue.config.productionTip = false

new Vue({
  materialize,
  router,
  render: h => h(App)
}).$mount('#app')
