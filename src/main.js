import Vue from 'vue';
import App from './App.vue';
import panZoom from 'vue-panzoom'

Vue.use(panZoom);
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')
