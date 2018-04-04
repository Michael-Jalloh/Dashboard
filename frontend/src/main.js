import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLocalStorage from 'vue-localstorage'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Auth from './packages/auth/Auth.js'
import Vuex from 'vuex'
import VueMqtt from 'vue-mqtt'


Vue.config.productionTip = false
Vue.use(VueAxios, axios);
axios.defaults.baseURL = "http://localhost:5000/api/v1";
Vue.use(VueMqtt, 'ws://localhost:1883/ws')
Vue.use(ElementUI)
Vue.use(VueLocalStorage,{
  name:'ls'
})
Vue.use(Auth)
Vue.auth.setBaseUrl("http://localhost:5000/api/v1");
Vue.auth.setStorage(Vue.ls);

Vue.use(Vuex)

Vue.component('icon',Icon)



router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/main'
        })
      } else {
        next()

      }
    } else if(to.matched.some(record => record.meta.forAuth)){
      if ( ! Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      } else {
        next()

      }
    } else {next()}
  }
)

const store = new Vuex.Store({
  state: {
    location: {},
    locations: [],
    counter: 2
  },

  getters: {
    counter: state => state.counter * 2,
    location: state => state.location,
    locations: state => state.locations
  },

  mutations:{
    setLocation: (state, payload) => {
      state.location = payload;
    },
    setLocations: (state, payload) => {
      state.locations = payload;
    }
  }
})


/*
 * this.$ls.set('number',123)
 * this.$ls.get('number')
 * this.$ls.remove('number')
 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App)
})
