import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import { addVideos } from '../services/allApis.js'
import { toast } from 'react-toastify';



function Addvideos({response}) {

  const [show, setShow] = useState(false);
  const handleClose = () =>{ 
    setShow(false);
    Setvideo({
      videoID: "", title: "", imageUrl: "", videoUrl: ""
    } )
  }
  const handleShow = () => setShow(true);

  const [video, Setvideo] = useState({
    videoID: "", title: "", imageUrl: "", videoUrl: ""
  })


  const handleUpload = async () => {
    console.log(video)

    const { videoID, title, imageUrl, videoUrl } = video
    if (!videoID || !title || !imageUrl || !videoUrl) {
      // alert("Please Enter Valid Input")
      toast.warning("Please Enter Valid Input ")
    }
    else {
      try {
        const vurl = videoUrl.split("v=")[1]
        // console.log(vurl);
        const eurl = `https://www.youtube.com/embed/${vurl}?si=RJV4KaqERgxE_sgS&autoplay=1`
        // console.log(eurl);
        video.videoUrl=eurl
        const res = await addVideos(video)
        // console.log(res)
        // alert("Upload successfull")
        toast.success("Upload Successfull!!")
        handleClose()
        response(res)
      }
      catch (err) {

        console.log(err);
        // alert("Upload failed")
        toast.error("Upload failed")
      }

    }
  }


  return (
    <>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-square-plus fa-2x" style={{ color: "#FFD43B", }} />
      </button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title >Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel
            controlId="floatingID" label="Video ID" className="mb-3">
            <Form.Control type="number" placeholder="1" onChange={(e) => { Setvideo({ ...video, videoID: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3">
            <Form.Control type="text" placeholder="" onChange={(e) => { Setvideo({ ...video, title: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="imgurl" label="Video Image URL" className="mb-3">
            <Form.Control type="text" placeholder="" onChange={(e) => { Setvideo({ ...video, imageUrl: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="vidoeurl" label="Youtube Video URL" className="mb-3">
            <Form.Control type="text" placeholder="" onChange={(e) => { Setvideo({ ...video, videoUrl: e.target.value }) }} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Addvideos