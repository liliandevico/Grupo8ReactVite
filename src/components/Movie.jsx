import {Component} from 'react';
import MovieList from './MovieList';

const API = import.meta.env.VITE_API_DRINKS;

class Movie extends Component {
	constructor(){
        super()
        this.state ={
            movies : []
        }
	}
	
	componentDidMount() {
        fetch(API + '/products')
			.then(respuesta => respuesta.json())
			.then(movies => this.setState({ movies: movies}))
			.catch(error => console.log(error))	
		;
	}
	
	render() {
		return (
			<>
				{/*<!-- PRODUCTS LIST -->*/}
				<h1 className="h3 mb-2 text-gray-800">Listado de productos en la Base de Datos</h1>
				
				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Código</th>
										<th>Nombre</th>
										<th>Descripción</th>
										<th>Precio</th>
										<th>Año</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Código</th>
										<th>Nombre</th>
										<th>Descripción</th>
										<th>Precio</th>
										<th>Año</th>
									</tr>
								</tfoot>
								<tbody>
									{
										//console.log(this.state.movies)
										this.state.movies.products?.map((movie,index)=>{
											return <MovieList  {...movie} key={index}  />
										})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default Movie;