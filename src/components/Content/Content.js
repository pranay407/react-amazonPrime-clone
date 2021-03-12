import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./content.scss";

import axios from "../../axios";
import Header from "../Header/Header";
const base_url = "https://image.tmdb.org/t/p/original/";
function Content() {
  const [movies, setMovies] = useState([]);
  const id = useParams();
  const id1 = id.id;

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(
        `movie/${id1}?api_key=2710722b3c69704f8be5e746b54b76d2&language=en-US`
      );
      const result = res.data;
      setMovies(result);
      console.log(result);
      return result;
    }
    fetchdata();
  }, [id.id]);
  console.log(movies.backdrop_path);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <img src={`${base_url}${movies.backdrop_path}`} />
      </div>
    </div>
  );
}

export default Content;
