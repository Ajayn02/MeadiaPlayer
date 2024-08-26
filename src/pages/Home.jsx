import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Videos from '../components/Videos'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='p-4 d-flex justify-content-between'>
        <h2>Videos</h2>
        <Link to={'/his'}>Watch History</Link>

      </div>

      <div className='container-fluid' style={{ overflowX: 'hidden' }}>

        <Row>

          <Col sm={12} md={1}>
            <Addvideos />
          </Col>
          <Col sm={12} md={8}>
            <Videos />
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