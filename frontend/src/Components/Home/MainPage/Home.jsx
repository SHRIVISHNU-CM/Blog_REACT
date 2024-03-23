import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
      {Data.map((el, i) => {
        return (
          <div key={i} className='collapse bg-base-100 w-[400px] my-3'>
            <input type='checkbox' className='peer' />
            <div className='collapse-title bg-primary-content text-primary peer-checked:bg-secondary'>
              {el.header}
            </div>
            <div className='collapse-content bg-primary-content text-primary peer-checked:bg-secondary-content peer-checked:text-secondary p-4'>
              <p>{el.important}</p>
              <div className='card-actions justify-end'>
                <a href="#my_modal_8" className='btn btn-secondary btn-circle'>
                  Edit
                </a>

                
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog" id="my_modal_8">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hi! {el.username}</h3>
                    <p className="py-4">Ready to Update your tasks?</p>

                    <div className="modal-action">
                        <Link className='btn btn-secondary btn-circle'  to={`/edit/${el._id}`}>Go</Link>
        
                    </div>
                </div>
            </div>
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