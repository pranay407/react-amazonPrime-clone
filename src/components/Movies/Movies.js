import React from "react";
import Header from "../Header/Header";
import SlideShow from "../SlideShow/SlideShow";
import Row from "../Row/Row";
import request from "../../request";

function Movies() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <SlideShow fetchUrl={request.trendingMovies} />
      </div>
      <div className="movieList">
        <div>
          <div>
            <Row
              title="Weekly Trending"
              fetchUrl={request.trendingAllWeek}
              isLargeRow={true}
            />
          </div>
        </div>

        <div>
          <div>
            <Row title="Action" fetchUrl={request.fetchActionMovies} />
          </div>
        </div>
        <div>
          <div>
            <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
          </div>
        </div>
        <div>
          <div>
            <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
          </div>
        </div>
        <div>
          <div>
            <Row title="Sci-Fi" fetchUrl={request.fetchSciFi} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
