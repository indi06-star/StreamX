<template>
  <div class="auth-form">
  <h2>Sign Up</h2>
  <div>
  <label>
  <span>Username:</span><input type="text" v-model="username" />
  </label>
  <br />
  <label>
  <span>Email:</span><input type="text" v-model="email" />
  </label>
  <br />
  <label>
  <span>Phone number:</span><input type="text" v-model="phone_number" />
  </label>
  <br />
  <label>
  <span>Password:</span><input type="password" v-model="password" />
  </label>
  <br /><br />
  <button @click="submitSignUp">Signup</button>
  </div>
  
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
  username: "",
  email: "",
  phone_number: "",
  password: "",
  showError: false,
  errorMessage: "",
  };
  },
  methods: {
  async submitSignUp() {
  if (!this.username || !this.email || !this.phone_number || !this.password) {
  this.errorMessage = "All fields are required.";
  this.showError = true;
  return;
  }
  
  const userData = {
  username: this.username,
  email: this.email,
  phone_number: this.phone_number,
  password: this.password,
  };
  
  try {
  await this.$store.dispatch("signUpUser", userData);
  this.$emit("close-modal");
  } catch (error) {
  this.errorMessage = "Signup failed. Please try again.";
  this.showError = true;
  console.error("Signup error:", error);
  }
  },
  },
  };
  </script>
  
  <style scoped>
  .auth-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  }
  input {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  }
  button {
  padding: 10px;
  background-color: #f39c12;
  color: white;
  border: none;
  cursor: pointer;
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
  border-radius: 10px;
  text-align: center;
  }
  .modal-content p {
  margin-bottom: 10px;
  }
  .modal-content button {
  padding: 8px 15px;
  background-color: #ffcc00;
  color: white;
  border: none;
  cursor: pointer;
  }
  .modal-content button:hover {
  background-color: #ffbb33;
  }
  </style>