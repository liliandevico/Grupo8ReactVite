import { useState } from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import '../App.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="panel">
        <h2>Total de Productos</h2>
        {/* Aquí va el contenido para mostrar el total de productos */}
      </div>
      <div className="panel">
        <h2>Total de Usuarios</h2>
        {/* Aquí va el contenido para mostrar el total de usuarios */}
      </div>
      <div className="panel">
        <h2>Total de Categorías</h2>
        {/* Aquí va el contenido para mostrar el total de categorías */}
      </div>
      <div className="panel">
        <h2>Último Producto Creado</h2>
        {/* Aquí va el contenido para mostrar los detalles del último producto creado */}
      </div>
      <div className="panel">
        <h2>Categorías y Total de Productos</h2>
        {/* Aquí va el contenido para mostrar las categorías y el total de productos de cada una */}
      </div>
      <div className="panel">
        <h2>Listado de Productos</h2>
        {/* Aquí va el contenido para mostrar el listado de productos */}
      </div>
    </div>
  );
}
function App() {

  return (
    <>
       <Routes>
        <Route path="api/products/" element={<AllProducts/>} />
        <Route path="api/products/:id" element={<ProductsDetail/>} />
        <Route path="api/users/" element ={<Users/>} />
      </Routes>
    </>
  )
}


export default App;














