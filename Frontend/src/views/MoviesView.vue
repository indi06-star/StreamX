<template>
    <section class="movie-details">
      <div class="movie-info">
        <h1 class="movie-title">{{ movie.title }}</h1>
        <img :src="require(`@/assets/${movie.image}`)" class="movie-img" :alt="movie.title" />
        <p class="movie-description">{{ movie.description }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        movieDetails: [
          { 
            title: "Journey 2", 
            image: "trending.jpeg", 
            description: "A young adventurer teams up with a seasoned explorer on a thrilling expedition to the mysterious island of Atlantis."
          },
          { 
            title: "The Joker", 
            image: "trending3.webp", 
            description: "A troubled comedian's descent into madness leads him to becoming the infamous villain, the Joker."
          },
          { 
            title: "Freedom Hair", 
            image: "trending03w.webp", 
            description: "A heartwarming story about a young woman’s journey to embrace her natural beauty and identity."
          },
          { 
            title: "Mufasa", 
            image: "trending4.jpg", 
            description: "A prequel to The Lion King, this film tells the backstory of Mufasa’s rise to greatness."
          }
        ]
      };
    },
    computed: {
      // Get the title from the route params and find the corresponding movie
      movie() {
        const movieTitle = this.$route.params.title; // Get the title from the URL
        return this.movieDetails.find(m => m.title.toLowerCase() === movieTitle.toLowerCase()) || {};
      }
    }
  };
  </script>
  
  <style scoped>
  .movie-details {
    padding: 40px;
    background-color: black;
    color: white;
    text-align: center;
  }
  
  .movie-info {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .movie-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .movie-img {
    width: 250px;
    height: auto;
    border-radius: 10px;
  }
  
  .movie-description {
    font-size: 1.2rem;
    margin-top: 20px;
    color: #bbb;
  }
  </style>
  