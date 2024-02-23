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
        <div style="height: 5rem;">

        </div>

    </v-card>  



   
</v-col>



<v-col cols="12" md="4">
   
   <v-card height="525" 
   title="News" 
   subtitle="Parkplatz Sperrungen"
   text="dwwddwdddwd"
   
   >
     <div style="height: 5rem;">

     </div>

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
  