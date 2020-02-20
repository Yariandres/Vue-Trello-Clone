import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin } from './utils'

Vue.use(Vuex)

// stored in the browser & retriving from local storage
const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  // register the plugin
  plugins: [saveStatePlugin],
  state: {
    board
  },
  mutations: {}
})