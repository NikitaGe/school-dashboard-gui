<template>
    <v-row justify="center">
     <v-col xs="12" sm="6" lg="4">
     <div style="margin-top: 15rem">
       <h2 class="ma-3">TGBBZ-1 Register</h2>
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
       @click="register()"
     >
       Register
     </v-btn>
     <v-btn >
       clear
     </v-btn>
       </form>
     </div>
     </v-col>
    </v-row>
 
 
   </template>
   
   <script lang='ts'>
   import store from '@/store';
 import { defineComponent } from 'vue'
   
   
   export default defineComponent({
     name: 'register-views',
   
     data () {
       return { 
         username : "",
         password : "",
 
       }
     },
 
     methods: {
        register() {
         store.dispatch("register", {username : this.username, password : this.password})
       }
     }
 
 
   })
   </script>
   