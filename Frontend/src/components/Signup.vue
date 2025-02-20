<template>
    <div class="auth-form">
      <h2>Sign Up</h2>
      <form @submit.prevent="submitSignUp">
        <input type="text" v-model="fullName" placeholder="Full Name" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="text" v-model="phoneNumber" placeholder="Phone Number" required />
        <input type="password" v-model="password" placeholder="Create Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
      };
    },
    methods: {
      submitSignUp() {
        console.log("Signing up:", this.fullName, this.email, this.phoneNumber);
        this.$emit("close-modal"); // Close modal after sign-up simulation
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
  </style>
  