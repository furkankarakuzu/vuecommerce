import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    cart : [],
    product : undefined
  },
  mutations : {
    addToCart(state, payload){
      state.cart.push(payload);
    },
    setProduct(state, payload){
      state.product = payload
    },
    removeProduct(state, product){
      for (let i = 0; i < state.cart.length; i++) {
        if(state.cart[i].id==product.id){
          state.cart.splice(i,1);
          break;
        }
      }
    }
  },
  getters : {
    getCart(state){
      return state.cart;
    },
    getTotalPrice(state){
      let totalPrice = 0;
      state.cart.forEach(element => {
        totalPrice += parseInt(element.price)
      });
      return totalPrice
    },
    getProduct(state){
      return state.product
    }
  },
  actions : {
    addToCart({commit},product){
      commit('addToCart',product)
    },
    setProduct({commit},product){
      commit('setProduct',product)
    },
    removeProduct({commit},product){
      commit('removeProduct',product)
    }
  }
})

export default store