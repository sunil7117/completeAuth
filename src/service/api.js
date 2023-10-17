import axios from 'axios'
const api=process.env.REACT_APP_SERVER||"http://locolhost:8000"
// const api="https://complete-auth-api.vercel.app/"

export const Signup=async(data)=>{
     try {
        return await axios.post(`${api}/api/auth/signup`,data)
      } catch (error) {
         // console.error(error.response)     /*This code is for developer only*/
         return(error.response)
      }
   }
   export const Login=async(data)=>{
      try {
      return await axios.post(`${api}/api/auth/signin`,data)
   } catch (error) {
      return(error.response)
   }
}
export const ForgetPassword=async(data)=>{
   try {
      return await axios.post(`${api}/api/auth/forget`,data)
   } catch (error) {
      return(error.response)
   }
}
export const verifyOTP=async(data)=>{
   try {
      return await axios.post(`${api}/api/auth/verifyOTP`,data)
   } catch (error) {
      return(error.response)
   }
}
export const UpdatePasswords=async(data)=>{
   try {
      return await axios.post(`${api}/api/auth/updatepassword`,data)
   } catch (error) {
      return(error.response)
   }
}
