import axios from 'axios'
const api="http://localhost:8000"

export const Signup=async(data)=>{
     try {
        return await axios.post(`${api}/api/auth/signup`,data)
     } catch (error) {
        console.error(error.response)
        return(error.response)
     }
}
export const Login=async(data)=>{
   try {
      return await axios.post(`${api}/api/auth/signin`,data)
   } catch (error) {
      console.error(error.response)
      return(error.response)
   }
}
export const ForgetPassword=async()=>{}
export const OTPVerify=async()=>{}
export const UpdatePassword=async()=>{}