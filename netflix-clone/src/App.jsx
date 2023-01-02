import axios from "axios";
import NavBar from "./navBar/navBar";
import { CarouselSlides } from "./carousel/carouselSlide";
import styles from "./App.module.scss";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [items01, setItems01] = useState([]);

  useEffect(() => {
    console.log("hey");
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3fd1930d13b349e3f76f66fb63556abc&language=en-US"
      )
      .then((response) => {
        const item = [];
        response.data.results.map((film) =>
          item.push({
            video: film.video,
            src_path: `https://image.tmdb.org/t/p/original${film.backdrop_path}`,
          })
        );
        console.log(item);
        setItems(item);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=3fd1930d13b349e3f76f66fb63556abc&with_networks=213"
      )
      .then((response) => {
        const item = [];
        response.data.results.map((film) =>
          item.push({
            video: film.video,
            src_path: `https://image.tmdb.org/t/p/original${film.poster_path}`,
          })
        );
        console.log(item);
        setItems01(item);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.selectedMovie}>
        <div className={styles.selectedMovieImg}>
          <img
            src="https://netflixjunkie.com/wp-content/uploads/2021/05/moneyheists5-1140x600.jpg"
            alt="Movie Poster"
          />
        </div>
        <h1 className={styles.filmLogo}>MONEY HEIST </h1>
        <h6 className={styles.filmDescription}>
          When millions of euros and their lives on the line, nine robbers
          attempt to pull the greatest heist of all time.
        </h6>

        <div className={styles.btnGroup}>
          <button className={styles.playBtn}>
            <PlayArrowRoundedIcon sx={{ fontSize: "40px" }} />
            <h4>Play</h4>
          </button>
          <button className={styles.infoBtn}>
            <InfoOutlinedIcon sx={{ fontSize: "25px" }} />
            <h4>More Info</h4>
          </button>
        </div>
      </div>
      <CarouselSlides
        heading={"Netflix Original"}
        items={items01}
        isPortrait={true}
      />
      <CarouselSlides heading={"Popular on Netflix"} items={items} />
    </div>
  );
}

export default App;
