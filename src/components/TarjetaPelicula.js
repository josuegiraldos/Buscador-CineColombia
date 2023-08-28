function TarjetaPelicula({movie1}) {
   return (
      <div className='movie'>
         <div className="year">
            <p>{movie1.Year}</p>
         </div>
         <div>
            <img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"} alt={movie1.Title} width="300px" height="450px" />
         </div>
         <div className="info">
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
         </div>
      </div>
   )
}

export default TarjetaPelicula;