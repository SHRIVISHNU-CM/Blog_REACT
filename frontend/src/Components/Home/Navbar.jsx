import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
  const LogoutApi = 'http://localhost:5001/blog/logout'

  const HandleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark')

    } else {
      setTheme('light')
    }
  }
  const handelLogout = ()=>{
    axios.get(LogoutApi)
    .then(()=>{
      console.log('logout Successfull')
    })
    .catch((e)=>console.log(e.message))
  }
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])
  return (
    <>
      <div className='navbar bg-base-100 shadow-md'>
        <div className='navbar-start '>
          <div className="dropdown">

            <details >
              <summary role='button' className='btn btn-circle btn-ghost md:hidden lg:hidden'>View</summary>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 z-[1] shadow-md bg-base-100 rounded-box w-52">
                <li><Link to='/signin'>Login</Link></li>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
              </ul>
            </details>

          </div>

          <ul className='menu  hidden md:menu-horizontal z-[2]'>
            <li>
              <Link to='/signin'>Login</Link>

            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className='p-2'>
                  <li><Link to='/signin'>Login</Link></li>
                  <li><Link to='/logout' onClick={handelLogout}>Logout</Link></li>
                  <li><Link to='/home'>Home</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <Link to='/new'>Add Note</Link>
              </li>

          </ul>


        </div>
        <div className='navbar-center'>
          <h1>PersonalNote</h1>
        </div>
        <div className='navbar-end'>
          <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={HandleToggle} checked={theme === "light" ? false : true} />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
        </div>


      </div>
    </>
  )
}

export default Navbar