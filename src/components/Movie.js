// import { useState, useEffect } from "react";
// const Movie = () => {
//   useEffect(()=>{
    
//   })
//   const [images, setImages] = useState([]);
//   const apiKey = "R5on-EY7I1IwUEJOyZaRI2sTAF5clV4DPyobE7Ou3F8";
//   const apiURL = "https://api.unsplash.com/photos";

//   fetch(apiURL, {
//     headers: {
//       Authorization: `Client-ID ${apiKey}`,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data)
//       setImages(data)
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   return (
//     <>
//       <h1>Movies page</h1>
//       <div className="box">
//         {images }
//         <div className="movie-box">
//           <img src="image.url.regular" alt="image.url.description"></img>

//         </div>
        
//       </div>
//     </>
//   );
// };
// export default Movie;
