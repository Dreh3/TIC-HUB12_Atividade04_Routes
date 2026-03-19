<script lang="ts">
import {Product} from './model/product.model'
import {Cart} from './model/cart.model'
import ProductCard from './components/card/ProductCard.vue'
import CartItemCard from './components/card/CartItemCard.vue'
import { reactive } from 'vue';
export default{
  data() {
    return {
      cart:reactive(new Cart()),
      products: [
        new Product(123,"Climatizador",399,{ id: 1, title: 'Eletrodomésticos' }),
        new Product(879,"Smartphone",1500,{ id: 15, title: 'Eletrônicos' }),
        new Product(456,"Notebook",3500,{ id: 15, title: 'Eletrônicos' }),
        new Product(321,"Fritadeira Elétrica",250,{ id: 1, title: 'Eletrodomésticos' }),
      ]
    }
  },
  methods: {
    addItem(product: Product){
      this.cart.addToCart(product)
    },
    decItem(product: Product){
      this.cart.decItem(product)
    },
    delItem(product: Product){
      this.cart.delItem(product)
    },
  },
  components:{ProductCard, CartItemCard},
}

</script>

<template>
  <main>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 bg-gray-100 p-4">
      <div v-for="product in products">
        <ProductCard :product="product" @add="addItem"/>
      </div>
  </section>
  </main>
  
  <h1 class="font-bold bg-gray-100 p-4">Carrinho</h1>


  <div v-if="cart.listProducts.length >0">
    <DataView :value="cart.listProducts" unstyled>
      <template #list="{items}">
        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 bg-gray-100 p-4">
          <div v-for="item in items" :key="item.product.id" >
            <CartItemCard :item="item" @deletar="delItem" />
          </div>
        </section>
      </template>
    </DataView>
  </div>
  <div v-else class="flex items-center justify-center bg-gray-100 border h-16 w-full">
    <h3>{{'Carrinho vazio'}}</h3>
  </div>
  
  <h4 class="bg-gray-100 p-4">Subtotal ({{cart.getTotalItems()}} produtos): R$ {{cart.getFinalPrice().toFixed(2)}}</h4> 
  
    
</template>


