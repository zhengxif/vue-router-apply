import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
router.beforeEach((ro, from, next) => {
  console.log('beforeEach');
  next();
})
router.beforeResolve((ro, from, next) => {
  console.log('beforeResolve');
  next();
})
router.afterEach(() => {
  console.log('afterEach');
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
