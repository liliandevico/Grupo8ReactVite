import { useEffect, useState } from 'react';

function LastMovieInDb(){
    let [product, setProduct]=useState({})
    useEffect(()=>{
        fetch('http://localhost:3008/api/products/last')
        .then(res=>res.json())
        .then(data=> setProduct(data))
    }, [])


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto en la Base Datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={product.image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{product.description}</p>
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
