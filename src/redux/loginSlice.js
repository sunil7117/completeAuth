import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getuser:null,
  cart:[],
  addresslists:[],
  loading:false,
  auth:false,
  quantity:1,
  productTag:[]
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart:(state)=>{
      state.loading=true
    },
    redirectStart:(state)=>{
      state.loading=true
    },
    loginSuccess:(state,action)=>{
     state.loading=false
     state.auth=true
     state.getuser=action.payload
   },
    redirectSuccess:(state,action)=>{
     state.loading=false
     state.auth=true
     state.getuser=action.payload
   },
   loginFailure:(state,action)=>{
      state.loading=false
      state.getuser=action.payload
    },
  logout:(state)=>{
    state.getuser=null
    state.auth=false
    state.cart=[]
    state.quantity=1
  },
  cartadd:(state,action)=>{
    state.cart=action.payload
  },
  productQuantity:(state,action)=>{
    state.quantity=action.payload
  },
  addresslist:(state,action)=>{
    state.addresslists=action.payload
  },
  getTag:(state,action)=>{
    state.productTag=action.payload
  },
  getColor:(state,action)=>{
    state.productColor=action.payload
  }
}
})

// Action creators are generated for each case reducer function
export const { getColor,getTag,loginStart,loginSuccess,loginFailure,logout,cartadd,redirectStart,redirectSuccess,productQuantity,addresslist } = loginSlice.actions

export default loginSlice.reducer