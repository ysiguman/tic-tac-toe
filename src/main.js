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
       let grid = state.grid;
       grid[index] = state.players[0];
       state.grid = grid;
     },
    CHANGE_PLAYERS(state) {
       let players = state.players;
       state.players = [players[1], players[0]];
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
