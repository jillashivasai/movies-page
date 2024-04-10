import React, { useEffect, useState } from "react";
import Header from "../Header";
import MovieItems from "../MovieItems";
import MovieItemDetails from "../MovieItemDetails";
import "./home.css";

export default function Home() {
  const [movies, setMoviesList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    renderMovies();
  }, []);

  const searchRes = (value) => {
    const found = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(found);
  };

  const renderMovies = async () => {
    const apiKey = "a4e20e942349b3ba8a41b5bddcedd322";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGUyMGU5NDIzNDliM2JhOGE0MWI1YmRkY2VkZDMyMiIsInN1YiI6IjY2MTRkZWU2YWM2MTdjMDE2NGIxNjZjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.16jPEnOlDskcgULxYzt-hHEztPm4w-tXi6yofXtPtG0",
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const formattedData = data.results.map((eachItem) => ({
        posterPath: eachItem.poster_path,
        title: eachItem.title,
        rating: eachItem.vote_average,
        id: eachItem.id,
      }));
      setMoviesList(formattedData);
      setFilteredMovies(formattedData); // Set filteredMovies initially with all movies
    } catch (error) {
      console.error("Error while fetching : ", error);
    }
  };

  return (
      <>
      <Header getSearch={searchRes} />
      <ul className="ul-flex">
        {filteredMovies.map((eachItem) => (
          <MovieItems key={eachItem.id} movieDetails={eachItem} />
        ))}
      </ul>
    </>
  );
}
