<template>
   
   <v-row class="ma-2" style="height: 3rem;">
    <v-col cols="3">
      <v-text-field
      label="Suche:"
      color="primary"
      variant="outlined"
        density="compact"
        v-model="search"
      ></v-text-field>
    </v-col>


    <v-col cols="3">
      <v-autocomplete
      variant="outlined"
        density="compact"
        :items="class"
        item-title="Klassenname"
        item-value="KlasseID"
        v-model="selectClass"
      
      ></v-autocomplete>
    </v-col>


   </v-row>


   
   <v-row class="ma-2">
    <v-col cols="12">
      <v-card>
      <v-data-table-virtual
        fixed-header
   class="fontstyle"
    :headers="headers"
    :items="schueler"
    height="550"
    item-value="name"
    :search="search"
  ></v-data-table-virtual>

</v-card>
    </v-col>
   </v-row>
  </template>
  
  <script lang='ts'>
  import store from '@/store'
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
  
  export default defineComponent({
    name: 'schuelertabelle-component',
  

    data () {
      return {
        search : "",
        selectClass : "",
        headers: [
          { title: 'Vorname', align: 'start', key: 'Vorname' },
          { title: 'Nachname', align: 'end', key: 'Nachname' },
          { title: 'Strasse', align: 'end', key: 'Strasse' },
          { title: 'PLZ', align: 'end', key: 'PLZ' },
          { title: 'Klasse', align: 'end', key: 'Klassenname' },
          { title: 'Lehrer', align: 'end', key: 'Lehrer' },
         
        ],
        
       
      }
    },

    computed: {
      ...mapState(["schueler", "class"])
    },



     async mounted() {
      await store.dispatch('getSchuelerklasse'); 
      await store.dispatch('getKlassen');
    },




    watch: {
      selectClass() {
        console.log(this.selectClass);
        
        store.dispatch('selectClass', this.selectClass);
      }


    }



  })
  </script>
  