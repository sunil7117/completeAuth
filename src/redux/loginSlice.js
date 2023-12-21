import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getuser:null,
  cart:[],
  loading:false,
  auth:false
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
  },
  cartadd:(state,action)=>{
    state.cart=action.payload
  }
}
})

// Action creators are generated for each case reducer function
export const { loginStart,loginSuccess,loginFailure,logout,cartadd,redirectStart,redirectSuccess } = loginSlice.actions

export default loginSlice.reducer