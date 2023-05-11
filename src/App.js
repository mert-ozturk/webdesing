import React from 'react'
import { createBrowserRouter,RouterProvider,Route, Outlet } from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Write from "./pages/Write"
import "./style.css"
const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/single",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/Login",
    element: <Login/>
  }
])

const App = () => {
  return (
    <div>
      
    <RouterProvider router={router}/>

    </div>
  )
}

export default App