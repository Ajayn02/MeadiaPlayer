import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { loginApi } from '../services/allApis'
import { toast } from 'react-toastify'

function Login() {

  const [user,setUser]=useState({
    email:"",password:""
  })
  const nav=useNavigate()

  const handleLogin=async()=>{
    // console.log(user);
    const {email,password}=user
    if(!email || !password){
        toast.warning("Enter Valid Inputs!")
    }else{
        const res=await loginApi(email,password)
        // console.log(res)
        if(res.status==200){
          if(res.data.length>0){
            sessionStorage.setItem("userData",JSON.stringify(res.data[0]))
            toast.success("Login Success")
            nav("/home")
            user({email:"",password:""})

          }else{
            toast.error("Invalid email or Password")
          }
        }else{
            toast.error("Something Went Wrong")
        }
        
    }
  }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
      <div className='w-75 border shadow p-5'>
        <h1>Login</h1>
        <input type="text" placeholder='Enter E-mail id' onChange={(e)=>{setUser({...user,email:e.target.value})}} className='form-control mb-3'/>
        <input type="password" placeholder='Enter password' onChange={(e)=>{setUser({...user,password:e.target.value})}} className='form-control mb-3'/>

        <div className='d-flex justify-content-between'>
          <button className='btn btn-success' onClick={handleLogin}>Login</button>
          <Link to={"/reg"}>New user?</Link>
      </div>
      </div>
     
    </div>
    </>
  )
}

export default Login