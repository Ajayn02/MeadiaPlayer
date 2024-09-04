import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className='container-fluid d-flex align-items-center' style={{ height: '80vh' }}>
        <Row>
          <Col className='p-5' sm={12} md={6}>
            <h2 className='pt-3'>
              <i className="fa-solid fa-photo-film me-3" style={{ color: "#c71a1a" }}></i>
              Media Player 2024</h2>
            <p style={{ textAlign: "justify" }} className='pt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, facilis, vero nostrum dolorem culpa impedit quo rerum commodi asperiores distinctio quas voluptas delectus unde natus quasi sed voluptatibus, repudiandae dicta.</p>
            <div className='d-grid'>
              <Link to={'/log'} className='btn btn-success'>Let's Go</Link>
            </div>
          </Col>
          <Col className='p-5' sm={12} md={6}>
            <img src="https://media.istockphoto.com/id/1223365194/vector/hands-with-smartphones.jpg?s=612x612&w=0&k=20&c=U882QpMsgzhMQS7TeUtwSYOGMbJFjUwQ9M8OodFrSkI=" alt="introimage" className='image-fluid rounded' style={{ width: '100%' }} />
          </Col>
        </Row>
      </div>

      <div className='container-fluid my-5'>
        <h3 className='text-center my-3'>Features</h3>
        <div className='d-flex justify-content-around'>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn-icons-gif.flaticon.com/6172/6172536.gif" />
            <Card.Body>
              <Card.Title>Upload Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/e3/10/6b/e3106b678b0d99327062454871555a48.gif" />
            <Card.Body>
              <Card.Title>Add Categories</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/26599/screenshots/1293038/youtube-encoding.gif" />
            <Card.Body>
              <Card.Title>Upload Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='p-5'>
        <Row>
          <Col sm={12} md={7}>
            <h4>Simple And Faster</h4>
            <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, laborum dolor commodi, cum numquam blanditiis pariatur quod iste ducimus ab autem eveniet itaque, quos dolorum et voluptatum assumenda repudiandae necessitatibus!</p>
          </Col>
          <Col sm={12} md={5}>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/8pKjULHzs0s" title="React Bootstrap Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing