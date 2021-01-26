import Vue from 'vue';
import Vuex from 'vuex';

import Todos from './todos';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todos: Todos,
  },
});

Vue.$store = store;
export default store;
