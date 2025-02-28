import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    movies: [], // Store all movies
    movie: null // Store single movie
  },
  getters: {
    getMovies: (state) => state.movies, // Getter for all movies
    getSingleMovie: (state) => state.movie // Getter for single movie
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies; // Store all movies
    },
    setSingleMovie(state, movie) {
      state.movie = movie; // Store single movie
    }
  },
  actions: {
    async getAllMovies({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/movies'); // Ensure correct API route
        commit('setMovies', response.data); // Store movies in state
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    async getSingleMovie({ commit }, movie_id) {
      try {
        const response = await axios.get(`http://localhost:3000/movies/:movie_id`); // Correct endpoint
        commit('setSingleMovie', response.data); // Store single movie
      } catch (error) {
        console.error('Error fetching single movie:', error);
      }
    }
  },
  modules: {}
});
