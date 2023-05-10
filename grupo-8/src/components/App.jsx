import { useState } from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import '../App.css'

function App() {

  return (
    <>
       <Routes>
        <Route path="api/products/" element={<AllProducts/>} />
        <Route path="api/products/:id" element={<ProductsDetail/>} />
      </Routes>
    </>
  )
}

export default App
