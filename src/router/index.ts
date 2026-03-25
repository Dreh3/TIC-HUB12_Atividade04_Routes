import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:"/",
      component: CustomerLayout,
      children:[
        {
          path: '',
          component: Home,
        },
        {
          path: 'products',
          component: Products,
        },
        {
          path: 'products/:id',
          // o componente é o visual em Vue e path indica a rota e o parâmetro até passar
          component: ProductDetail,
          // props: true,
          meta:{
            auth:true,
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
  ],
})
router.beforeEach((to, from, next)=>{
  if(to?.meta?.auth){
    // verifica se tem to, depois verifica se tem meta
    const token = {
      isAuth:true
    }
    //nesse caso to considerando tudo bloqueado
    if(token.isAuth){
      next()
      return
    }else{
      next('/')
      return
    }
  }else{
      next()
      return
    }
})
export default router
