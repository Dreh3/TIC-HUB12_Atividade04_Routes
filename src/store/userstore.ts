import { reactive } from "vue";

export interface UserLogin{
  id: string;
  name: string;
  role: 'admin' | 'consumer'
}

export const userLogin = reactive({

    user: null as UserLogin | null,

    loginAsAdmin(){
        this.user = {id: '5', name: 'João', role: 'admin'}
    },

    loginAsConsumer(){
        this.user = {id:'1', name: 'Maria', role: 'consumer'}
    },

    isAuth(): boolean{
        return this?.user?.role === 'consumer'
    },

    isAdmin(): boolean{
        return this?.user?.role === 'admin'
    }




})