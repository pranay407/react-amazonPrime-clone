import React from "react";
import "./home.scss";
import Header from "../Header/Header";
import SlideShow from "../SlideShow/SlideShow";
import Row from "../Row/Row";
import request from "../../request";

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <SlideShow fetchUrl={request.fetchTrending} />
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
            <Row title="Prime" fetchUrl={request.fetchPrime} />
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
            <Row title="Trending Tv Shows" fetchUrl={request.trendingTv} />
          </div>
        </div>
        <div>
          <div>
            <Row title="Top Rated Tv Shows" fetchUrl={request.topRatedTv} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
