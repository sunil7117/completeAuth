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
export const ForgetPassword=async(data)=>{
   try {
      return await axios.post(`${api}/api/auth/forget`,data)
   } catch (error) {
      console.error(error.response)
      return(error.response)
   }
}
export const verifyOTP=async(data)=>{
   try {
      return await axios.post(`${api}/api/auth/verifyOTP`,data)
   } catch (error) {
      console.error(error.response)
      return(error.response)
   }
}
export const UpdatePassword=async()=>{}