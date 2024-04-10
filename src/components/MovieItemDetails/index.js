import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieItemDetails.css";
import Header from "../Header";

export default function MovieItemDetails({ posterPath }) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);

  const Api_key = "a4e20e942349b3ba8a41b5bddcedd322";
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`;
  const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(movieDetailsUrl);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id, movieDetailsUrl]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(castUrl);
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    };

    fetchCast();
  }, [id, castUrl]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
      <div className="text-centers">
          <Header/>
      <div className="about-container ">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt="poster"
            className="poster"
          />
        </div>
        <div className="about">
          <h2>{movieDetails.title}</h2>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <p>Rating: {movieDetails.vote_average}</p>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Duration: {movieDetails.runtime} minutes</p>
        </div>
      </div>
      <h1>Cast</h1>
      <ul className="d-flex justify-content-center cast-container">
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <span>{actor.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
