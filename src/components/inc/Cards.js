import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  // Propsból kinyerjük a szükséges adatokat
  const { selectedLanguage, enTranslations, hunTranslations } = props;

  const cardTranslations =
    selectedLanguage === "en" ? enTranslations : hunTranslations;

  return (
    <section className="section bg-c-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-3 text-center">
            <h3 className="main-heading">
              {cardTranslations.home.thingsToSee.title}
            </h3>
            <div className="underline mx-auto"></div>
          </div>
          <div className="col-lg-4 text-center">
            <h6>{cardTranslations.home.thingsToSee.smallTitleOne}</h6>
            <p>{cardTranslations.home.thingsToSee.descriptionOne}</p>
            <Link to="/about" className="btn btn-warning shadow">
              {cardTranslations.home.thingsToSee.button}
            </Link>
          </div>
          <div className="col-lg-4 text-center">
            <h6>{cardTranslations.home.thingsToSee.smallTitleTwo}</h6>
            <p>{cardTranslations.home.thingsToSee.descriptionTwo}</p>
            <Link to="/about" className="btn btn-warning shadow">
              {cardTranslations.home.thingsToSee.button}
            </Link>
          </div>
          <div className="col-lg-4 text-center">
            <h6>{cardTranslations.home.thingsToSee.smallTitleThree}</h6>
            <p>{cardTranslations.home.thingsToSee.descriptionThree}</p>
            <Link to="/about" className="btn btn-warning shadow">
              {cardTranslations.home.thingsToSee.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
