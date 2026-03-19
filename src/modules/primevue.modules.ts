//cria função para importar os componentes
import type {App} from "vue";
import PrimeVue from "primevue/config";
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button";
import Card from 'primevue/card';
import DataView from 'primevue/dataview';
import { InputNumber } from "primevue";

export function setPrimeVue(app:App):void{

    app.use(PrimeVue,{
    theme: {
        preset: Aura
        }
    })
    app.component('Button', Button)
    app.component('Card', Card)
    app.component('DataView', DataView)
    app.component('InputNumber', InputNumber)

}