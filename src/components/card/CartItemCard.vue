<template>
    <Card :style="{width: '100%', minwidth:'50px', maxwidth:'100px'}">
        <template #content>
            <div class="flex flex-row gap-2">
                <img :src="'https://picsum.photos/25'" class="w-20"/>
                <!-- colocar acesso às propriedades de product nos métodos -->
                <h3 class="flex flex-1">{{item.product.name}}</h3>
                <p>R$: {{item?.product.price.toFixed(2).replace(',','.')}}</p>  
            </div>
            
        </template>
        <template #footer>
                <InputNumber v-model="item.quantity" showButtons buttonLayout="horizontal"  inputClass="w-10 text-sm" :min="1" class="h-8" >
                    <template #incrementbuttonicon >
                        <span class="pi pi-plus"></span>
                    </template>
                    <template #decrementbuttonicon >
                        <span class="pi pi-minus"></span>
                    </template>
                </InputNumber>
                <div class="flex flex-row-reverse">
                    <!-- pode colocar o button no div e modificá-lo -->
                    <Button @click="delItem(item.product!)">Excluir item</Button>
                </div>
        </template>
    </Card>
</template>

<script lang = "ts">
import {type CartItem} from '@/model/cart.model'
import type {Product} from '@/model/product.model'
import { InputNumber } from 'primevue';
import {defineComponent, type PropType, ref, onMounted, onUnmounted} from 'vue'
let intervalid: number;


export default defineComponent({
    components:{
        InputNumber,
    },
    props:{
        item:{
            type: Object as PropType<CartItem>,
            required: true,
        },
        product:{
            type: Object as PropType<Product>
        }
    },
    emits:["deletar"],
    methods:{
        delItem(product:Product){
            this.$emit("deletar",product)
        },
    },
})

</script>