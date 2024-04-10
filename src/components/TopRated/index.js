import React, { useEffect, useState } from "react";
import "./toprated.css";
import Header from "../Header";

export default function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const apiKey = "a4e20e942349b3ba8a41b5bddcedd322";
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setTopRatedMovies(data.results);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
      <div className="align-center">
          <Header/>
      <h1>Top Rated Movies</h1>
      <div className="container">
        {topRatedMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
