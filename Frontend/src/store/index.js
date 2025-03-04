import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    error: null,
    movies: [],
    movie: null,
  },
  getters: {
    getMovies: (state) => state.movies,
    getSingleMovie: (state) => state.movie,
    currentUser: (state) => state.user,
    errorMessage: (state) => state.error,
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setSingleMovie(state, movie) {
      state.movie = movie;
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    REMOVE_MOVIE(state, movie_id) {
      state.movies = state.movies.filter(movie => movie.id !== movie_id);
    }
  },
  actions: {
    async getAllMovies({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/movies', { timeout: 5000 });
        commit('setMovies', response.data);
      } catch (error) {
        console.error('Error fetching movies:', error.message);
      }
    },

    async getSingleMovie({ commit }, movie_id) {
      try {
        const response = await axios.get(`http://localhost:3000/movies/${movie_id}`);
        commit('setSingleMovie', response.data);
      } catch (error) {
        console.error('Error fetching single movie:', error);
      }
    },

    async signUpUser({ commit }, userData) {
      try {
        const response = await axios.post('http://localhost:3000/users/signup', userData);

        if (response.status !== 200) {
          throw new Error('Signup failed');
        }

        commit('SET_USER', response.data.user);
      } catch (error) {
        commit('SET_ERROR', 'Signup failed');
        console.error('Signup error:', error);
        throw error;
      }
    },

    // New action for logging in the user
    async loginUser({ commit }, loginData) {
    try {
      const response = await axios.post('http://localhost:3000/users/login', loginData);

      if (response.status !== 200) {
        throw new Error('Login failed');
      }

      // Store user info in Vuex state and/or localStorage
      commit('SET_USER', response.data.user);
      
    } catch (error) {
      // Commit error state to Vuex
      commit('SET_ERROR', 'Invalid email or password');
      console.error('Login error:', error);
      throw error;
    }
  },
    
    async deleteMovie({ commit }, movie_id) {
      try {
        await axios.delete(`http://localhost:3000/movies/${movie_id}`);
        commit('REMOVE_MOVIE', movie_id);
      } catch (error) {
        console.error('Error deleting movie:', error);
      }
    }
  },
  modules: {}
});

export default store;
