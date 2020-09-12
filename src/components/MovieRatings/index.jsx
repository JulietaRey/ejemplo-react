import React, {
  // useState, useEffect
} from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Favorite from "@material-ui/icons/Favorite";
import "./index.scss";
import Movie from "../Movie";

// const MovieRatings = () => {
//   const [movies, setMovies] = useState([]);
//   const fetchMovies = () => {
//     fetch(`${process.env.REACT_APP_API_PATH}s=avengers&page=2`)
//       .then((res) => res.json())
//       .then((response) => {
//         setMovies(response.Search);
//         console.log(response);
//       });
//   };

//   useEffect(() => fetchMovies(), []);

//   return (
//     <div className="movies">
//       <div>
//         <h1>
//           Amazing Movie Finder <Favorite color="primary" fontSize="large" />{" "}
//         </h1>
//       </div>
//       <div className="input-container">
//         <TextField
//           fullWidth
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton>
//                   <Search />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </div>
//       {/* <div className="movie-container">
//         {movies.map((movie) => (
//           <Card key={movie.imdbId}>
//             <CardMedia className="image" image={movie.Poster} />
//             <CardContent>
//               <h2>{movie.Title}</h2>
//               <Rating value={null} max={10}/>
//             </CardContent>
//           </Card>
//         ))}
//       </div> */}
//     </div>
//   );
// };

class MovieRatings extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      search: '',
    };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Se montó')
    
  }

  componentDidUpdate() {
    console.log('Component did update')
  }

  updateField = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  searchMovies = () => {
    fetch(`${process.env.REACT_APP_API_PATH}s=${this.state.search}`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          movies: response.Search,
        });
        console.log(response);
      });
  }

  render() {
    console.log('renderizando');
    return (
      <div className="movies">
        <div>
          <h1>
            Amazing Movie Finder <Favorite color="primary" fontSize="large" />
          </h1>
        </div>
        <div className="input-container">
          <TextField
            fullWidth
            value={this.state.search}
            onChange={this.updateField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={this.searchMovies}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="movie-container">
          {this.state.movies.map((movie) => (
            <Movie data={movie} />
          ))}
        </div>
      </div>
    )
  }
}

export default MovieRatings;
