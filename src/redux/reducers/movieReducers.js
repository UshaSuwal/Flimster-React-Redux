import { FETCH_MOVIE_REQUEST } from "../actions/movieActions";

const initialState = {
  movie: [],
};

const movieReducer = (state = initialState, action) => {
  
  if (action.type === FETCH_MOVIE_REQUEST) {
    return { ...state, movie: action.payload };

  } 
  
};
export default movieReducer;
