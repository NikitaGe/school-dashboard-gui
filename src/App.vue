<template>
  <v-app>
    <v-layout> 
    <v-app-bar title="TGBBZ-1" color="primary" v-if="isAuthenticated">
      <!--v-btn >Widgets</v-btn-->
      <v-menu >
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
          prepend-icon="mdi-account"
        >
         Benutzer
        </v-btn>
      </template>

      <v-list
      
          :lines="false"
          density="compact"
          nav
        >
          <v-list-item
            v-for="(item) in items"
            :key="item.text"
            :value="item"
            color="primary"
            @click="dropDown(item.text)"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
    </v-menu>
    </v-app-bar>
    <v-navigation-drawer rail expand-on-hover v-if="isAuthenticated">
      <v-list>
        <v-list-item v-for="item in navigation" :key="item.title" :title="item.title" :to="item.link" :prepend-icon=item.icon></v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-layout>
  </v-app>
<my-account-dialog v-model="myaccountdialog"></my-account-dialog>







</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyAccountDialog from './components/MyAccountDialog.vue'
import { mapState } from 'vuex';
import router from './router';
import store from '@/store'
export default defineComponent({
  name: 'App',
  components:{ MyAccountDialog },

  data () {
    return {
      rail : true,
      myaccountdialog : false,


      widgets: [
        {
          widgetid: 1,
          widget:"Klassenverwaltung"
        },
        {
          widgetid: 2,
          widget:"Kalendar"
        },
      ],


      navigation: [
        {
          title: "Dashboard",
          link : "/dashboard",
          icon: "mdi-view-dashboard"
        },


        {
          title: "Klassenverwaltung",
          link : "/class",
          icon : "mdi-account-group"
        },

        /*
        {
          title: 'Wetter', 
          link : '/wetter',
          icon: 'mdi-weather-cloudy'

        }
        */

      ],





      items: [
        { text: 'Mein Account', icon: 'mdi-account-circle-outline' },
        { text: 'Einstellungen', icon: 'mdi-cog' },
        { text: 'Abmelden', icon: 'mdi-logout' },
       
        
      ],



    }
  },
  methods: {
 
    dropDown(dropItem : string) {
      switch(dropItem) {
        case "Mein Account":
          this.myaccountdialog = true;
          break;
        case "Abmelden":
          store.dispatch('logout');
          router.push('/')

      }
    },



    


  },
  async mounted() {
    await store.dispatch("getWetter")
    await store.dispatch('checkAuthStatus'),

    await store.dispatch('getSchuelerklasse'); 
      await store.dispatch('getKlassen');
  },

  computed: {
   ...mapState(["isAuthenticated"])


  },

watch: {
  isAuthenticated() {
    if(this.isAuthenticated) {
      router.push('/dashboard')
    }
  }
}


})
</script>
