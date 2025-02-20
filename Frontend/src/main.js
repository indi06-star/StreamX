import { createApp } from 'vue';
import App from './App.vue';  // The main App component
import router from './router';  // Import the router

// Create the Vue app and use the router
const app = createApp(App);

app.use(router);  // Use the router in the app

app.mount('#app');  // Mount the app to the DOM
