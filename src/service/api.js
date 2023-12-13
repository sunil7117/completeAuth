import axios from 'axios'
const api=process.env.REACT_APP_SERVER||"http://localhost:8000"
// const api="https://complete-auth-api.vercel.app/__process.env.REACT_APP_SERVER||"


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
// Get a user
export const getUser=async(data)=>{
   try {
      if(data){
         return await axios.get(`${api}/api/auth/getuser?_id=${data}`)
      }
   } catch (error) {
      return(error.response)
   }
}


export const getallproducts=async()=>{
   try {
      return await axios.get(`${api}/api/product`)
   } catch (error) {
      return(error.response)
   }
}
// http://localhost:8000/api/product/search?_id=657286ad9d3240974f6ba3ed
export const getproductbysearch=async(params)=>{
   try {
      return await axios.get(`${api}/api/product/search?_id=${params}`)
   } catch (error) {
      return(error.response)
   }
}
// http://localhost:8000/api/product/addcart,data
export const addtocartdata=async(params)=>{
   try {
      
      return await axios.post(`${api}/api/product/addcart`,params)
   } catch (error) {
      return(error.response)
   }
}

