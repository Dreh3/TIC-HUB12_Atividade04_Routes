import {Product} from '@/model/product.model'

export function getProducts(): Product[]{
    return [
        new Product(1,"Climatizador",399,{ id: 1, title: 'Eletrodomésticos' }),
        new Product(879,"Smartphone",1500,{ id: 15, title: 'Eletrônicos' }),
        new Product(456,"Notebook",3500,{ id: 15, title: 'Eletrônicos' }),
        new Product(321,"Fritadeira Elétrica",250,{ id: 1, title: 'Eletrodomésticos' }),
      ]

}
