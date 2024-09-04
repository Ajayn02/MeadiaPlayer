import React, { useEffect, useState } from 'react'
import { getCategory, deleteCategory, updateCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import Videocard from './Videocard'

function CategoryList({ val }) {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getData()

    }, [val])

    const getData = async () => {
        const res = await getCategory()
        // console.log(res)
        if (res.status == 200) {
            setCategoryList(res.data)
        }

    }

    const deleteCat = async (id) => {
        const result = await deleteCategory(id)
        // console.log(result)
        if (result.status == 200) {
            getData()
        }

    }

    const dropHandler = async (e, category) => {
        // console.log(e)
        const vid = JSON.parse(e.dataTransfer.getData("video"))
        // console.log(vid);
        category.video.push(vid)
        const result = await updateCategory(category.id, category)
        // console.log(result)
        if (result.status == 200) {
            toast.success(`${vid.title} video added to ${category.title}`)
            getData()
        } else {
            toast.error("video-category adding failed")
        }

    }


    const dragOverHandler = (e) => {
        // console.log(e)
        e.preventDefault()
    }


    return (
        <>
            <div className='border border-light border-3 p-2 mt-3'>
                {
                    categoryList.length > 0 ?
                        <div>
                            {
                                categoryList.map(item => (
                                    <div key={item.id} className='border'>
                                        <div  className=' m-2 p-3 mb-3 d-flex justify-content-between' onDrop={(e) => { dropHandler(e, item) }} onDragOver={(e) => { dragOverHandler(e) }}>
                                            <h5>{item.title}</h5>
                                            <button className='btn btn-tertiary' onClick={() => { deleteCat(item.id) }}>
                                                <i className="fa-solid fa-trash" style={{ color: "#ba1c34" }} />
                                            </button>
                                        </div>
                                        <div className='boder border-light'>
                                            {
                                                item?.video?.length>0 &&
                                                <>
                                                {
                                                    item?.video?.map(vid=>(
                                                        <Videocard key={item.id} video={vid} cat={true}/>
                                                    ))
                                                }
                                                </>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <h5>No Categories</h5>
                }
            </div>
        </>
    )
}

export default CategoryList