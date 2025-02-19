import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
    name:'searchTerm',
    initialState:{searchTerm: ''},
    reducers:{
        setSearchTerm(state, action){
            state.searchTerm = action.payload;
        }
    }
})

export const searchTermActions = searchTermSlice.actions;

export default searchTermSlice;