import React from "react";
import Header from "../Header/Header";
import SlideShow from "../SlideShow/SlideShow";
import request from "../../request";
import RowTv from "../RowTv/RowTv";

function Series() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <SlideShow fetchUrl={request.popularTv} />
      </div>
      <div className="movieList">
        <div>
          <div>
            <RowTv
              title="Top Rated"
              fetchUrl={request.topRatedTv}
              isLargeRow={true}
            />
          </div>
        </div>

        <div>
          <div>
            <RowTv title="Popular" fetchUrl={request.popularTv} />
          </div>
        </div>
        <div>
          <div>
            <RowTv title="On Air" fetchUrl={request.onairTv} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Series;
