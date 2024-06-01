<template>
    <v-row class="ma-2">


      <v-col cols="12" sm="6" md="6" lg="4">
          <v-card class="elevation-5">
            <kalendar></kalendar>
          </v-card>
      </v-col>

<v-col cols="12" sm="6" md="6" lg="4">
   
      <v-card height="525" 
      class="elevation-5"
      title="Aktuelles" 
      :subtitle="news.ueberschrift"
      :text="news.newstext"
      >
      <v-divider></v-divider>
        <div style="height: 5rem;" class="ma-5">
            <img src="https://tgbbz1.de/images/bilder/schule/turm.png" height="230" width="100%">
        </div>

    </v-card>  
</v-col>

<v-col cols="12" md="6" lg="4">
   <v-card height="525" class="elevation-5">
    <h3 class="ma-3">Lehrer-Übersicht</h3>
    <v-divider></v-divider>
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
import { mapState } from 'vuex';

  export default defineComponent({
    name: 'dashboard-view',
    components: { Kalendar, SchuelerTabelle, LehrerTabelle },
    data () {
      return {
   
       
       
      }
    },


    async mounted() {
      await store.dispatch("getNews");
      await store.dispatch("getWetter")
     
    },


    computed: {
      ...mapState(["news"])

    }




  })
  </script>
  