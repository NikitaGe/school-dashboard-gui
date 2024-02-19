<template>
  <v-app>
    
    <v-layout class="rounded rounded-md">
      
    <v-app-bar title="TGBBZ-1" color="primary">

    
      <!--v-btn >Widgets</v-btn-->

      <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
        >
         Widgets
        </v-btn>
      </template>

      <v-list>
        
       






        


      </v-list>
    </v-menu>





      
    </v-app-bar>

   

    <v-navigation-drawer rail="false">
      <v-list>
        <v-list-item title="Dashboard" to="/dashboard" prepend-icon="mdi-view-dashboard"></v-list-item>
        <v-list-item title="Klassenverwaltung" to="/class" prepend-icon="mdi-account-group"></v-list-item>


      </v-list>

      
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view/>
    </v-main>
  </v-layout>




  </v-app>


  










</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      rail : false,
    }
  },


  computed: {
   


  }


})
</script>
