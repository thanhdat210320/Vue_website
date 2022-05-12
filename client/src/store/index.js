import { createStore } from 'vuex'
import axios from "axios"

// Create a new store instance.
var carts = localStorage.getItem('carts')

const store = createStore({
  state () {
    return {
      user:"",
      productDetail:{},
      categoryId:[],
      carts:carts ? JSON.parse(carts): [],
      product: null
    }
  },
  getters : {
     CartItemCount(state) {
      return state.carts.length; 
     },
     CartItemTotal(state) {
       let total = 0;
       state.carts.forEach(item => {
         total += item.product.price * item.quantity
       });
       return total
     }
  },
  actions: {
    async getProductsDetail({commit},id) {
          await axios
            .get(`https://localhost:44309/api/Product/GetById/${id}`)
            .then((res) => {
              commit('SET_PRODUCT_DETAIL',res.data)
              console.log(res.data);
              window.scrollTo(0, 0);
            });
       
       },
          getUser({commit},fullName) {
        commit('USER',fullName)
       },
       async getCategoryId({commit},id) {
      await axios
        .get(
          `https://localhost:44309/api/Product/GetProductByCategory/${id}`
        )
        .then((res) => {
        commit('SET_CATEGORYID',res.data.items)
          console.log(res.data.items);
        });
       },
       addProductToCart({commit},{
         product,quantity
       }){
         commit('ADD_TO_CART',{product,quantity})
         alert('Add To Cart Success')
       },
       removeProductinCart({commit},id){
         commit('REMOVE_PRODUCT_IN_CART',id)
       },
  },
  mutations: {
      USER(state,fullName){
        state.user = fullName
      },
      SET_PRODUCT_DETAIL(state,item){
        state.productDetail = item
      },
      SET_CATEGORYID(state,item){
        state.categoryId = item
      },
      ADD_TO_CART(state,{product,quantity}){

        let ProductInCart = state.carts.find(item =>{
          return item.product.id === product.id;
        });
        if(ProductInCart){
          ProductInCart.quantity +=quantity;
          return;
        }
         state.carts.push({product,quantity})
         console.log({product,quantity})
         localStorage.setItem("carts", JSON.stringify(state.carts))
         console.log(carts)
      },
      REMOVE_PRODUCT_IN_CART(state,id) { 
         const index =  state.carts.indexOf(id)   
          state.carts.splice(index,1)
          localStorage.setItem("carts", JSON.stringify(state.carts))
        
      }
  },

})

export default store