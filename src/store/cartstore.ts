import { Cart } from "@/model/cart.model";
import type { Product } from "@/model/product.model";
import {reactive, type Reactive} from 'vue'

export const cartStore = reactive({
    cart: new Cart(),

    addItem(product: Product){
        this.cart.addToCart(product)
        this.cart.listProducts = [...this.cart.listProducts]
    }

})