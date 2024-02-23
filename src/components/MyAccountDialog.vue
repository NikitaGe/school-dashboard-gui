<template>
    <v-dialog>
        <v-card class="mr-auto ml-auto" width="40rem">
          <v-row class="ma-2">
            <v-col>
              <v-text-field label="Name: " variant="outlined" density="compact" ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field label="Nachname: " variant="outlined" density="compact"  ></v-text-field>
            </v-col>

          </v-row> 

        </v-card>
    </v-dialog>
  </template>
  
  <script lang='ts'>
  import { defineComponent } from 'vue'
  
  
  export default defineComponent({
    name: 'myaccount-component',
  
    data () {
      return {
        
        
       
      }
    },
  })
  </script>
  