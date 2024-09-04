import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Header() {
  const nav=useNavigate()

  const lgout=()=>{
      sessionStorage.removeItem("userData")
      nav("/")
  }

  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-photo-film fa-beat me-3" style={{color:"#c71a1a"}}></i>
           {' '}
            Media Player
          </Navbar.Brand>
        </Container>
        <button className='btn btn-danger me-4' onClick={lgout}>LogOut</button>
      </Navbar>
    </>
  )
}

export default Header