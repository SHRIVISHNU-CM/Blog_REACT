import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Edit() {
    const { id } = useParams()
    const [userData, SetData] = useState({
        _id: id,
        username: "",
        mobile: "",
        password: "",
        email: "",
        header: "",
        description: "",
        important: ""
    })
    const userAPI = `http://localhost:5001/blog/userdata/${id}`
    const updateAPI = `http://localhost:5001/blog/update/${id}`;
    const deleteAPI = `http://localhost:5001/blog/delete/${id}`
    useEffect(() => {
        axios.get(userAPI)
            .then((res) => {
                SetData({
                    ...userData,
                    username: res.data.users.username,
                    email: res.data.users.email,
                    mobile: res.data.users.mobile,
                    password: res.data.users.password,
                    header: res.data.users.header,
                    description: res.data.users.description,
                    important: res.data.users.important
                })
                console.log(res.data.users)
            })
    }, [])
    const HandleUpdate = (e) => {
        e.preventDefault()
        axios.put(updateAPI, userData)
            .then(() => {
                console.log('submitted')
            })
            .catch((e) => console.log(e.message))
    }
    const HandleDelete = (e) => {
        e.preventDefault()
        axios.delete(deleteAPI)
            .then(() => {
                console.log('deleted')
            })
    }
    return (
        <>
            <div>
                <form onSubmit={HandleUpdate}>
                    <label className='input input-bordered flex items-center gap-1'>
                        Name
                        <input
                            value={userData.username}
                            onChange={e => SetData({ ...userData, username: e.target.value })} type='text' />
                    </label>
                    <label className='input input-bordered flex items-center gap-1'>
                        Email
                        <input
                            value={userData.email}
                            onChange={e => SetData({ ...userData, email: e.target.value })}
                            type='text' />
                    </label>
                    <label className='input input-bordered flex items-center gap-1'>
                        Mobile
                        <input
                            value={userData.mobile}
                            onChange={e => SetData({ ...userData, mobile: e.target.value })}
                            type='text' />
                    </label>
                    <label className='input input-bordered flex items-center gap-1'>
                        Name
                        <input type='text' />
                    </label>
                    <div>
                        <textarea
                            value={userData.header}
                            onChange={e => SetData({ ...userData, header: e.target.value })}
                            placeholder='header' className='input input-bordered w-full' />

                    </div>
                    <div>
                        <textarea
                            value={userData.important}
                            onChange={e => SetData({ ...userData, important: e.target.value })} placeholder='imp' className='input input-bordered w-full' />

                    </div>
                    <div>
                        <textarea
                            value={userData.description}
                            onChange={e => SetData({ ...userData, description: e.target.value })} placeholder='des' className='input input-bordered w-full' />

                    </div>
                    
                    <div className='card-actions justify-end'>
                        <button type='submit' className='btn btn-secondary '>Update</button>
                        <button className='btn btn-warning text-white' onClick={HandleDelete}>Delete</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Edit