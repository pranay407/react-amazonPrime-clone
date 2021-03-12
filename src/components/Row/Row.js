import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./row.scss";
import { Link, useHistory } from "react-router-dom";
import Content from "../Content/Content";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      const result = response.data.results;
      //   console.log(result);
      setMovies(result);
      return result;
    }

    fetchData();
  }, [fetchUrl]);
  //   console.table(movies);
  return (
    <div>
      <div className="row">
        <h2 className="title">{title}</h2>
        <div className="cards">
          {movies.length > 0
            ? movies.map((movie) => {
                return (
                  <img
                    key={movie.id}
                    className={`card ${isLargeRow && "large-card"}`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.title}
                    onClick={() => {
                      history.push(`/content/${movie.id}`);
                    }}
                  ></img>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Row;
