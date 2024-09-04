import React,{useState,useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Videos from '../components/Videos'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {

    const [addResponse,setAddResponse]=useState("")
    const [user,setUser]=useState("")

    useEffect(()=>{
      const loginUser=JSON.parse(sessionStorage.getItem("userData"))
      // console.log(loginUser);
      setUser(loginUser?.username)
      
    },[])



  return (
    <>

    <h3 className='text-center my-4'>Welcome {user}</h3>
      <div className='p-4 d-flex justify-content-between'>
        <h2>Videos</h2>
        <Link to={'/his'}>Watch History</Link>

      </div>

      <div className='container-fluid' style={{ overflowX: 'hidden' }}>

        <Row>

          <Col sm={12} md={1}>
            <Addvideos response={setAddResponse} />
          </Col>
          <Col sm={12} md={8}>
            <Videos add={addResponse} />
          </Col>
          <Col sm={12} md={3}>
            <Category />
          </Col>

        </Row>
      </div>
    </>
  )
}

export default Home