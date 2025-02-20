import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '../views/MoviesView.vue'
import ComingSoonView from '../views/ComingSoonView.vue'
import MyListView from '../views/MyListView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/movies/:title',  // Add this route for movie details
    name: 'movieDetail',
    component: MoviesView, // Use the same MoviesView component for the details page
    props: true // Allow the movie title to be passed as a prop
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: ComingSoonView
  },
  {
    path: '/my-list',
    name: 'my-list',
    component: MyListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
