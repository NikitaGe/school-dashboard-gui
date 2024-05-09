<template>
   
    <!--v-row class="ma-2" style="height: 3rem;">
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
 
 
    </v-row-->
 
 
    
    <v-row class="ma-2">
     <v-col cols="12">
       <v-card>
       <v-data-table-virtual
         fixed-header
    class="fontstyle"
     :headers="headers"
     :items="lehrer"
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
           { title: 'Fach', align: 'end', key: 'Fachname' },  
         ],
         
        
       }
     },
 
     computed: {
       ...mapState(["schueler", "class", "lehrer"])
     },
 
 
 
      async mounted() {
       await store.dispatch('getLehrer'); 
     },
 
 
 
 
     watch: {
       
 
 
     }
 
 
 
   })
   </script>
   