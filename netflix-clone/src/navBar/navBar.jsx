import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import netflix_icon from "../images/netflixIcon.png";
import styles from "./navBar.module.scss";

function NavBar() {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.subSectionOne}>
          <img className={styles.netflixLogo} src={netflix_icon} alt="logo" />
          <a href="www.href.com">Home</a>
          <a href="www.href.com">TV Shows</a>
          <a href="www.href.com">Movies</a>
          <a href="www.href.com">New & Popular</a>
          <a href="www.href.com">My List</a>
          <a href="www.href.com">Browse by Language</a>
        </div>
        <div className={styles.subSectionTwo}>
          <a href="www.href.com">
            <SearchSharpIcon />
          </a>
          <a href="www.href.com">Children</a>
          <a href="www.href.com">
            <NotificationsOutlinedIcon />
          </a>
          <a href="www.href.com">
            <img
              className={styles.userProfile}
              src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
              alt="User Profile"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
