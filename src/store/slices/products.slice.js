import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const productsSlice=createSlice({
    name:'products',
    initialState: null,
    reducers:{
        setProducts: (state, action)=>action.payload

    }
})

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = ()=> (dispatch)=>{
    // isLogaind(true)
    const url='https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(url)
    .then(res=>{
        // isLogaind(false)
        dispatch(setProducts(res.data.data.products))
    })
    .catch(err=>{
        // isLogaind(false)
        console.log(err)
    })

}