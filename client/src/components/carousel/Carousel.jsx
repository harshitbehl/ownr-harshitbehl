import React, { useEffect, useState } from "react";
import "./Carousel.scss";

import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel() {
  const [isSharkActive, setIsSharkActive] = useState(true);
  const [isCatActive, setIsCatActive] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState("");
  // Carousel States
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Initial Photos Rendering | Default: Shark Photos
    const getPhotos = async () => {
      try {
        setStatus("loading");
        if (isSharkActive && !isCatActive) {
          const res = await axios.get(
            "https://ownrapi-harshitbehl.herokuapp.com/api/v1/animals/sharks"
          );
          setPhotos(res.data.data.sharks);
          photos.length < current && setCurrent(0);
          setStatus("success");
        } else if (isCatActive && !isSharkActive) {
          const res = await axios.get(
            "https://ownrapi-harshitbehl.herokuapp.com/api/v1/animals/cats"
          );
          setPhotos(res.data.data.cats);
          photos.length < current && setCurrent(0);
          setStatus("success");
        } else if (isSharkActive && isCatActive) {
          const res = await axios.get(
            "https://ownrapi-harshitbehl.herokuapp.com/api/v1/animals/random-animals"
          );
          setPhotos(res.data.data.randomAnimals);
          setStatus("success");
        } else {
          setPhotos([]);
          setStatus("noSelection");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPhotos();
  }, [isSharkActive, isCatActive, current, photos.length]);

  // Carousel Functions
  const prevImage = () => {
    setCurrent(current === 0 ? photos.length - 1 : current - 1);
  };
  const nextImage = () => {
    setCurrent(current === photos.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="carousel-section" id="carousel-section">
      <div className="carousel-section__container main-container">
        <h2 className="carousel-section__title section-title">Carousel Task</h2>
        <p className="carousel-section__subtitle">
          Interactive Carousel For Animal photos
        </p>

        <div className="carousel-section__content-container">
          <div className="carousel-section__filter-container">
            <h3>Animal Photos</h3>
            <div className="carousel-section__filter-buttons">
              <button
                className={isSharkActive ? "active" : ""}
                onClick={() => {
                  setIsSharkActive(!isSharkActive);
                }}
              >
                Sharks
              </button>
              <button
                className={isCatActive ? "active" : ""}
                onClick={() => {
                  setIsCatActive(!isCatActive);
                }}
              >
                Cats
              </button>
            </div>
          </div>
          <div className="carousel-section__carousel-container">
            <FaChevronLeft
              className="carousel-section__left-arrow"
              onClick={prevImage}
            />
            <FaChevronRight
              className="carousel-section__right-arrow"
              onClick={nextImage}
            />
            {status === "loading" && (
              <div className="carousel-section__loading">Loading...</div>
            )}
            {status === "noSelection" && (
              <div className="carousel-section__no-selection">
                Please Select Options Above To Display Photos
              </div>
            )}
            {status === "success" &&
              photos.map((photo, index) => (
                <div key={photo._id}>
                  {index === current && <img src={photo.photo} alt="" />}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
