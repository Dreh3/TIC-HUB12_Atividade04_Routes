<template>
    <Card :style="{width: '100%', minwidth:'50px', maxwidth:'100px'}">
        <template #content>
            <div class="flex flex-row gap-2 ">
                <img :src="'https://picsum.photos/25'" class="w-20"/>
                <OrderList>
                    <h3 class="flex flex-1">{{item.product.name}}</h3>
                    <p>R$: {{item?.product.price.toFixed(2).replace(',','.')}}</p>  
                </OrderList>
            </div>
            
        </template>
        <template #footer>
            <div class="flex flex-row-2 gap-2">
                <InputNumber :modelValue="item_quantity" @update:modelValue="(val) => changeQuantity(item, val as number)" showButtons buttonLayout="horizontal"  inputClass="w-10 text-sm" :min="1" :max="99" class="h-8" >
                    <template #incrementbuttonicon >
                        <span class="pi pi-plus"></span>
                    </template>
                    <template #decrementbuttonicon >
                        <span class="pi pi-minus" ></span>
                    </template>
                </InputNumber>
                    <!-- pode colocar o button no div e modificá-lo -->
                    <Button size="small" @click="delItem(item.product!)" icon:>Excluir item</Button>
                <!-- <p >Quantidade: {{ cart.getTotalItems() }}</p> -->
            </div>
        </template>
    </Card>
</template>

<script lang = "ts">
import {type CartItem} from '@/model/cart.model'
import type {Product} from '@/model/product.model'
import { InputNumber } from 'primevue';
import {defineComponent, type PropType, ref, onMounted, onUnmounted} from 'vue'
import { cartStore } from '@/store/cartstore';

export default defineComponent({
    components:{
        InputNumber,
    },
    props:{
        item:{
            type: Object as PropType<CartItem>,
            required: true,
        },
        item_quantity:{
            type: Number,
            required: true,
        },

    },
    emits:["deletar", "addItem", "decItem"],
    methods:{
        delItem(product:Product){
            this.$emit("deletar",product)
        },
        changeQuantity(item: CartItem, val:number){
            if(item.quantity<val){
                this.$emit("addItem", item.product)
                // this.cart.addToCart(item.product!)
            }else if(item.quantity>val){
                this.$emit("decItem", item.product)
            }
           
        },
    },
})

</script>