import { Outlet, Route, Routes } from "react-router-dom"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import Navbar from "./Components/Home/Navbar"
import Home from "./Components/Home/MainPage/Home"
function App() {


  return (
    <>
    <Navbar/>
    <Outlet/>
      {/* <Routes>
        <Route path="/" element={
          <div className="flex justify-center h-[100vh] items-center">
            <Login />
          </div>

        } />
        <Route path="/signup" element={
         <div className="flex justify-center h-[100vh] items-center">
            <Signup />
          </div>
          }/>
          <Route path="/home" element={<Home/>} />
      </Routes> */}


    </>
  )
}

export default App
