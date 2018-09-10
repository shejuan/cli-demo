// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/app.scss';
import meta from 'vue-meta';
// import api from 'api/http'
// import * as api from './api'
// import api from '@/api/index'
// Vue.use(api)
// api(Vue)
// Vue.prototype.$api = api
// console.log(api, '----')
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(meta, {
  keyName: 'metaInfo'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
});
