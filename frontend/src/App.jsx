import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import Navbar from "./Components/Home/Navbar"
function App() {


  return (
    <>
      <Routes>
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
          <Route path="/home" element={<Navbar/>} />
      </Routes>


    </>
  )
}

export default App
