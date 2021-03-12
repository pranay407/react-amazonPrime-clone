import React from "react";
import "./header.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <div className="left-header">
            <div className="logoDiv">
              <Link to="/">
                <img
                  alt="logo"
                  src="https://logodownload.org/wp-content/uploads/2018/07/prime-video-1.png"
                ></img>
              </Link>
            </div>
            <div className="links">
              <div className="homeLink">
                <Link to="/">Home</Link>
              </div>
              <div className="moviesLink">
                <Link to="/movies">Movies</Link>
              </div>
              <div className="seriesLink">
                <Link to="/series">Tv Shows</Link>
              </div>
            </div>
          </div>
          <div className="user">
            <AccountCircleIcon className="userLogo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
