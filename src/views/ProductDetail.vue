<template>
    <div v-if="product?.id">
        console.log(product.name, "Nome do produto")
        <ProductCard :product="product" />
    </div>
    <div v-else>
        <p>Sem produto</p>
    </div>
</template>
<script lang="ts">
import { Product } from '@/model/product.model';
import {defineComponent, type PropType} from 'vue'
import ProductCard from '@/components/card/ProductCard.vue'
import ProductDetail from './ProductDetail.vue';
import {getProducts} from '../store/productslist';

export default defineComponent({
    
    // props: {
    //     product:{ 
    //         type: Object as PropType<Product>,
    //             required:true
    //     }
    // },
    data(){
        return {
            productId: Number(this.$route.params.id),
            // productN: this.$route.params.name
            product: {} as Product | undefined
       }
    },
    methods:{
        getProduct(){
            const product1= getProducts().find((p) => p.id ===this.productId)
            this.product = product1
        }
    },
    components:{ProductCard},
    mounted(){
        this.getProduct()
    }
})
</script>