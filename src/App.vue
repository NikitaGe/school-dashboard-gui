<template>
  <v-app>
    
    <v-layout>
      
    <v-app-bar title="TGBBZ-1" color="primary">

    
      <!--v-btn >Widgets</v-btn-->

      <v-menu >
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
        >
         Widgets
        </v-btn>
      </template>

      <v-list style="width: 50rem;">
        <v-list-item v-for="item in widgets" :key="item.widgetid"><v-checkbox-btn>{{ item.widget }}</v-checkbox-btn></v-list-item>


      </v-list>
    </v-menu>





      
    </v-app-bar>

   

    <v-navigation-drawer rail expand-on-hover>
      <v-list>
        <v-list-item title="Dashboard" to="/dashboard" prepend-icon="mdi-view-dashboard"></v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Klassenverwaltung" to="/class" prepend-icon="mdi-account-group"></v-list-item>
        <v-divider></v-divider>

      </v-list>

      
    </v-navigation-drawer>

    <v-main>
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
      rail : true,

      widgets: [
        {
          widgetid: 1,
          widget:"Klassenverwaltung"
        },
        {
          widgetid: 2,
          widget:"Kalendar"
        },



      ]



    }
  },
  methods: {
 



  },

  computed: {
   


  }


})
</script>
