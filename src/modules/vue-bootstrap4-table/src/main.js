/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './assets/scss/custom.scss';

window.axios = require('axios');

import Vue from 'vue'
import App from './App'
import AppServer from './AppServer'

import AppRouter from './router_examples/AppRouter'
import ComponentOne from './router_examples/ComponentOne'

require('bootstrap')
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.config.productionTip = false

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueRouter from 'vue-router'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: ComponentOne },
    { path: '/bar', component: Bar }
]
const router = new VueRouter({
routes // short for `routes: routes`
})

Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
      App
  },
  template: '<App/>'
})
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {
//       AppServer
//   },
//   template: '<AppServer/>'
// })

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {
//       AppRouter
//   },
//   router,
//   template: '<AppRouter/>'
// })
