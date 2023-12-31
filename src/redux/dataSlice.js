import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading:false,
  product:[]
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
     
  },
})

// Action creators are generated for each case reducer function
export const { loadingProduct,getProduct,errorProduct} = dataSlice.actions

export default dataSlice.reducer