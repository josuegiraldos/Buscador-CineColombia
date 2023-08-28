import "./assets/App.css";
import React from 'react';
import { useState, useEffect } from 'react';
import imagenBuscador from "./assets/buscador.svg";
import TarjetaPelicula from "./components/TarjetaPelicula";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=bad2af0d";

function App() {
   const [movies, setMovies] = useState([]);
   const [busquedaParam, setBusquedaParam] = useState('');
   const buscadorCine = async (titulo) => {
      try {
         const response = await fetch(`${API_URL}&s=${titulo}`);
         const data = await response.json();
         setMovies(data.Search);
      } catch (error) {
         console.log(error);
      }
   }
   useEffect(() => {
      buscadorCine('piece');
   }, []);

   return (
      <div className='app'>
         <h1>Cine colombia</h1>
         <div className='busqueda'>
            <input placeholder='Buscador de peliculas' value={busquedaParam} onChange={(e) => setBusquedaParam(e.target.value)} />
            <img src={imagenBuscador} alt='Buscar' onClick={() => buscadorCine(busquedaParam)} />
         </div>

         {movies?.length > 0 ? (
            <div className='contenedor'>
               {
                  movies.map((movie) => {
                     return (
                        <TarjetaPelicula movie1={movie} />
                     )
                  })
               }
               </div>
         ) : (
            <div className="empty">
               <h2>No se encontraron peliculas</h2>
            </div>
            )
         }
      </div>
   )
};

export default App;