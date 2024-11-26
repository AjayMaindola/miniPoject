import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'

let allRoutes=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:'/about-us',
      element:<About/>
    },
    {
      path:'/Product',
      element:<Products/>
    },
    {
      path:'/Product-details/:Pid',
      element:<ProductDetails/>
    },
    {
      path:'/blog',
      element:<Blog/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/contact-us',
      element:<Contact/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={allRoutes} />
  </StrictMode>,
)
