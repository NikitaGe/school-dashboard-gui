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

    <!--v-row class="ma-2">
      <v-col>

        <v-row class="ma-2">
            <v-col>
                <div class="elevation-5">
                {{ wetter.minTemperatur[0] }}
                <br>
                {{ wetter.maxTemperatur[0] }}
                <br>
                {{ dateFormat(wetter.date[0]) }}
            </div>
            </v-col>

            

            <v-col>
                <div class="elevation-5">
                {{ wetter.minTemperatur[1] }}
                <br>
                {{ wetter.maxTemperatur[1] }}
                <br>
                {{ dateFormat(wetter.date[1]) }}
            </div>
            </v-col>

           

            <v-col>
                <div class="elevation-5">
                {{ wetter.minTemperatur[2] }}
                <br>
                {{ wetter.maxTemperatur[2] }}
                <br>
                {{ dateFormat(wetter.date[2]) }}
            </div>
            </v-col>

           

            <v-col>
                {{ wetter.minTemperatur[3] }}
                <br>
                {{ wetter.maxTemperatur[3] }}
                <br>
                {{ dateFormat(wetter.date[3]) }}
            </v-col>

            

            <v-col>
                {{ wetter.minTemperatur[4] }}
                <br>
                {{ wetter.maxTemperatur[4] }}
                <br>
                {{ dateFormat(wetter.date[4]) }}
            </v-col>

          

            <v-col>
                {{ wetter.minTemperatur[5] }}
                <br>
                {{ wetter.maxTemperatur[5] }}
                <br>
                {{ dateFormat(wetter.date[5]) }}
            </v-col>

          

            <v-col>
                {{ wetter.minTemperatur[6] }}
                <br>
                {{ wetter.maxTemperatur[6] }}
                <br>
                {{  dateFormat(wetter.date[6]) }}
            </v-col>

        </v-row>

      </v-col>
    </v-row-->
  
   
    <v-row class="ma-2">
      <v-col cols="12" md="6" lg="12">
        <div class="elevation-5">
          
            <v-row>
              
              <v-col>
                
                    
             
                    <v-row>
                     
                      <v-col>
                        
                        <div style="margin-left: 2rem;">
                        <v-icon size="x-large" style="margin-left: 3.5rem">mdi-weather-cloudy</v-icon>
                          <h3 style="margin-left: 2rem">Max {{ wetter.maxTemperatur[0] }} C</h3>
                          <h3 style="margin-left: 2rem">Min {{ wetter.minTemperatur[0] }} C</h3>
                        <br>
                        <h2 style="margin-left: 0.7rem;">
                          {{ wetter.date[0]}}
                        </h2>
                      </div>
                      </v-col>
                      <v-divider vertical></v-divider>
                      <v-col>
                        <div style="margin-left: 2rem;">
                        <v-icon size="x-large" style="margin-left: 3.5rem">mdi-weather-cloudy</v-icon>
                          <h3 style="margin-left: 2rem">Max {{ wetter.maxTemperatur[1] }} C</h3>
                          <h3 style="margin-left: 2rem">Min {{ wetter.minTemperatur[1] }} C</h3>


                          
                        <br>
                        <h2 style="margin-left: 0.7rem;">
                          {{ wetter.date[1]}}
                        </h2>
                      </div>
                      </v-col>
                      <v-divider vertical></v-divider>
                      <v-col>
                        <div style="margin-left: 2rem;">
                        <v-icon size="x-large" style="margin-left: 3.5rem">mdi-weather-cloudy</v-icon>
                          <h3 style="margin-left: 2rem">Max {{ wetter.maxTemperatur[2] }} C</h3>
                          <h3 style="margin-left: 2rem">Min {{ wetter.minTemperatur[2] }} C</h3>
                        <br>
                        <h2 style="margin-left: 0.7rem;">
                          {{ wetter.date[2]}}
                        </h2>
                      </div>
                      </v-col>
                      <v-divider vertical></v-divider>
                      <v-col>
                        <div style="margin-left: 2rem;">
                        <v-icon size="x-large" style="margin-left: 3.5rem">mdi-weather-cloudy</v-icon>
                          <h3 style="margin-left: 2rem">Max {{ wetter.maxTemperatur[3] }} C</h3>
                          <h3 style="margin-left: 2rem">Min {{ wetter.minTemperatur[3] }} C</h3>


                          
                        <br>
                        <h2 style="margin-left: 0.7rem;">
                          {{ wetter.date[3]}}
                        </h2>
                      </div>
                      </v-col>
                      <v-divider vertical></v-divider>
                      <v-col >
                        <div style="margin-left: 2rem;">
                        <v-icon size="x-large" style="margin-left: 3.5rem">mdi-weather-cloudy</v-icon>
                          <h3 style="margin-left: 2rem">Max {{ wetter.maxTemperatur[4] }} C</h3>
                          <h3 style="margin-left: 2rem">Min {{ wetter.minTemperatur[4] }} C</h3>
                        <br>
                        <h2 style="margin-left: 0.7rem;">
                          {{ wetter.date[4]}}
                        </h2>
                      </div>
                      </v-col>
                      <v-divider vertical></v-divider>
                      <v-col>
                        <div style="margin-left: 2rem;">
                        <v-icon size="x-large" style="margin-left: 3.5rem">mdi-weather-cloudy</v-icon>
                          <h3 style="margin-left: 2rem">Max {{ wetter.maxTemperatur[5] }} C</h3>
                          <h3 style="margin-left: 2rem">Min {{ wetter.minTemperatur[5] }} C</h3>
                        <br>
                        <h2 style="margin-left: 0.7rem;">
                          {{ wetter.date[5]}}
                        </h2>
                      </div>
                      </v-col>
                      <v-divider vertical></v-divider>
                      <v-col>
                        <div style="margin-left: 2rem;">
                        <v-icon size="x-large" style="margin-left: 3.5rem">mdi-weather-cloudy</v-icon>
                          <h3 style="margin-left: 2rem">Max {{ wetter.maxTemperatur[6] }} C</h3>
                          <h3 style="margin-left: 2rem">Min {{ wetter.minTemperatur[6] }} C</h3>
                        <br>
                        <h2 style="margin-left: 0.7rem;">
                          {{ wetter.date[6]}}
                        </h2>
                      </div>
                      </v-col>
                    </v-row>
                  
              </v-col>
            </v-row>



          </div>
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

    methods: {
   
    

},


    async mounted() {

      await store.dispatch("getNews");
      
     
    },


    computed: {
      ...mapState(["news", "wetter"]),

      




    }




  })
  </script>
  