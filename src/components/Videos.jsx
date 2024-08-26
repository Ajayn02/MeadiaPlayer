import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from './Videocard'

function Videos() {
  return (
    <>
        <div className='  border border-3 shadow mb-3 p-5'>
            <Row>
                <Col>
                    <Videocard/>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Videos