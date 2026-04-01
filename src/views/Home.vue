<script lang="ts">
import {Product} from '@/model/product.model'
// import {Cart} from '@/model/cart.model'
import ProductCard from '@/components/card/ProductCard.vue'
import CartItemCard from '@/components/card/CartItemCard.vue'
import { reactive } from 'vue';
import {getProducts} from '@/store/productslist'
import { cartStore } from '../store/cartstore';
import { content } from '@primeuix/themes/aura/accordion';

export default{
  data() {
    return {
      // cart: reactive (new Cart()),
      products: getProducts(),
      cart: cartStore()
    }
  },
  methods: {
    addItem(product: Product){
      console.log('chama addItem')
      this.cart.addItem(product)
      console.log(this.cart.getTotalItems, 'tamanho do carrinho')
    },
    decItem(product: Product){
      this.cart.decItem(product)
    },
    delItem(product: Product){
      this.cart.delItem(product)
    },
    goToDetail(products: Product){  
      // função para ir aos detalhes
      const id = products.id
      this.$router.push({path: `/products/${id}`})

    }
  },
  components:{ProductCard, CartItemCard},
}

</script>

<template>
  <main>

  <div class="flex flex row">
    <div class="flex-1">
      <!-- <p>coluna 1</p> -->
       <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        <div v-for="product in products" :key="product.id">
          <div >
            <ProductCard :product="product" @add="addItem"/>
            <!-- <Button @click="store.addItem(product)">Adicionar ao store</Button> -->
            <!-- usa o alerta click -->
          </div>
        </div>
    </section>
    </div>
    <div class="flex  flex-row-reverse">
      <!-- <p>coluna 2</p> -->
      
      <Card class="bg-gray-100 m-4 shadow-lg border rounded gap-4">
        <template #title>Carrinho</template>
        <template #content>
            <div v-if="cart.getTotalItems >0">
                  <!-- <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2"> -->
                    <!-- atenção aqui -->
                  <OrderList :value="cart.$state.cart.listProducts" class="w-16">
                      <div v-for="(item,index) in cart.$state.cart.listProducts" :key="index" > 
                        <!-- se passar cart e index e faz uma função para obter a quantidade -->
                        <CartItemCard :item="item" :item_quantity="item.quantity" :item_finalPrice="item.quantity*
                        item.product.price" @deletar="delItem" @add-item="addItem" @dec-item="decItem"/> 
                        <!-- <CartItemCard :quantity="item.quantity" :product = "item.product" @deletar="delItem" /> -->
                      </div>
                  </OrderList>
                  <!-- </section> -->
            </div>
            <div v-else class="flex items-center justify-center border w-50">
              <h3>{{'Carrinho vazio'}}</h3>
            </div>
        </template>
        <template #footer>
          <h4>Subtotal ({{cart.getTotalItems}} produtos): R$ {{cart.getFinalPrice.toFixed(2).toString()}}</h4> 
        </template>
      </Card>
    </div>
  </div>
   
    
  </main>
  
  <!-- <h1 class="font-bold bg-gray-100 p-4">Carrinho</h1> -->


    
</template>


