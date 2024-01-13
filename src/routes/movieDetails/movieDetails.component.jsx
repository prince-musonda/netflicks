import "./movieDetails.styles.css";
import "./movieDetails.small.screen.css";
import "./movieDetails.medium.screen.css";
import "./movieDetails.large.screen.css";
import { imageUrlGenerator } from "../../URL-generators/url-genrators";
import { useNavigate, useParams } from "react-router-dom";
import SWR from "swr";
import { memo } from "react";
import { fetchMovieById, fetchMovieTrailer } from "../../fetchers/fetchers";

function MovieDetails() {
  const { movieID } = useParams();
  const navigate = useNavigate();
  const {
    data: movie_details,
    isLoading,
    isError,
    error,
  } = SWR(movieID, fetchMovieById);
  const { data: movieTrailerUrl, isLoading: isFectingTrailerUrl } = SWR(
    "movie trailer url" + movieID,
    () => {
      return fetchMovieTrailer(movieID);
    }
  );
  if (movie_details) {
    return (
      <div className="movie-detail-container">
        <div
          className="hero-section"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie_details.backdrop_path})`,
          }}
        >
          <div className="backdrop"></div>
          <img
            src={imageUrlGenerator(movie_details.poster_path)}
            alt=""
            className="mini-poster"
          />
          <div className="movie-info">
            <h1 className="title">{movie_details.original_title}</h1>
            <h2>{movie_details.tagline}</h2>
            <h3>overview:</h3>
            <p>{movie_details.overview}</p>
            {isFectingTrailerUrl ? (
              <p style={{ color: "red", fontWeight: "bold" }}>Loading ... </p>
            ) : movieTrailerUrl ? (
              <div className="btn-container">
                <button
                  onClick={() => {
                    navigate(`/watch/${movieTrailerUrl}`);
                  }}
                >
                  Watch
                </button>
                {/* download burton */}
                <button>
                  <a
                    href={`https://netflicks-backend.onrender.com/download/${movieTrailerUrl}`}
                  >
                    Download
                  </a>
                </button>
              </div>
            ) : (
              <p className="movie-unavailable">Movie currently unavailble</p>
            )}
          </div>
        </div>
      </div>
    );
  } else if (isLoading) {
    return <p className="loading">Loading</p>;
  } else if (isError) {
    return <p className="loading">Error: {error}</p>;
  }
}

export default memo(MovieDetails);
