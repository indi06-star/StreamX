<template>
  <section class="movies-section">
    <h2 class="section-title">Trending Now</h2>
    <div class="movies-row">
      <div
        class="movie-card"
        v-for="(movie, index) in trendingMovies"
        :key="index"
      >
        <!-- Use require to load images dynamically -->
        <img :src="require(`@/assets/${movie.image}`)" :alt="movie.title" />
        <p class="movie-title">{{ movie.title }}</p>
      </div>
    </div>

    <h2 class="section-title">Recommended for You</h2>
    <div class="movies-row">
      <div
        class="movie-card"
        v-for="(movie, index) in recommendedMovies"
        :key="index"
      >
        <!-- Use require to load images dynamically -->
        <img :src="require(`@/assets/${movie.image}`)" :alt="movie.title" />
        <p class="movie-title">{{ movie.title }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      trendingMovies: [
        { title: "Journey 2", image: "trending.jpeg" },
        { title: "Babes", image: "trending2.jpg" },
        { title: "Freedom Har", image: "trending3.webp" },
        { title: "Unstopable", image: "trending4.jpg" },
      ],
      recommendedMovies: [
        { title: "Anathi", image: "recommeded.jpg" },
        { title: "Indiphile", image: "recommended2.jpg" },
        { title: "Wade", image: "recommeded3.jpeg" },
        { title: "Unstopple", image: "recommended4.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.movies-section {
  padding: 40px;
  background-color: #111;
  color: white;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.movies-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.movie-card {
  width: 23%;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.movie-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.movie-card:hover {
  transform: scale(1.1);
}

.movie-title {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
}
</style>
