import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

// class Movie extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       info: {},
//     }
//   }

//   componentDidMount() {
//     const { data } = this.props;
//     fetch(`${process.env.REACT_APP_API_PATH}i=${data.imdbID}`)
//       .then((res) => res.json())
//       .then((response) => {
//         this.setState({
//           info: response,
//         })
//         console.log(response);
//       });
//   }

//   componentWillUnmount() {
//     console.log('Me voy a desmontar, soy ', this.props.data.Title)
//   }

//   render() {
//     const { data } = this.props;
//     return (
//       <Card key={data.imdbID}>
//         <CardMedia className="image" image={data.Poster} />
//         <CardContent>
//           <h2>{data.Title}</h2>
//           <Rating value={+this.state.info.imdbRating} max={10} />
//         </CardContent>
//       </Card>
//     );
//   }
// }

// export default Movie;

const Movies = (props) => {
  const [info, setInfo] = useState({});
  const [miRating, setMiRating] = useState(null);
  const { data } = props;

  useEffect(() => {
    const searchInfo = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_PATH}i=${data.imdbID}`
      );
      setInfo(await res.json());
    };
    searchInfo();
  }, [data.imdbID]);

  return (
    <Card key={data.imdbID}>
      <CardMedia className="image" image={data.Poster} />
      <CardContent>
        <h2>{data.Title}</h2>
        <Rating value={+info.imdbRating} max={10} />
        <Rating
          value={miRating}
          onChange={(event, newValue) => {
            setMiRating(newValue);
          }}
          max={10}
        />
      </CardContent>
    </Card>
  );
};

export default Movies;
