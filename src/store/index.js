import Vue from 'vue';
import Vuex from 'vuex';

//* Modules
import cart from './modules/cart.module';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { cart },
});
