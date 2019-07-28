import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    status: 'PLAY',
    players: ['o', 'x'],
    grid: ['', '', '', '', '', '', '', '', ''],
  },
  getters: {
    status(state) {
      return state.status;
    },
    players(state) {
      return state.players;
    },
    grid(state) {
      return state.grid;
    }
  },
  mutations: {
     SET_CASE(state, index) {
       Vue.set(state.grid, index, state.players[0]);
     },
    CHANGE_PLAYERS(state) {
       let players = state.players;
       Vue.set(state, 'players', [players[1], players[0]]);
    }
  },
  actions: {
    setCase({ commit }, index) {
      commit('SET_CASE', index);
      commit('CHANGE_PLAYERS');
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
