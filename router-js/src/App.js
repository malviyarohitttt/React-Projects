import React from 'react'
import Home from './pages/Home'
import {Routes,Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import Product from './pages/Product'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/products' element={<Product/>}/>
    </Routes>
    </>
  )
}
