import React from "react";
import Carousel3 from "../images/Carousel3.jpg";

function ThingsToSee({ selectedLanguage, enTranslations, hunTranslations }) {
  const homeTranslations =
    selectedLanguage === "en" ? enTranslations : hunTranslations;

  const heroStyle = {
    backgroundImage: `url(${Carousel3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", // A hero section magassága a teljes viewport magasság legyen
  };
  return (
    <div>
      <section className="hero" style={heroStyle}></section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="main-heading main-heading-color text-center">
                Things to see
              </h3>
              <div className="underline mx-auto"></div>
              <div className="row  mt-5">
                <div className="col-md-5">
                  <img
                    src={Carousel3}
                    alt="Blue Scarf"
                    className="img-fluid"
                    style={{ maxWidth: "450px" }}
                  />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <h2 className="text-left">Lorem</h2>
                  <p className="mt-3">{homeTranslations.home.description}</p>
                </div>
              </div>

              <div className="row  mt-5">
                <div className="col-md-5">
                  <h2 className="text-left">Lorem</h2>
                  <p className="mt-3">{homeTranslations.home.description}</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <img
                    src={Carousel3}
                    alt="Blue Scarf"
                    className="img-fluid"
                    style={{ maxWidth: "450px" }}
                  />
                </div>
              </div>

              <div className="row  mt-5">
                <div className="col-md-5">
                  <img
                    src={Carousel3}
                    alt="Blue Scarf"
                    className="img-fluid"
                    style={{ maxWidth: "450px" }}
                  />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <h2 className="text-left">Lorem</h2>
                  <p className="mt-3">{homeTranslations.home.description}</p>
                </div>
              </div>

              <div className="row  mt-5 mb-5">
                <div className="col-md-5">
                  <h2 className="text-left">Lorem</h2>
                  <p className="mt-3">{homeTranslations.home.description}</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <img
                    src={Carousel3}
                    alt="Blue Scarf"
                    className="img-fluid"
                    style={{ maxWidth: "450px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThingsToSee;
