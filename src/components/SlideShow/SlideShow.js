import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./slideshow.scss";

function SlideShow({ fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      const res =
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ];
      console.log(res);
      setMovies(res);
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movies.backdrop_path}")`,
          backgroundPosition: "center",
          opacity: "0.8",
        }}
      >
        <div className="banner-contents">
          <h1>{movies?.name || movies.original_title}</h1>
          <div className="banner-desc">{movies?.overview}</div>
        </div>
      </header>
    </>
  );
}

export default SlideShow;
