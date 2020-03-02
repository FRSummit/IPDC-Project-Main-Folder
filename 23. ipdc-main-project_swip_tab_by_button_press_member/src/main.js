import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui';

Vue.config.productionTip = false

Vue.use(VueOnsen);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
