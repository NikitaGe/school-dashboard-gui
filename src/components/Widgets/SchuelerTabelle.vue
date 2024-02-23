<template>
   

   <v-data-table-virtual
   class="fontstyle"
    :headers="headers"
    
    height="500"
    item-value="name"
  ></v-data-table-virtual>
      
  </template>
  
  <script lang='ts'>
  import store from '@/store'
import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'schuelertabelle-component',
  

    data () {
      return {
        headers: [
          { title: 'Boat Type', align: 'start', key: 'name' },
          { title: 'Speed (knots)', align: 'end', key: 'speed' },
          { title: 'Length (m)', align: 'end', key: 'length' },
          { title: 'Price ($)', align: 'end', key: 'price' },
          { title: 'Year', align: 'end', key: 'year' },
        ],
        
       
      }
    },

    mounted() {
      store.dispatch('getSchuelerklasse')


    }



  })
  </script>
  