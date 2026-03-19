<template>
    <!-- <article class="w-[200px]">
        <h3>{{product?.name}}</h3>
        <p>{{product?.category.title}}</p>
        <p>R$: {{product?.price.toFixed(2).replace(',','.')}}</p>
        <button @click="addItem(product!)">Adicionar</button>
        <button @click="remItem(product!)">Remover</button>
    </article> -->
    <Card :style="{width: '100%', minwidth:'100px', maxwidth:'320px'}" class= "shadow-lg border rounded gap-4">
        <template #header>
            <!-- modifica-se aspectos das imagens com class -->
            <img :src="'https://picsum.photos/100'" class="w-full object-cover"/>
        </template>
        <template #title>
            <h1>{{product?.name}}</h1>
        </template>
        <template #content>
            <p>{{product?.category.title}}</p>
            <p>R$: {{product?.price.toFixed(2).replace(',','.')}}</p>
        </template>
        <template #footer>
            <div class="flex flex-row gap-2">
                <Button class= "shadow-sm border rounded " @click="addItem(product!)">Adicionar</Button>
            </div>
        </template>
    </Card>
</template>
<script lang = "ts">
import {Product} from '@/model/product.model'
import {defineComponent, type PropType} from 'vue'
export default defineComponent({
    props:{
        product:{
            type: Object as PropType<Product>,
        }
    },
    emits:["add"],
    methods:{
        addItem(product:Product){
            this.$emit("add",product)
        },
    }
})
</script>