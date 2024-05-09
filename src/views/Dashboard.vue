<template>
    <v-row class="ma-2">


      <v-col cols="12" sm="6" md="4">
          <v-card>
            <kalendar></kalendar>
          </v-card>
      </v-col>

<v-col cols="12" sm="6" md="4">
   
      <v-card height="525" 
      title="News" 
      subtitle="Parkplatz Sperrungen"
      text="dwwddwdddwd"
      >
        <div style="height: 5rem;" class="ma-5">
            <img src="https://tgbbz1.de/images/bilder/schule/turm.png" height="300" width="100%">
        </div>

    </v-card>  



   
</v-col>

<v-col cols="12" md="4">
   <v-card height="525" >
    <h3 class="ma-3">Lehrer-Übersicht</h3>
     <lehrer-tabelle></lehrer-tabelle>
 </v-card>  
</v-col>







    </v-row>
  </template>
  
  <script lang='ts'>
  import { defineComponent } from 'vue'
  import Kalendar from '@/components/Widgets/Kalendar.vue';
  import SchuelerTabelle from '@/components/Widgets/SchuelerTabelle.vue';
  import LehrerTabelle from '@/components/Widgets/LehrerTabelle.vue';
import store from '@/store';

  export default defineComponent({
    name: 'dashboard-view',
    components: { Kalendar, SchuelerTabelle, LehrerTabelle },
    data () {
      return {
   
       
       
      }
    },


    async mounted() {
      await store.dispatch("getNews");
     
    }



  })
  </script>
  