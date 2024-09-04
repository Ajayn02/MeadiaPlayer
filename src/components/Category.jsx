import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../services/allApis.js'
import CategoryList from './CategoryList.jsx';




function Category() {

  const [Category,setCategory]=useState({
      categoryId:"",title:"",video:[]
  })

  const [data,setData]=useState("")

  const [show, setShow] = useState(false);

  

  const handleCategory=async()=>{
      // console.log(Category)
      const {categoryId,title}=Category
      if(!categoryId || !title){
        toast.warning("Invalid input")
      }else{
          const res=await addCategory(Category)
          // console.log(res)
          if(res.status==201){
            toast.success("Category Added!!")
            handleClose()
            setCategory({categoryId:"",title:"",video:[]})
            setData(res)
          }else{
            toast.error("Category Adding Failed!!")
          }
          
      }
      
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='p-2 d-grid'>
        <button onClick={handleShow} className='btn btn-success'>Add Category</button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FloatingLabel controlId="cID" label="Category ID" className="mb-3">
              <Form.Control type="number" placeholder="" onChange={(e)=>{setCategory({...Category,categoryId:e.target.value})}} />
            </FloatingLabel>
            <FloatingLabel controlId="ctitle" label="Category Title" className="mb-3">
              <Form.Control type="text" placeholder="" onChange={(e)=>{setCategory({...Category,title:e.target.value})}} />
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleCategory}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>

      <CategoryList val={data}/>

    </>
  )
}

export default Category