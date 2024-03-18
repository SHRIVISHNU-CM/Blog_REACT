import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/MainPage/Home.jsx'
const Login = lazy(() => import('./Components/Login/Login.jsx'))
// import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Logout from './Components/Logout/Logout.jsx'
import Loading from './Components/Loading/Loading.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='home' element={
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      } />
      <Route path='signin' element={
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      }

      />
      <Route path='signup' element={
        <Suspense fallback={<Loading />}>
          <Signup />
        </Suspense>
      } />
      <Route path='logout' element={<Logout />} />

    </Route>

  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
