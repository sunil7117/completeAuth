import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getuser:null,
  cart:[],
  isFailure:true
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart:(state)=>{
      state.isFailure=false
    },
    loginSuccess:(state,action)=>{
     state.isFailure=false
     state.getuser=action.payload
   },
   loginFailure:(state,action)=>{
      state.isFailure=true
      state.getuser=action.payload
    },
  logout:(state)=>{
    state.isFailure=true
    state.getuser=null
    state.cart=[]
  },
  cartadd:(state,action)=>{
    state.cart=action.payload
     console.log(action.payload)
  }
  },
})

// Action creators are generated for each case reducer function
export const { loginStart,loginSuccess,loginFailure,logout,cartadd } = loginSlice.actions

export default loginSlice.reducer