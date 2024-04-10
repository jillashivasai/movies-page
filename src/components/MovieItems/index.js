// MovieItems.js
import React from "react";
import { Link } from "react-router-dom";
import "./movieItems.css";

const MovieItems = ({ movieDetails }) => {
  const { title, rating, posterPath, id } = movieDetails;

  return (
    <li className="li-type">
      <Link to={`/movie/${id}`}>
        <div className="movies">
          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="Movie Poster"
            className="img-widths"
          />
          <div className="center">
            <h2 className="heading2">{title}</h2>
            <h3 className="heading3">Rating: {Math.floor(rating)}</h3>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MovieItems;
