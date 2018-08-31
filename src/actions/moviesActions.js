import { FETCH_MOVIES, GET_DETAILS, SEARCH_MOVIES } from "./types";
import { apiKey } from "../apiKey";

export const fetchMovies = page => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
  )
    .then(res => res.json())
    .then(movies =>
      dispatch({
        type: FETCH_MOVIES,
        payload: movies
      })
    );
};

export const searchMovies = query => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  )
    .then(res => res.json())
    .then(movies =>
      dispatch({
        type: SEARCH_MOVIES,
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
