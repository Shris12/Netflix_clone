import { useState } from "react";
import styles from "./carouselSlide.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CarouselSlides({ items, heading, isPortrait = false }) {
  const [index, setIndex] = useState(0);

  const goToNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 5 > items.length ? 0 : prevIndex + 5));
  };

  const goToPreviousSlide = () => {
    setIndex((prevIndex) => (prevIndex - 5 <= 0 ? 0 : prevIndex - 5));
  };
  return (
    <div className={styles.container}>
      <h3>{heading}</h3>

      <div
        className={`${styles.slideshow} ${
          isPortrait ? `${styles.slideshow_portrait}` : ""
        }`}
      >
        <div
          className={`${styles.slideshowSlider} ${
            isPortrait ? `${styles.isPortrait}` : ""
          } `}
          style={{ transform: `translate3d(${-index * 19.2}%, 0, 0)` }}
        >
          {items.map((film) => (
            <img src={film.src_path} alt="poster" />
          ))}
        </div>
        <div className={styles.btn}>
          <span className={styles.icons}>
            <ArrowForwardIosIcon
              fontSize="large"
              className={styles.backBtn}
              onClick={goToPreviousSlide}
            />
          </span>
          <span className={styles.icons}>
            <ArrowForwardIosIcon
              fontSize="large"
              className={styles.forwardBtn}
              onClick={goToNextSlide}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export { CarouselSlides };
