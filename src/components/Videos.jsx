import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideos } from '../services/allApis'

function Videos({add}) {

  const [videos, setVideos] = useState([])

  const [delResponse,setDelResponse]=useState("")

  useEffect(() => {
    getData()
  },[add,delResponse] )


  const getData = async () => {
    const res = await getVideos()
    console.log(res)
    if (res.status == 200) {
      setVideos(res.data)
    }
    else {
      console.log(res)

    }
  }

  return (
    <>
      <div className='  border border-3 shadow mb-3 p-5'>
        {
          videos.length > 0 ?

            <Row>
              {
                videos.map(item=>(

                  <Col key={item.id}>
                  <Videocard  video={item} response={setDelResponse} />
                  </Col>

                ))
                

              }
              
            </Row>
            :
            <h2 className='text-center text-danger'>No videos available</h2>
          }

      </div>
    </>
  )
}

export default Videos