import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import GetAppIcon from "@material-ui/icons/GetApp";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./contenttv.scss";

import axios from "../../axios";
import Header from "../Header/Header";
const base_url = "https://image.tmdb.org/t/p/original/";

function ContentTv() {
  const [Tvs, setTvs] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [seasonNo, setSeasonNo] = useState([]);
  const [season, setSeason] = useState(1);
  const id = useParams();
  const id1 = id.id;

  useEffect(() => {
    async function fetchdata() {
      //fetch tv details
      const res = await axios.get(
        `tv/${id1}?api_key=2710722b3c69704f8be5e746b54b76d2&language=en-US`
      );
      const result = res.data;
      setTvs(result);
      setSeasonNo(
        Array(result.number_of_seasons)
          .fill(0)
          .map((i, k) => k + 1)
      );

      //fetch season detail
      const res2 = await axios.get(
        `tv/${id1}/season/${season}?api_key=2710722b3c69704f8be5e746b54b76d2&language=en-US`
      );
      const result2 = res2.data.episodes;

      setEpisode(result2);
    }
    fetchdata();
  }, [id1, season]);

  const handleChange = (event) => {
    console.log("er", event.target.value);
    setSeason(event.target.value);
  };
  console.log(season);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bannerTv">
        <div className="contentTv">
          <div className="titleTv">
            {Tvs.original_title || Tvs.original_name}
          </div>
          <div className="descTv">{Tvs.overview}</div>

          <div className="infoTv">
            <div className="ratingTv">IMBD:{Tvs.vote_average}</div>
            <div className="tvRunTime">
              Runtime: {Tvs.runtime || Tvs.episode_run_time} Min
            </div>
            <div className="tvDate">
              Release Date: {Tvs.release_date || Tvs.first_air_date}
            </div>
          </div>

          <div className="btns">
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

          <div className="season-btn">
            <FormControl
              variant="filled"
              style={{
                width: "170px",
                backgroundColor: "#E0E0E0",
                borderRadius: "5px",
              }}
            >
              <InputLabel
                id="demo-simple-select-filled-label"
                style={{ color: "black" }}
              >
                Seasons
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={season}
                onChange={handleChange}
              >
                {seasonNo.map((no) => {
                  return <MenuItem value={no}>Season{no}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="banner-imgTv">
          <img
            alt=""
            className="img"
            src={`${base_url}${Tvs.backdrop_path || Tvs.poster_path}`}
          ></img>
        </div>
        <div className="img1"></div>
        <div className="img2"></div>
      </div>

      <div className="content-body">
        <div className="episodes">
          <h2>Episodes</h2>
          {episode
            ? episode.map((ep) => {
                return (
                  <div className="episode">
                    <div className="epi-img">
                      <img alt="" src={`${base_url}${ep.still_path}`} />
                    </div>
                    <div className="epi-desc">
                      <div style={{ fontSize: "18px", fontWeight: "700" }}>
                        {ep.episode_number}. {ep.name}
                      </div>
                      <p>{ep.overview}</p>
                      <div>{ep.air_date}</div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default ContentTv;
