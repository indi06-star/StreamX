<template>
    <div class="auth-form">
      <h2>{{ isResetPassword ? 'Reset Password' : 'Login' }}</h2>
      
      <!-- Login Form -->
      <div v-if="!isResetPassword">
        <form @submit.prevent="submitLogin">
          <input type="text" v-model="fullName" placeholder="Full Name" required />
          <input type="password" v-model="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p><span @click="resetPassword">Forgot Password?</span></p>
      </div>
      
      <!-- Reset Password Form -->
      <div v-if="isResetPassword">
        <form @submit.prevent="submitResetPassword">
          <input type="text" v-model="fullName" placeholder="Enter Full Name" required />
          <input type="password" v-model="newPassword" placeholder="Enter New Password" required />
          <button type="submit">Reset Password</button>
        </form>
        <p><span @click="cancelResetPassword">Back to Login</span></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: "",
        password: "",
        newPassword: "",
        isResetPassword: false, // Flag to toggle between login and reset password form
      };
    },
    methods: {
      submitLogin() {
        console.log("Logging in:", this.fullName);
        this.$emit("close-modal"); // Close modal after login simulation
      },
      
      resetPassword() {
        this.isResetPassword = true; // Switch to reset password view
      },
      
      submitResetPassword() {
        console.log("Resetting password for:", this.fullName);
        this.$emit("close-modal"); // Close modal after password reset simulation
      },
      
      cancelResetPassword() {
        this.isResetPassword = false; // Switch back to login view
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
  
  p span {
    color: #f39c12;
    cursor: pointer;
  }
  </style>
  