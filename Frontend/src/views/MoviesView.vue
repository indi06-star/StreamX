<template>
  <div class="Movies">

    <!-- Movie Cards -->
    <div class="movie-cards">
      <router-link
        v-for="movie in movies"
        :key="movie.movie_id"
        :to="{ name: 'movie-details', params: { id: movie.movie_id, trailer_url: movie.trailer_url, description: movie.description, price: movie.price } }"
        class="movie-card"
      >
        <!-- Movie Image -->
        <div class="movie-image-wrapper">
          <div class="overlay">
            <img :src="movie.img_link" alt="Movie Poster" />
          </div>
          <!-- Movie Info on Hover -->
          <div class="movie-info">
            <button class="play-button">▶ Play</button>
            <p class="movie-description">{{ movie.description.slice(0, 50) }}...</p>
          </div>
        </div>

        <!-- Movie Title -->
        <h3 class="movie-title">{{ movie.title }}</h3>
      </router-link>
    </div>
  </div>
</template>




<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getAllMovies");
  },
  computed: {
    ...mapState(["movies"])
  }
};
</script>


<style scoped>
/* Set body background to black */
* {
  background-color: black; /* Applies black background to all elements */
}

/* Container for all movie cards */
.movie-cards {
  display: flex; /* Align movie cards in a row */
  flex-wrap: wrap; /* Allow wrapping to new lines if space runs out */
  justify-content: space-around; /* Space out cards evenly */
  gap: 30px; /* Add spacing between movie cards */
}

/* Individual movie card */
.movie-card {
  width: 250px; /* Set fixed width for consistency */
  text-align: center; /* Center-align text inside the card */
  background-color: #222; /* Dark gray background for the card */
  border-radius: 10px; /* Slightly rounded corners for a modern look */
  color: white; /* White text for better contrast */
  text-decoration: none; /* Remove any default underline from links */
  overflow: hidden; /* Prevents content from overflowing */
  position: relative; /* Enables absolute positioning for inner elements */
  transition: transform 0.2s ease-in-out; /* Smooth zoom effect on hover */
}

/* Scale up the card slightly on hover for effect */
.movie-card:hover {
  transform: scale(1.05); /* Increases the size by 5% */
}

/* Wrapper for movie image */
.movie-image-wrapper {
  position: relative; /* Allows absolute positioning for inner elements */
  width: 100%; /* Ensures it fills the parent container */
  height: 350px; /* Fixed height to maintain uniform size */
  overflow: hidden; /* Prevents images from overflowing */
}

/* Overlay container for darkening the image */
.overlay {
  position: relative; /* Ensures correct stacking inside the movie card */
  width: 100%; /* Matches the width of the parent container */
  height: 100%; /* Matches the height of the parent container */
}

/* Overlay effect to darken the image on hover */
.overlay::before {
  content: ""; /* Creates an empty pseudo-element */
  position: absolute; /* Allows positioning over the image */
  top: 0; /* Aligns to the top of the image */
  left: 0; /* Aligns to the left of the image */
  width: 100%; /* Covers the entire width */
  height: 100%; /* Covers the entire height */
  background-color: rgba(0, 0, 0, 0); /* Starts transparent */
  transition: background-color 0.3s ease-in-out; /* Smooth fade effect */
  display: block; /* Ensures it behaves like a block element */
  z-index: 1; /* Keeps it below the text and buttons */
}

/* Darken the overlay when hovering over the movie card */
.movie-card:hover .overlay::before {
  background-color: rgba(0, 0, 0, 0.6); /* Darkens the image on hover */
}

/* Styling for movie images */
.overlay img {
  width: 100%; /* Ensures the image fills the container */
  height: 100%; /* Ensures consistent sizing */
  object-fit: cover; /* Ensures the image covers the area without stretching */
  transition: transform 0.3s ease; /* Adds smooth zoom effect */
  border-radius: 10px; /* Keeps rounded corners */
  display: block; /* Removes any extra spacing */
}

/* Slight zoom-in effect on image hover */
.movie-card:hover .overlay img {
  transform: scale(1.05); /* Enlarges the image slightly */
}

/* Movie information (play button and title) */
.movie-info {
  position: absolute; /* Positions it relative to the card */
  top: 50%; /* Centers it vertically */
  left: 50%; /* Centers it horizontally */
  transform: translate(-50%, -50%); /* Ensures perfect centering */
  text-align: center; /* Centers the text inside */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out; /* Fades in on hover */
  color: white; /* White text for better contrast */
  width: 100%; /* Ensures it spans the width */
  z-index: 3; /* Keeps it above the overlay */
  background: none; /* Ensures no unwanted background */
}

/* Make movie info visible on hover */
.movie-card:hover .movie-info {
  opacity: 1; /* Fades in the play button and title */
}

/* Play button styling */
.play-button {
  background-color: #ffcc00; /* Bright yellow button for visibility */
  color: black; /* Black text for contrast */
  border: none; /* Removes default border */
  padding: 10px 20px; /* Adds spacing for better touch target */
  font-size: 16px; /* Sets readable font size */
  border-radius: 5px; /* Rounded corners for modern look */
  cursor: pointer; /* Changes cursor to pointer for better UX */
  margin-bottom: 10px; /* Adds spacing below */
}

/* Slightly darken button when hovered */
.play-button:hover {
  background-color: #f1a500; /* Darker shade of yellow */
}

/* Movie title styling */
.movie-title {
  font-size: 18px; /* Makes the title readable */
  color: #ffcc00; /* Matches the button color for consistency */
}

/* --- RESPONSIVE DESIGN --- */

/* Tablets (max-width: 1024px) */
@media (max-width: 1024px) {
  .movie-cards {
    justify-content: center; /* Center align the movies */
    gap: 20px; /* Reduce spacing between cards */
  }

  .movie-card {
    width: 220px; /* Slightly smaller cards */
  }

  .movie-image-wrapper {
    height: 300px; /* Adjusted image height */
  }

  .movie-title {
    font-size: 16px; /* Reduce title font size */
  }

  .play-button {
    font-size: 14px; /* Reduce button size */
    padding: 8px 16px;
  }
}

/* Mobile devices (max-width: 768px) */
@media (max-width: 768px) {
  .movie-cards {
    flex-direction: column; /* Stack movie cards */
    align-items: center; /* Center align cards */
    gap: 15px; /* Reduce spacing */
  }

  .movie-card {
    width: 90%; /* Make cards full width */
    max-width: 300px; /* Limit max width */
  }

  .movie-image-wrapper {
    height: 250px; /* Reduce image height */
  }

  .movie-title {
    font-size: 14px; /* Smaller title */
  }

  .play-button {
    font-size: 12px; /* Adjust button size */
    padding: 6px 12px;
  }
}
</style>




