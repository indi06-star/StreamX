<template>
  <section class="movies-view">
    <h1>All Movies</h1>

    <div class="movie-cards">
      <div 
        class="movie-card"
        v-for="(movie, index) in allMovies"
        :key="index"
      >
        <router-link :to="'/movies/' + movie.title" class="movie-card-link">
          <img :src="require(`@/assets/${movie.image}`)" class="movie-img" :alt="movie.title" />
          <p class="movie-title">{{ movie.title }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      allMovies: [
        { title: "Journey 2", image: "trending.jpeg" },
        { title: "The Joker", image: "trending3.webp" },
        { title: "Diary of a mad black women", image: "trends.jpeg" },
        { title: "Mufasa", image: "trending4.jpg" },
        { title: "Me Before You", image: "recommeded.jpg" },
        { title: "Smile", image: "recommended2.jpg" },
        { title: "Moana 2", image: "recommeded3.jpeg" },
        { title: "The Marvels", image: "recommended4.jpg" },
      ]
    };
  },
};
</script>

<style scoped>
.movies-view {
  padding: 40px;
  background-color: black;
  color: white;
  text-align: center;
}

.movie-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
}

.movie-card {
  width: 250px;
  text-align: center;
  background-color: #222;
  border-radius: 10px;
  padding: 10px;
}

.movie-card img {
  width: 100%;
  border-radius: 10px;
}

.movie-title {
  color: white;
  margin-top: 10px;
  font-size: 16px;
}
</style>
