<template>
    <v-date-picker
    color="primary"
    width="100%"
    height="525"
    v-model="selectedDate"
    >
 
    </v-date-picker>
       
   </template>
   
   <script lang='ts'>
   import { defineComponent } from 'vue'
   
   
   export default defineComponent({
     name: 'kalendar-component',
   
     data () {
       return {
        selectedDate : new Date(),
         
        
       }
     },
   })
   </script>
   