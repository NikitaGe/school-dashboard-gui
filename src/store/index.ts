import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    schueler : [],
    class : [],

  },
  getters: {


  },
  mutations: {
    setSchueler(state, payload) {
      state.schueler = payload;
    },


    

    setClass(state, payload) {
      state.class = payload;
    },


  },
  actions: {

    async login(context, payload) {
      //const response = axios.post(`http://localhost:3000/api/users/login`, {params: {data : payload}});
      const response = axios.post(`http://localhost:3000/api/users/login`, {data : payload});
    },



    async getSchuelerklasse(context, payload) {         
      const response = await axios.get(`http://localhost:3000/api/users/getUserList`);
      context.commit("setSchueler", response.data);
      console.log(response.data);
      
    },


    async getKlassen(context, payload) {
      
      const response = await axios.get(`http://localhost:3000/api/users/getClasses`);
      context.commit("setClass", response.data);
      
      
    },

    async selectClass(context, payload) {
      
      const response = await axios.get(`http://localhost:3000/api/users/selectClass`, { params: { idclass : payload}});
      context.commit("setSchueler", response.data);
      console.log(response.data);
      
    }

    


  },
  modules: {


  }
})
