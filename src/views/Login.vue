<template>
   <v-row justify="center">
    <v-col cols="4">

      <form class="ma-3">
    <v-text-field
      label="Name"
      required
      variant="outlined"
      v-model="username"
    ></v-text-field>

    <v-text-field
    type="password"
      label="Password"
      required
      variant="outlined"
      v-model="password"
    ></v-text-field>

    <v-btn
      class="me-4"
      @click="login()"
    >
      login
    </v-btn>
    <v-btn >
      clear
    </v-btn>
  </form>



    </v-col>
   </v-row>


  </template>
  
  <script lang='ts'>
  import store from '@/store';
import { defineComponent } from 'vue'
  
  
  export default defineComponent({
    name: 'login-views',
  
    data () {
      return { 
        username : "",
        password : "",

      }
    },

    methods: {
      login() {
        store.dispatch("login", {username : this.username, password : this.password})
      }
    }


  })
  </script>
  