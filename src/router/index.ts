import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import ConsumerLayout from '@/layouts/ConsumerLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Checkout from '@/views/Checkout.vue'
import Login from '@/views/Login.vue'
import { userLogin } from '@/store/userstore'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:"/",
      component: ConsumerLayout,
      children:[
        {
          path: '',
          component: Home,
        },
        // {
        //   path: 'products',
        //   component: Products,
        // },
        {
          path: 'products/:id',
          // o componente é o visual em Vue e path indica a rota e o parâmetro até passar
          component: ProductDetail,
          // props: true,
          meta:{
            requiredAdmin:true,
          }
        },
        {
          path: 'checkout',
          // o componente é o visual em Vue e path indica a rota e o parâmetro até passar
          component:  Checkout, //mudar para checkout
          meta:{
            requiredAuth:true,
          }
        },
      ],
    },
    {
      path: "/admin",
      component: AdminLayout,
      meta:{
            auth:true,
          },
      children:[
        {
          path: 'products',
          component: Products,
        },
      ],
    },
    {
      path: '/login',
      component: Login
    },
  ],
})

router.beforeEach((to, from, next)=>{
  if(to?.meta?.requiredAuth || to?.meta?.requiredAdmin){
    // verifica se tem to, depois verifica se tem meta
    const user = userLogin
    //nesse caso to considerando tudo bloqueado
    if(user.isAdmin()){
      next()
      return
    }else if(user.isAuth()){
      next() 
      return
    }else{ //vai para a tela de login caso não esteja autenticado
      next('/login')
      return
    }
  }else{
      next()
      return
    }
})
export default router
