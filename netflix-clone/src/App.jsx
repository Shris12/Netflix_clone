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
  const [items02, setItems02] = useState([]);
  const [items03, setItems03] = useState([]);
  const [items04, setItems04] = useState([]);

  useEffect(() => {
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

        setItems01(item);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3fd1930d13b349e3f76f66fb63556abc&with_genres=27&page=1   "
      )
      .then((response) => {
        const item = [];
        response.data.results.map((film) =>
          item.push({
            video: film.video,
            src_path: `https://image.tmdb.org/t/p/original${film.backdrop_path}`,
          })
        );

        setItems02(item);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3fd1930d13b349e3f76f66fb63556abc&with_genres=10749&page=1"
      )
      .then((response) => {
        const item = [];
        response.data.results.map((film) =>
          item.push({
            video: film.video,
            src_path: `https://image.tmdb.org/t/p/original${film.backdrop_path}`,
          })
        );

        setItems03(item);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3fd1930d13b349e3f76f66fb63556abc&with_genres=35&page=1"
      )
      .then((response) => {
        const item = [];
        response.data.results.map((film) => {
          console.log(film);
          item.push({
            video: film.video,
            src_path: `https://image.tmdb.org/t/p/original${film.backdrop_path}`,
            name: film.title,
            overview: film.overview,
          });
        });
        console.log(item);
        setItems04(item);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // console.log(items04[0]?.name);
  const idx = parseInt(Math.random() * 10);
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.selectedMovie}>
        <div class={styles.heroSectionMovieDetails}>
          <h1 className={styles.filmLogo}>{items04[idx]?.name}</h1>
          <h6 className={styles.filmDescription}>{items04[idx]?.overview}</h6>
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
        <div className={styles.bannerFadeBottom}></div>
        <img
          className={styles.selectedMovieImg}
          src={items04[idx]?.src_path}
          alt="Movie"
        />
      </div>
      <CarouselSlides
        heading={"Netflix Original"}
        items={items01}
        isPortrait={true}
      />
      <CarouselSlides heading={"Popular on Netflix"} items={items} />
      <CarouselSlides heading={"Action Movies"} items={items02} />
      <CarouselSlides heading={"Romance Movies"} items={items03} />
      <CarouselSlides heading={"Horror Movies"} items={items04} />
    </div>
  );
}

export default App;
