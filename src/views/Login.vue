<template>
    <div class="h-screen bg-gray-100">
        <h1>Login</h1>
        <p>Efetue seu login para continuar</p>
        <div class="flex flex-row gap-2">
            <Button label="Normal" class= "shadow-sm border rounded " @click="login('admin')">Entrar como Admin</Button>
            <Button label="Normal" class= "shadow-sm border rounded " @click="login('consumer')">Entrar como Consumer</Button>
            <!-- voltar para home para consumer ou admin para admin com methods-->
        </div>
    </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import { userLogin } from '@/store/userstore';

export default defineComponent({
  data(){
    return{
        user: userLogin
    }
  },
  methods:{
    login(role: string){
        if(role==='admin'){
            this.user.loginAsAdmin()
            alert('Login como Admin realizado com sucesso!')
            this.$router.push('/admin/products')
        }else if(role==='consumer'){
            this.user.loginAsConsumer()
            alert('Login como Consumer realizado com sucesso!')
            this.$router.push('/') 
        }
    }
  }
})

</script>