import { createSlice } from "@reduxjs/toolkit"

const initialState={
    products:[]
}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        setProducts(state,acion){
            state.products=acion.payload
        }
    },

})

export const {setProducts}=productSlice.actions;
export default productSlice.reducer;