import { FETCH_MOVIES, GET_DETAILS } from "./types";
import { apiKey } from "../apiKey";

export const fetchMovies = () => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(movies =>
      dispatch({
        type: FETCH_MOVIES,
        payload: movies
      })
    );
};

export const getDetails = movieID => dispatch => {
  fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`)
    .then(res => res.json())
    .then(details =>
      dispatch({
        type: GET_DETAILS,
        payload: details
      })
    );
};

// export const fetchPosts = () => dispatch => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
// };
