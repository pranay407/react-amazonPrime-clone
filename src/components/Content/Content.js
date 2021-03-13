import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import GetAppIcon from "@material-ui/icons/GetApp";
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
  }, [id1]);
  console.log(movies.backdrop_path);
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="bannerM">
        <div className="contentM">
          <div className="titleM">
            {movies.original_title || movies.original_name}
          </div>
          <div className="descM">{movies.overview}</div>

          <div className="infoM">
            <div className="ratingM">IMBD:{movies.vote_average}</div>
            <div className="RunTimeM">
              Runtime: {movies.runtime || movies.episode_run_time} Min
            </div>
            <div className="DateM">
              Release Date: {movies.release_date || movies.first_air_date}
            </div>
          </div>

          <div className="btnsM">
            <Button variant="contained">
              <PlayArrowIcon /> Watch Trailer
            </Button>
            <Button variant="contained">
              <AddIcon /> Add To Watchlist
            </Button>
            <Button variant="contained">
              <GetAppIcon /> Download
            </Button>
          </div>
        </div>
        <div className="banner-imgM">
          <img
            alt=""
            className="imgM"
            src={`${base_url}${movies.backdrop_path || movies.poster_path}`}
          ></img>
        </div>
        <div className="img1M"></div>
        <div className="img2M"></div>
      </div>
    </div>
  );
}

export default Content;
