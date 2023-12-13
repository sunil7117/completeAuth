import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading:false,
  product:[],
  cart:[],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
     loadingProduct:(state)=>{
      state.loading=true
     },
     getProduct:(state,action)=>{
      state.loading=false
      state.product=action.payload
     },
     errorProduct:(state,action)=>{
      state.product=action.payload
     },
     addCart:(state,action)=>{
      state.cart=action.payload
     },
     increasebyOne:(state)=>{
      state.itemIncrease+=1
     },
     decreasebyOne:(state)=>{
      state.itemIncrease-=1
     },
     loginStart:(state)=>{
       state.isFailure=false
     },
     loginSuccess:(state,action)=>{
      state.isFailure=false
      state.user=action.payload
    },
    loginFailure:(state,action)=>{
      state.isFailure=true
       state.isFailure=action.payload
      
     },
  },
})

// Action creators are generated for each case reducer function
export const { loadingProduct,getProduct,errorProduct,addCart} = dataSlice.actions

export default dataSlice.reducer