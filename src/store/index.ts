import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
 

  },
  getters: {


  },
  mutations: {


  },
  actions: {
    async getSchuelerklasse(context, payload) {
     
      const response = await axios.get(`http://localhost:3000/api/users/getUserList`)
      console.log("DATA",response.data);
      
      
    }




    


  },
  modules: {


  }
})
