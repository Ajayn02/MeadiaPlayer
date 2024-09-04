import React, { useEffect, useState } from 'react'
import { getHistory,deleteHistory } from '../services/allApis'
import { toast } from 'react-toastify'

function History() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    displayHistory()
  }, [])


  const displayHistory = async () => {
    const res = await getHistory()
    // console.log(res)
    if (res.status == 200) {
      setHistory(res.data)
    } else {
      console.log(res)
    }
  }

  const delHistory=async(id)=>{
      const result=await deleteHistory(id)
      // console.log(result);
      if(result.status==200){
        toast.success("History deleted")
        displayHistory()
      }
      else{
        console.log(result)
        
      }
      
  }



  return (
    <>
      <div className='p-5 my-3'>
        <h3 className='text-center'>Watch History</h3>

        {
          history.length>0 ?
          <table className='table table-bodered text-center'>
          <thead>
            <tr>
              <th>Video ID</th>
              <th>Title</th>
              <th>Video URL</th>
              <th>Date And Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {
              history.map(item=>(
                <tr key={item.id}>
                <td>{item.videoId}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.datetime}</td>
                <td>
                  <button className='btn' onClick={()=>{delHistory(item.id)}}>
                    <i className="fa-solid fa-trash" style={{ color: "#ba1c34", }} />
                  </button>
                </td>
              </tr>
              ))
            }
                
          </tbody>
        </table>
        :
        <h5 className='text-danger text-center my-4'>No History Available</h5>
        }

        
      </div>
    </>
  )
}

export default History