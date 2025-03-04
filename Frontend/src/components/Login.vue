<template>
  <div class="auth-form">
    <h2>Login</h2>
    <form @submit.prevent="submitLogin">
      <div>
        <label>
          <span>Email:</span>
          <input type="email" v-model="email" />
        </label>
      </div>
      <br />
      <div>
        <label>
          <span>Password:</span>
          <input type="password" v-model="password" />
        </label>
      </div>
      <br /><br />
      <button type="submit">Login</button>
    </form>

    <!-- Pop-up Modal -->
    <div v-if="showError" class="modal">
      <div class="modal-content">
        <p>{{ errorMessage }}</p>
        <button @click="showError = false">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showError: false,
      errorMessage: "",
    };
  },
  methods: {
    async submitLogin() {
      if (!this.email || !this.password) {
        this.errorMessage = "Email and password are required.";
        this.showError = true;
        return;
      }

      const loginData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("loginUser", loginData);
        this.$router.push("/"); // Redirect after login
      } catch (error) {
        this.errorMessage = "Invalid email or password.";
        this.showError = true;
        console.error("Login error:", error);
      }
    },
  },
};
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
input {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
button {
  padding: 10px;
  background-color: #f39c12;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
}
button:hover {
  background-color: #e67e22;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  min-width: 300px;
}
</style>
