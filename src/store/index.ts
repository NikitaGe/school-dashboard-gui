import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    schueler : [],

  },
  getters: {


  },
  mutations: {
    setSchueler(state, payload) {
      console.log("payload", payload);
      
      state.schueler = payload;
      console.log(state.schueler);
      
    }

  },
  actions: {
    async getSchuelerklasse(context, payload) {      
      const response = await axios.get(`http://localhost:3000/api/users/getUserList`);
      context.commit("setSchueler", response.data);
    }




    


  },
  modules: {


  }
})
