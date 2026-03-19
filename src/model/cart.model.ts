import {Product} from './product.model'

export interface CartItem {
    product: Product;
    quantity:number;
}

export class Cart{

    public cartTotal: number = 0.0;
    public cartFinalPrice: number = 0.0;

    constructor(public listProducts:CartItem[]=[]){}

    addToCart(product: Product){
        //procuro o item na lista existente
        const itemFound = this.listProducts.findIndex((item) => item.product.name === product.name)
        if(itemFound>-1 && this.listProducts[itemFound]){ //verifico se encontrou índice válido e se há algo nesse índice
            this.listProducts = this.listProducts.map((i) => {
            return i.product.name === product.name ? {...i, quantity: i.quantity + 1} : i
            })
        }else{
            this.listProducts.push({product, quantity: 1})
        }
    }

    remItem(product:Product){
        const itemFound = this.listProducts.findIndex((item) => item.product.name === product.name)
        if(itemFound>-1 && this.listProducts[itemFound]){ //verifico se encontrou índice válido e se há algo nesse índice
            if(this.listProducts[itemFound].quantity-1 <= 0){
                this.listProducts.splice(itemFound,1) //remove o item do carrinho se quantidade for zero
            }else{
                this.listProducts = this.listProducts.map((i) => 
                i.product.name === product.name ? {...i, quantity: i.quantity - 1} : i
                )
            }
            
        }
    }

    delItem(product:Product){
        const itemFound = this.listProducts.findIndex((item) => item.product.name === product.name)
        if(itemFound>-1 && this.listProducts[itemFound]){ 
            this.listProducts.splice(itemFound,1) 
        }
    }

    getTotalItems():number{
        
        this.cartTotal = 0.0;

        this.listProducts.forEach((item) => {
            this.cartTotal += item.quantity;
        });

        return this.cartTotal;
    }

    getFinalPrice(): number{

        this.cartFinalPrice = 0.0;

        this.listProducts.forEach((item) => {
            this.cartFinalPrice += item.product.price * item.quantity;
        });

        return this.cartFinalPrice;

    }

}