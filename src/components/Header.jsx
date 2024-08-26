import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
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
      </Navbar>
    </>
  )
}

export default Header