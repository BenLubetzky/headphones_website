import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{cart: [
        {id: 1, name:"Sony WH-CH720N", price:399, quantity: 1, totalPrice: 350},
        {id: 2, name:"Sony ULT RUNNER", price:145, quantity: 2, totalPrice: 290},
        {id: 3, name:"Sony CHINA TOWN", price:189, quantity: 5, totalPrice: 378},

        {id: 3, name:"Sony CHINA TOWN", price:189, quantity: 5, totalPrice: 378},

        {id: 3, name:"Sony CHINA TOWN", price:189, quantity: 5, totalPrice: 378},
    ]},
    reducers:{
        addToCart(state,action){
            const addId = action.payload.id;
            const foundItem = state.cart.find(item=> item.id === addId);
            if (foundItem){
                foundItem.quantity++;
                foundItem.totalPrice += action.payload.price;
            }else{
                const pushMe = {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1,
                    totalPrice: action.payload.price
                };
                state.cart.push(pushMe);
            }
        },
        removeFromCart(state, action){
            const removeId = action.payload;
            const foundItem = state.cart.find(item => item.id === removeId);
            if (foundItem && foundItem.quantity > 1){
                foundItem.quantity--;
                foundItem.totalPrice -= foundItem.price;
            }else if(foundItem){
                state.cart = state.cart.filter(item=> item.id !== removeId);
            }
        },
        clearCart(state, action){
            state.cart = [];
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;