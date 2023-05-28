import aipic from "../assets/aipic.jpg";
import head from "../assets/18298.jpg";
import robot from "../assets/584.jpg";
import { Stats } from "./Stats";
import { Carousel } from "bootstrap";
import { MyCarousel } from "./MyCarousel";
import { ProductInfo } from "./ProductInfo";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <div className="landing-container container d-flex flex-wrap justify-content-center align-items-center my-5">
        <div className="hero-text-container">
          <h1 className="hero-title mb-0">TechPanda</h1>
          <p className="hero-subtitle h1 mb-0 fw-bold mt-0 me-5">
            Unleashing AI. <br />
            Empowering Innovation.
          </p>
        </div>
        <img
          src={robot}
          className="hero img-fluid rounded my-5 d-block"
          alt="robot-head"
        />
      </div>
      <Stats />
      <MyCarousel />
      <ProductInfo />
      <Footer />
    </>
  );
};

export { Landing };
