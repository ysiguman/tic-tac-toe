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
    win: {}
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
    },
    isWin(state) {
      return state.status == 'WIN';
    },
    win(state) {
      return state.win;
    }
  },
  mutations: {
     SET_CASE(state, index) {
       Vue.set(state.grid, index, state.players[0]);
     },
     CHANGE_PLAYERS(state) {
        let players = state.players;
        if(state.status == 'PLAY') {
          Vue.set(state, 'players', [players[1], players[0]]);
        }
     },
     WIN(state, winObj) {
      Vue.set(state, 'status', 'WIN');
      Vue.set(state, 'win', winObj);
     },
     RESET(state) {
        Vue.set(state, 'status', 'PLAY');
        Vue.set(state, 'grid', ['', '', '', '', '', '', '', '', '']);
        Vue.set(state, 'players', ['o', 'x']);
        Vue.set(state, 'win', {});
     }
  },
  actions: {
    setCase({ commit, dispatch }, index) {
      commit('SET_CASE', index);
      dispatch('checkGrid');
      commit('CHANGE_PLAYERS');
    },
    checkGrid({ commit, state }) {
      for(let i = 0; i < 9; i += 3) {
        if(state.grid[i] != '' && state.grid[i] === state.grid[i + 1] &&  state.grid[i] === state.grid[i + 2]) {
          commit('WIN', {
            'row' : (i / 3) + 1
          });
        }
      }
      for(let i = 0; i < 3; i++) {
        if(state.grid[i] != '' && state.grid[i] === state.grid[i + 3] &&  state.grid[i] === state.grid[i + 6]) {
          commit('WIN', {
            'column' : i + 1
          });
        }
      }
      if(state.grid[0] != '' && state.grid[0] === state.grid[4] &&  state.grid[0] === state.grid[8]) {
        commit('WIN', {
          'diag' : 'left'
        });
      }
      if(state.grid[2] != '' && state.grid[2] === state.grid[4] &&  state.grid[2] === state.grid[6]) {
        commit('WIN', {
          'diag' : 'right'
        });
      }
    },
    resetGame({ commit }) {
      this.commit('RESET');
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
