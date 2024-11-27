import React from 'react'
import Header from './comonComponent/Header'
import Footer from './comonComponent/Footer'
import { Outlet } from 'react-router-dom'
export default function LayoutFrame() {
  return (
    <div>
      <Header />  
        <Outlet />
    <Footer />
    </div>
  )
}
