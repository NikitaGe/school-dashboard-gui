<template>
    <v-card class="ma-2" style="height: 50rem; width: 100%;">
        <v-row>
            <v-col>
                {{ wetter.minTemperatur[0] }}
                <br>
                {{ wetter.maxTemperatur[0] }}
                <br>
                {{ wetter.date[0] }}
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                {{ wetter.minTemperatur[1] }}
                <br>
                {{ wetter.maxTemperatur[1] }}
                <br>
                {{ dateFormat(wetter.date[1]) }}
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                {{ wetter.minTemperatur[2] }}
                <br>
                {{ wetter.maxTemperatur[2] }}
                <br>
                {{ dateFormat(wetter.date[2]) }}
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                {{ wetter.minTemperatur[3] }}
                <br>
                {{ wetter.maxTemperatur[3] }}
                <br>
                {{ dateFormat(wetter.date[3]) }}
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                {{ wetter.minTemperatur[4] }}
                <br>
                {{ wetter.maxTemperatur[4] }}
                <br>
                {{ dateFormat(wetter.date[4]) }}
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                {{ wetter.minTemperatur[5] }}
                <br>
                {{ wetter.maxTemperatur[5] }}
                <br>
                {{ dateFormat(wetter.date[5]) }}
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                {{ wetter.minTemperatur[6] }}
                <br>
                {{ wetter.maxTemperatur[6] }}
                <br>
                {{  dateFormat(wetter.date[6]) }}
            </v-col>

        </v-row>
    </v-card>
  </template>
  
  <script lang='ts'>
  import { defineComponent } from 'vue'
  import { mapState } from 'vuex';
  
  export default defineComponent({
    name: 'weather-views',
  
    data () {
      return {
        
        
       
      }
    },

    methods: {

        dateFormat(date : string) {
        let dateArr = date.split('-');
        let newDate = dateArr[2] + "." + dateArr[1] + "." + dateArr[0]
        return newDate
}
    },


    computed: {
        ...mapState(["wetter"])


       


    }


  })
  </script>
  