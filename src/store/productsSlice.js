import { createSlice } from "@reduxjs/toolkit";
import headphones1 from '../material/headphones1.jpg';
import headphones2 from '../material/headphones2.jpg';
import headphones3 from '../material/headphones3.jpg';
import headphones4 from '../material/headphones4.jpg';
import headphones5 from '../material/headphones5.jpg';
import headphones6 from '../material/headphones6.jpg';

const products = [
    {id: 1, name:"Sony WH-CH720N", url:headphones1, price:399},
    {id: 2, name:"Sony WH-CH520", url:headphones2, price:349},
    {id: 3, name:"Sony WH-1000XM4", url:headphones3, price:349},
    {id: 4, name:"Sony MDR-ZX110AP", url:headphones4, price:349},
    {id: 5, name:"Sony WH-H900N", url:headphones5, price:349},
    {id: 6, name:"Sony UTL WEAR", url:headphones6, price:349},
];

const productsSlice = createSlice({
    name:'products',
    initialState:{products: [
        {id: 1, name:"Sony WH-CH720N", url:headphones1, price:399},
        {id: 2, name:"Sony WH-CH520", url:headphones2, price:349},
        {id: 3, name:"Sony WH-1000XM4", url:headphones3, price:349},
        {id: 4, name:"Sony MDR-ZX110AP", url:headphones4, price:349},
        {id: 5, name:"Sony WH-H900N", url:headphones5, price:349},
        {id: 6, name:"Sony UTL WEAR", url:headphones6, price:349},
    ]},
    reducers:{
        findProductsByName(state, action){
            const temp = [];
            const searchTerm = action.payload;
            if (!searchTerm){
                state.products = products;
            }
            else{
                for (let i = 0; i < products.length; i++){
                    if (products[i].name.length >= searchTerm.length && products[i].name.slice(0, searchTerm.length).toLocaleLowerCase() === searchTerm){
                        temp.push(products[i]);
                    }
                }
                state.products = temp;
            }
        }
    }
});

export const productsActions = productsSlice.actions;

export default productsSlice;
