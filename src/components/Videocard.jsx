import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, addHistory } from '../services/allApis';
import { toast } from 'react-toastify';



function Videocard({ video, response, cat }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true)
    const dt = new Date()
    const data = { videoId: video.videoID, title: video.title, url: video.videoUrl, datetime: dt }
    console.log(data)
    const result = await addHistory(data)

  }

  const dragHandler = (e) => {
    // console.log(e)
    // console.log(video)
    e.dataTransfer.setData("video", JSON.stringify(video))

  }


  const handleDelete = async () => {
    const res = await deleteVideo(video.id)
    console.log(res)

    if (res.status == 200) {
      toast.success("Video deleted")
      response(res)
    } else {
      toast.error("Deletion failed")
    }


  }

  return (
    <>
      <Card style={cat ? { width: '100%', marginTop: '50px' } : { width: '18rem', marginTop: '50px' }} onDragStart={(e) => { dragHandler(e) }} draggable>
        <Card.Img onClick={handleShow} variant="top" style={{ cursor: 'pointer' }} src={video.imageUrl} />
        <Card.Body>
          <Card.Title>{video.title}</Card.Title>

          {
           !cat && 
              <Button variant="tertiary" onClick={handleDelete}>
                <i className="fa-solid fa-trash" style={{ color: "#ba1c34", }} />
              </Button>
          }

        </Card.Body>
      </Card>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={video.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard