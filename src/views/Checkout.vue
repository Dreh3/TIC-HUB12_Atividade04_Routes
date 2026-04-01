<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="cart.getTotalItems<=0">
      <p>O carrinho está vazio.</p>
    </div>
    <div v-else>
      <h4>Subtotal ({{cart.getTotalItems}} produtos): R$ {{cart.getFinalPrice.toFixed(2).toString()}}</h4>
      <Button @click="finalizar()"> Finalizar Compra </Button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Cart} from '@/model/cart.model';
import CartItemCard from '@/components/card/CartItemCard.vue';
import { cartStore } from '../store/cartstore';

export default defineComponent({

    data() {
        return {
            cart: cartStore()
        }
    },
    methods:{
      finalizar(){
        alert('Compra finalizada com sucesso!')
        this.cart.clearCart()
      }
    },
    components:{CartItemCard},
})

</script>