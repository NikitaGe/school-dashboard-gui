import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    schueler : [],
    lehrer : [],
    class : [],
    isAuthenticated : false,
    news: {}

  },
  getters: {


  },
  mutations: {

    setLehrer(state, payload) {
        state.lehrer = payload;
        console.log(state.lehrer);
        
    },

    setSchueler(state, payload) {
      state.schueler = payload;
    },

    setAuthentication(state, payload) {
      state.isAuthenticated = payload
      console.log(state.isAuthenticated);
      
    },
    

    setClass(state, payload) {
      state.class = payload;
    },

    setNews(state, payload) {
      state.news = payload
      console.log(state.news);
      
    },



  },
  actions: {

    async login(context, payload) {
      //const response = axios.post(`http://localhost:3000/api/users/login`, {params: {data : payload}});
      const response = await axios.post(`http://localhost:3000/api/users/login`, {data : payload});
      context.commit("setAuthentication", response.data)
    },



    async getNews(context, payload) {  
      console.log("response");       
      const response = await axios.get(`http://localhost:3000/api/users/getNews`);
      context.commit("setNews", response.data);
    },


    async getSchuelerklasse(context, payload) {         
      const response = await axios.get(`http://localhost:3000/api/users/getUserList`);
      context.commit("setSchueler", response.data);
    },

    


    async getLehrer(context, payload) {         
      const response = await axios.get(`http://localhost:3000/api/users/getLehrerList`);
      context.commit("setLehrer", response.data);
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
