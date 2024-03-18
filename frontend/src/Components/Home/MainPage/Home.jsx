import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
  const [Data, SetData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5001/blog/data')
      .then((res) => {
        console.log(res.data.user)
        SetData(res.data.user)
      })
  }, [])



  return (
    <>
      {Data.map((el,i)=>{
        return(
          <div key={i} className='collapse bg-base-100 w-[400px] my-3'>
        <input type='checkbox' className='peer' />
          <div className='collapse-title bg-primary-content text-primary peer-checked:bg-secondary'> 
            {el.username}
          </div>
          <div className='collapse-content bg-primary-content text-primary peer-checked:bg-secondary-content peer-checked:text-secondary p-4'>
          <p>{el.email}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-secondary btn-circle'>Edit</button>
            <button className='btn btn-warning btn-circle text-white'>Delete</button>
          </div>

          </div>

        </div>
        )
      })
        
      }


    </>
  )
}

export default Home