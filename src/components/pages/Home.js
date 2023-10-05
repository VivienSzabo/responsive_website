import React from "react";
import Carousel from "../inc/Carousel";
import { Link } from "react-router-dom";
import Cards from "../inc/Cards";
import Installation1 from "../images/Installation1.jpg";
import Installation2 from "../images/Installation2.jpg";
import Installation3 from "../images/Installation3.jpg";
import Testimonial from "../inc/Testimonial";

function Home({ selectedLanguage, enTranslations, hunTranslations }) {
  const homeTranslations =
    selectedLanguage === "en" ? enTranslations : hunTranslations;

  return (
    <div>
      <Carousel />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">{homeTranslations.home.title}</h3>
              <div className="underline mx-auto"></div>
              <p className="mt-3">{homeTranslations.home.description}</p>
              <Link to="/about" className="btn btn-warning shadow mt-3">
                {homeTranslations.home.button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-3 text-center">
              <h3 className="main-heading main-heading-color">
                {homeTranslations.home.installation.title}
              </h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow">
                <img
                  src={Installation1}
                  className="w-100 border-bottom"
                  alt="Home Design 1"
                />
                <div className="card-body">
                  <h6>{homeTranslations.home.installation.smallTitleOne}</h6>
                  <div className="underline"></div>
                  <p>{homeTranslations.home.installation.descriptionOne}</p>
                  <Link to="/service" className="btn btn-warning shadow">
                    {homeTranslations.home.installation.button}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow">
                <img
                  src={Installation2}
                  className="w-100 border-bottom"
                  alt="Home Design 1"
                />
                <div className="card-body">
                  <h6>{homeTranslations.home.installation.smallTitleTwo}</h6>
                  <div className="underline"></div>
                  <p>{homeTranslations.home.installation.descriptionTwo}</p>
                  <Link to="/service" className="btn btn-warning shadow">
                    {homeTranslations.home.installation.button}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow">
                <img
                  src={Installation3}
                  className="w-100 border-bottom"
                  alt="Home Design 1"
                />
                <div className="card-body">
                  <h6>{homeTranslations.home.installation.smallTitleThree}</h6>
                  <div className="underline"></div>
                  <p>{homeTranslations.home.installation.descriptionThree}</p>
                  <Link to="/services" className="btn btn-warning shadow">
                    {homeTranslations.home.installation.button}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial selectedLanguage={selectedLanguage}
        enTranslations={enTranslations}
        hunTranslations={hunTranslations}/>
      <Cards 
        selectedLanguage={selectedLanguage}
        enTranslations={enTranslations}
        hunTranslations={hunTranslations}/>
       
    </div>
  );
}

export default Home;
