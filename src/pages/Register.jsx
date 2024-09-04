import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkEmailApi,registerApi } from '../services/allApis'



function Register() {

    const [user,setUser]=useState({
      email:"",username:"",password:""
    })

    const nav=useNavigate()

    const handleRegister=async()=>{
      // console.log(user);
      const {email,username,password}=user
      if(!username || !password || !email){
          toast.warning("please enter valid inputs")
      }else{
          const result=await checkEmailApi(email)
          // console.log(result);
          if(result.data.length>0){
            toast.warning("email id already in use !!")
          }else{
            const res=await registerApi(user)
            if(res.status==201){
              toast.success("success")
              nav("/log")
              user({email:"",username:"",password:""})
            }else{
              toast.error("Registration Failed !!")
              console.log(res)
              
            }
          }
          
      }

    }


  return (
    <>
     <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
      <div className='w-75 border shadow p-5'>
        <h1>Register</h1>
        <input type="text" placeholder='Enter Username' onChange={(e)=>{setUser({...user,username:e.target.value})}} className='form-control mb-3'/>
        <input type="text" placeholder='Enter E-mail id' onChange={(e)=>{setUser({...user,email:e.target.value})}}className='form-control mb-3'/>
        <input type="password" placeholder='Enter password' onChange={(e)=>{setUser({...user,password:e.target.value})}}className='form-control mb-3'/>

        <div className='d-flex justify-content-between'>
          <button className='btn btn-success' onClick={handleRegister} >Register</button>
          <Link to={"/log"}>Already have accound?</Link>
      </div>
      </div>
     
    </div>
    </>
  )
}

export default Register