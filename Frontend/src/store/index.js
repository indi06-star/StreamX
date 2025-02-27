import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    error: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    LOG_OUT(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  actions: {
    async signUpUser({ commit }, userData) {
      try {
        await axios.post('http://localhost:3000/users', userData);
        commit('SET_USER', userData); // Store user data
      } catch (error) {
        commit('SET_ERROR', 'Signup failed');
        throw error;
      }
    },
  },
  getters: {
    currentUser: (state) => state.user,
    errorMessage: (state) => state.error,
    isAuthenticated: (state) => !!state.user,
  },
});

export default store;
