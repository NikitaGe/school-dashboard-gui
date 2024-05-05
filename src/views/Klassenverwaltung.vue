<template>


   
        <schueler-tabelle></schueler-tabelle>
      
    


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
  