import Vue from 'vue'
import App from './App.vue'
import {createStore} from "./services/store";
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false;

Vue.use(ToggleButton);

new Vue({
    render: h => h(App),
    store: createStore()
}).$mount('#app');
