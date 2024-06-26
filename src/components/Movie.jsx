import { RenderForm } from "./RenderForm";
import { DisplayReview } from "./DisplayReview";
import { useEffect, useState } from "react";

import { useDispatch} from "react-redux";
import { addReview } from "../redux/actions/movieActions";

export function Movie({ movie }) {
  const dispatch = useDispatch();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movie?.reviews?.length > 0) {
      setReviews(movie.reviews);
    }
  }, [movie]);

  function reviewAdded(e, reviewText, setComment) {
    e.preventDefault();
    const body = {
      review: {
        description: reviewText,
      },
    };

    fetch(`http://localhost:3000/api/v1/movies/${movie?.mid}/reviews`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "default",
    }).then((response) => {
      if (response.ok) {
        const reviewAdd = {
          id: movie.mid,
          description: reviewText,
        };
        dispatch(addReview(reviewAdd));
        setComment("");
      }
    });
  }

  return (
    <>
      <div className="mt-[5rem] mx-10">
        <div
          key={movie.id}
          className="border rounded-lg p-4 w-full bg-gray-900 text-white shadow-lg mt-4"
        >
          <div className="lg:flex">
            <div className="lg:w-1/3 lg:pr-4 mt-10 lg:ml-5 w-full flex justify-center lg:justify-start">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
                alt={movie.title}
                className="lg:w-full w-2/4 h-auto rounded-lg"
              />
            </div>

            <div
              className="hidden lg:block border-l border-gray-400 ml-20 mt-12"
              style={{ height: "520px" }}
            ></div>

            <div className="lg:w-2/4 pl-4 mt-10 lg:ml-6 md:m-10 sm:m-10">
              <h2
                className="text-center lg:text-left font-bold text-red-600 lg:text-4xl text-2xl lg:mb-8 mb-14"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {movie.title}
              </h2>
              <hr className="lg:hidden mb-14"></hr>


              <p className="text-lg">
                <strong className="mr-1">Original Title:</strong>
                <span className="text-base text-red-400">
                  {" "}
                  {movie.original_title}
                </span>
              </p>
              <p className="text-lg mb-5">
                <strong className="mr-1">Movie Id:</strong>{" "}
                <span className="text-base text-gray-400"> {movie.mid}</span>
              </p>
              <p className="text-lg mb-5">
                <strong className="mr-1">Overview:</strong>{" "}
                <span className="text-base text-gray-400">
                  {" "}
                  {movie.overview}
                </span>
              </p>
              <p className="text-lg">
                <strong className="mr-1">Popularity:</strong>
                <span className="text-base text-gray-400">
                  {" "}
                  {movie.popularity}
                </span>
              </p>
              <p className="text-lg">
                <strong className="mr-1">Budget:</strong>
                <span className="text-base text-gray-400">
                  {" "}
                  ${movie.budget.toLocaleString()}
                </span>
              </p>
              <p className="text-lg">
                <strong className="mr-1">Duration: </strong>
                <span className="text-base text-gray-400">
                  {" "}
                  {movie.duration} min
                </span>
              </p>
              <p className="text-lg">
                <strong className="mr-1">Average vote:</strong>{" "}
                <span className="text-base text-gray-400">
                  {" "}
                  {movie.vote_average}
                </span>
              </p>
              <p className="text-lg">
                <strong className="mr-1">Total vote:</strong>
                <span className="text-base text-gray-400">
                  {" "}
                  {movie.vote_count}
                </span>
              </p>
              <p className="text-lg">
                <strong className="mr-1">Status:</strong>
                <span className="text-base text-gray-400"> {movie.status}</span>
              </p>
              <p className="text-lg mt-2">
                <strong className="mr-1">Release Date:</strong>
                <span className="text-base text-gray-400">
                  {" "}
                  {new Date(movie.release_date).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>


          <div className="lg:m-0 m-10">

          <hr className="lg:m-10 my-10"></hr>

          <p className="mb-5 text-gray-300 lg:ml-10">
            <span className="text-xl text-red-600">Total review: </span>
            {reviews?.length}
          </p>
          <div className="lg:ml-10 lg:flex ">
            <div className="lg:w-[36%] w-5/6 ">
              {reviews?.map((review) => (
                <DisplayReview review={review} key={review?.id} />
              ))}
            </div>

            <div className=" lg:ml-32 lg:mt-[-4rem] mt-10">
              <RenderForm reviewAdded={reviewAdded} />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
