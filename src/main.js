import Vue from 'vue'
import App from './App.vue'
import About from './components/About.vue'
import HelloWorld from './components/HelloWorld.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: new VueRouter({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ],
  })
})
