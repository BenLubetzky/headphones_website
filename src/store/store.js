import { configureStore } from "@reduxjs/toolkit";
import searchTermSlice from "./searchTermSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
    reducer:{
        searchTerm: searchTermSlice.reducer,
        products: productsSlice.reducer
    }
});

export default store;