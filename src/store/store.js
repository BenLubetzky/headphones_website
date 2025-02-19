import { configureStore } from "@reduxjs/toolkit";
import searchTermSlice from "./searchTermSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        searchTerm: searchTermSlice.reducer,
        products: productsSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;