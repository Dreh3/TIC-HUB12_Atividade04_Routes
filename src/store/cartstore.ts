import { Cart, type CartItem } from "@/model/cart.model";
import type { Product } from "@/model/product.model";
import { defineStore } from "pinia";
// import { get } from "http";
import {reactive, type Reactive} from 'vue'

// export const store = reactive({
//     cart: new Cart(),

//     addToCart(product: Product){
//         this.cart.addToCart(product)
//         this.cart.listProducts = [...this.cart.listProducts]
//     },

//     decItem(product: Product){
//         this.cart.decItem(product)
//         this.cart.listProducts = [...this.cart.listProducts]
//     },

//     delItem(product: Product){
//         this.cart.delItem(product)
//         this.cart.listProducts = [...this.cart.listProducts]
//     },

//     getTotalQuantity(product: Product): number{
//         const itemFound = this.cart.listProducts.findIndex((item) => item.product.id === product.id)
//         if(itemFound > -1 && this.cart.listProducts[itemFound]){
//             return this.cart.listProducts[itemFound].quantity
//         }
//         return 0
//     },

//     getFinalPrice(): number{
//         return this.cart.getFinalPrice()
//     },

//     getTotalItems(): number{
//         return this.cart.getTotalItems()
//     }

// });


export const cartStore = defineStore('cart', {
  state: () => ({
    cart: new Cart(),
    items: [] as CartItem[],
  }),
  actions: {
    addItem(product: Product){
        this.cart.addToCart(product)
        // this.items = [...this.cart.getItems()]
        this.cart.listProducts = [...this.cart.listProducts]
    },

    decItem(product: Product){
        this.cart.decItem(product)
        this.cart.listProducts = [...this.cart.listProducts]
    },

    delItem(product: Product){
        this.cart.delItem(product)
        this.cart.listProducts = [...this.cart.listProducts]
    },
    clearCart(){
        this.cart = new Cart()
        this.cart.listProducts = [...this.cart.listProducts]
    }

  },
  getters: {

    getFinalPrice(state){
        return state.cart.getFinalPrice()
    },

    getTotalItems(): number{
        return this.cart.getTotalItems()
    }
    // totalItems: (state) => state.cart.getTotalItems(),
    // finalPrice: (state) => state.cart.getFinalPrice(),
  },
})
