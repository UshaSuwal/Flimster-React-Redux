import { ADD_REVIEW, FETCH_MOVIE_REQUEST } from "../actions/movieActions";

const initialState = {
  movie: [],
};

const movieReducer = (state = initialState, action) => {

  switch(action.type){
    case FETCH_MOVIE_REQUEST :

      return { ...state, movie: action.payload };
      
    
    case ADD_REVIEW :
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
