import axios from 'axios'
import { checkLocalServer } from './serverChecker';
const api = await checkLocalServer();
const ACCESSTOKEN=localStorage.getItem('access-token')

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


export const getCart=async(params)=>{
   try {
      return await axios.get(`${api}/api/user/getcart/${params}`)
   } catch (error) {
      
   }
}


// http://localhost:8000/api/product/addcart,data
export const addtocartdata=async(cartId,product_id)=>{
   try {
      return await axios.put(`${api}/api/user/addcart/${cartId}`,{product_id})
   } catch (error) {
      return(error.response)
   }
}


// delete cart item
export const deleteCart=async(cartId,product_id)=>{
   try {
      // console.error(`${api}/api/user/deletecart/${cartId}`)
      return await axios.put(`${api}/api/user/deletecart/${cartId}`,{product_id})
   } catch (error) {
      
   }
}

// redirect a user when open website
// http://localhost:8000/api/auth/redirect,{token body}
export const redirect=(token)=>{
   try {
      return  axios.post(`${api}/api/auth/redirect`,{token})
   } catch (error) {
      
   }
}

// http://localhost:8000/api/user/addaddress,{addresslist, body}
export const addAddress=async(id,data,method)=>{
   try {
      if(method==='post'){
         return await axios.post(`${api}/api/user/addaddress/${id}`,data)
      }
      return await axios.put(`${api}/api/user/updateaddress/${id}`,data)
    } catch (error) {
       // console.error(error.response)     /*This code is for developer only*/
       return(error.response)
    }
}

// http://localhost:8000/api/user/updateaddress,{addresslist, body}
export const udateAddress=async(id,data,method)=>{
   
   try {
      console.log(method)
      // return await axios.put(`${api}/api/user/updateaddress/${id}`,data)
    } catch (error) {
       // console.error(error.response)     /*This code is for developer only*/
       return(error.response)
    }
}


// http://localhost:8000/api/user/getaddress,{addresslist}
export const getAddress=async(id)=>{
   try {
      return await axios.get(`${api}/api/user/getaddress/${id}`)
    } catch (error) {
       // console.error(error.response)     /*This code is for developer only*/
       return(error.response)
    }
}

export const imageupload=async(image)=>{
   try {
    return await axios.post(`${api}/api/image/upload`,image)  
   } catch (error) {
      return (error)
   }
}
export const addproduct=async(data)=>{
   const customHeaders = {
      'Authorization': ACCESSTOKEN,
   }
   try {
   //  return await axios.post(`${api}/api/product/addproduct`,data,customHeaders)  
    return await axios.post(`${api}/api/product/addproduct`, data, { headers: customHeaders }); //This is working 
   } catch (error) {
      return (error)
   }
}