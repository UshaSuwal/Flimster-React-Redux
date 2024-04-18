import { ADD_REVIEW, FETCH_MOVIE_REQUEST } from "../actions/movieActions";

const initialState = {
  movie: [],
};

const movieReducer = (state = initialState, action) => {
  if (action.type === FETCH_MOVIE_REQUEST) {
    return { ...state, movie: action.payload };
  } else if (action.type === ADD_REVIEW) {
    return {
      ...state,
      movie: state.movie.map((m) =>
        m.mid === action.payload.id
          ? {
              ...m,
              reviews: [...m.reviews, action.payload],
            }
          : m
      ),
    };
  }
};
export default movieReducer;
