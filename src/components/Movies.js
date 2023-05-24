import React from "react";
import { movies } from "../data";




function Movies() {
 const moviesList = movies.map((movie, index)=>{
  return (
    <div key={index} >
      <h1> movie title:{movie.title}</h1>
      <h2> movie time: {movie.time} minutes</h2>
      genre: <ul>{movie.genres.map((genre, index)=>{
     return   <li key={`${index}-${genre}`}>{genre}</li>
      })}
      </ul>
    </div>
  )
 })


  return (
    <div>
<h1> Movie Page</h1>
{moviesList}

    </div>
  )




}
export default Movies
// function Movies() {
//   const moviesDisplay = movies.map((movie) => (
//     <div key={movie.title}>
//       <h3>Name: {movie.title}</h3>
//       <p>Time: {movie.time}</p>
//       Genres:
//       <ul>
//         {movie.genres.map((genre) => (
//           <li key={genre}>{genre}</li>
//         ))}
//       </ul>
//     </div>
//   ));

//   return (
//     <div>
//       {/*{code here}*/}
//       <h1>Movies Page</h1>
//       {moviesDisplay}
//     </div>
//   );
// }

// export default Movies;
