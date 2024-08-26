import React from 'react'

function History() {
  return (
    <>
      <div className='p-5'>
        <h3 className='text-center'>Watch History</h3>

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
          <tbody>
            <tr>
              <td>1</td>
              <td>Heeriye</td>
              <td>https://www.youtube.com/watc/jdjjdjk</td>
              <td>2024-08-24</td>
              <td>
                <button className='btn'>
                <i className="fa-solid fa-trash" style={{color: "#ba1c34",}} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default History