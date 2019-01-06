import Vue from 'vue'
import App from './App.vue'
import {createStore} from "./services/store";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store: createStore()
}).$mount('#app');
