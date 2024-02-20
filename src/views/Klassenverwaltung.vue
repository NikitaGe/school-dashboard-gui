<template>
    <v-row class="ma-2">
        <v-col cols="3">
          <v-autocomplete label="Klasse: "
          variant="outlined"
            density="compact"
            color="primary"
          ></v-autocomplete>

        </v-col>
    </v-row>

    <v-row class="ma-2">
      <v-col cols="12">
        <v-card>
        <schueler-tabelle></schueler-tabelle>
      </v-card>
      </v-col>

    </v-row>


</template>
  
  <script lang='ts'>
  import { defineComponent } from 'vue'
  import SchuelerTabelle from '@/components/Widgets/SchuelerTabelle.vue';
  
  export default defineComponent({
    name: 'klassenverwaltung-views',
    components: { SchuelerTabelle },
    data () {
      return {
       
      
      }
    },
  })
  </script>
  