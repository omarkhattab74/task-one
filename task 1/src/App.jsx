import React from 'react'
import x from '../src/assets/images/avataaars.svg'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/contact';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/latout/Layout';
import Notdefiened from './components/notdefiened/Notdefiened';


let route=createBrowserRouter([
  {path:"" , element:<Layout/>,children:[
    {index:true ,element:<Home/>},
    {path:"about",element:<About/>},
  {path:"portfolio",element:<Portfolio/>},
  {path:"contact",element:<Contact/>},
  {path:"*",element:<Notdefiened/>}
  ]}
])
export default function App() {

  

  return (
    <>

    <RouterProvider router={route}></RouterProvider>
    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Portfolio/> */}
    {/* <Contact/> */}
    {/* <Footer/> */}
    </>
  )
}
