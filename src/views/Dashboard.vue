<template>
    <v-row class="ma-2">


      <v-col cols="12" md="4">
          <v-card>
            <kalendar></kalendar>
          </v-card>
      </v-col>

<v-col cols="12" md="8">
    <v-card>
        <schueler-tabelle></schueler-tabelle>
    </v-card>
</v-col>







    </v-row>
  </template>
  
  <script lang='ts'>
  import { defineComponent } from 'vue'
  import Kalendar from '@/components/Widgets/Kalendar.vue';
  import SchuelerTabelle from '@/components/Widgets/SchuelerTabelle.vue';

  export default defineComponent({
    name: 'dashboard-view',
    components: { Kalendar, SchuelerTabelle },
    data () {
      return {
   
       
       
      }
    },
  })
  </script>
  