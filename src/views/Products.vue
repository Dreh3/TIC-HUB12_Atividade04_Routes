<template>
    <main>
        <!-- h-screen pega a tela toda -->
        <div class="h-50 w-50 bg-gray-100">
            <div v-for="product in products" :key="product.id">
                <div >
                    <ProductCard :product="product" :modo="'admin'"/>
                </div>
            </div>
        </div>
    </main>

</template>
<script lang="ts">
import ProductCard from '@/components/card/ProductCard.vue';
import { getProducts } from '@/store/productslist';
import {defineComponent} from 'vue'
export default defineComponent({
    data(){
        return{
            products: getProducts()
        }
    },
    components:{ProductCard}
})
</script>