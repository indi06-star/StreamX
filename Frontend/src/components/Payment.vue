<template>
    <div class="payment-container">
      <h2>Complete Payment</h2>
      <form @submit.prevent="submitPayment">
        <div class="form-group">
          <label for="rentalId">Rental ID:</label>
          <input type="number" id="rentalId" v-model="rental_id" required />
        </div>
  
        <div class="form-group">
          <label for="userId">User ID:</label>
          <input type="number" id="userId" v-model="user_id" required />
        </div>
  
        <div class="form-group">
          <label for="amount">Amount:</label>
          <input type="number" step="0.01" id="amount" v-model="amount" required />
        </div>
  
        <button type="submit">Pay Now</button>
        <p v-if="message">{{ message }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        rental_id: '',
        user_id: '',
        amount: '',
        message: ''
      };
    },
    methods: {
      async submitPayment() {
        try {
          const response = await axios.post('http://localhost:3000/payments/pay', {
            rental_id: this.rental_id,
            user_id: this.user_id,
            amount: this.amount
          });
  
          this.message = response.data.message;
        } catch (error) {
          this.message = error.response?.data?.error || 'Payment failed';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .payment-container {
    width: 300px;
    margin: auto;
    text-align: center;
  }
  .form-group {
    margin-bottom: 10px;
  }
  button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  