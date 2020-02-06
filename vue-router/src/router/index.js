import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routes'

// 第三方插件引入后要使用 Vue.use(), 里边调用了 插件的install方法

Vue.use(VueRouter); // install方法中， 注册了两个全局组件 router-link router-view
// 会在每个组件上定义两个属性， $router $route ,可以通过this.$router 和this.$route 获取

export default new VueRouter({
    mode: 'hash',
    routes
})

