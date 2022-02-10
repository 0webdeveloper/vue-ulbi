import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vintersection from '@/Directives/Vintersection'
import Directives from '@/Directives/'

Vue.config.productionTip = false;

Directives.forEach(element => {
    Vue.directive(element.name, element);
});

// Vue.directive('intersection', Vintersection);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')