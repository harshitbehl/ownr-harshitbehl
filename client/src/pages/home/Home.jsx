import React from "react";
import "./Home.scss";

import Showcase from "../../components/showcase/Showcase";
import Carousel from "../../components/carousel/Carousel";

function Home() {
  return (
    <div className="home">
      {/* Showcase Section */}
      <Showcase />
      {/* Carousel Section */}
      <Carousel />
    </div>
  );
}

export default Home;
