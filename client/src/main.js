import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import TrendChart from "vue-trend-chart";
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueApexCharts from 'vue-apexcharts'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(Vuelidate);
Vue.component('apexchart', VueApexCharts)
Vue.use(VueApexCharts)
Vue.use(Chartkick.use(Chart))
Vue.use(TrendChart);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
