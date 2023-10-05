import React from "react";
import Carousel2 from "../images/Carousel2.jpg";
import Installation1 from "../images/Installation1.jpg";
import Installation2 from "../images/Installation2.jpg";
import Installation3 from "../images/Installation3.jpg";

function About({ selectedLanguage, enTranslations, hunTranslations }) {
  const homeTranslations =
    selectedLanguage === "en" ? enTranslations : hunTranslations;

  const heroStyle = {
    backgroundImage: `url(${Carousel2})`,
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
            <div className="col-md-12 text-center">
              <h3 className="main-heading main-heading-color">
                {homeTranslations.home.title}
              </h3>
              <div className="underline mx-auto"></div>
              <p className="mt-3">{homeTranslations.home.description}</p>
              <p>
                Meow and walk away sees bird in air, breaks into cage and
                attacks creature but sleeping in the box attack the child. Put
                butt in owner's face growl at dogs in my sleep sees bird in air,
                breaks into cage and attacks creature jump on fridge throw down
                all the stuff in the kitchen. Has closed eyes but still sees you
                take a big fluffing crap ðŸ’©, or stinky cat. Pelt around the
                house and up and down stairs chasing phantoms scratch me now!
                stop scratching me! poop in the plant pot but hide head under
                blanket so no one can see mess up all the toilet paper for munch
                on tasty moths. Furrier and even more furrier hairball the door
                is opening! how exciting oh, it's you, meh for catto munch
                salmono spot something, big eyes, big eyes, crouch, shake butt,
                prepare to pounce flex claws on the.
              </p>
              <p>
                Meow and walk away sees bird in air, breaks into cage and
                attacks creature but sleeping in the box attack the child. Put
                butt in owner's face growl at dogs in my sleep sees bird in air,
                breaks into cage and attacks creature jump on fridge throw down
                all the stuff in the kitchen. Has closed eyes but still sees you
                take a big fluffing crap ðŸ’©, or stinky cat. Pelt around the
                house and up and down stairs chasing phantoms scratch me now!
                stop scratching me! poop in the plant pot but hide head under
                blanket so no one can see mess up all the toilet paper for munch
                on tasty moths. Furrier and even more furrier hairball the door
                is opening! how exciting oh, it's you, meh for catto munch
                salmono spot something, big eyes, big eyes, crouch, shake butt,
                prepare to pounce flex claws on the.
              </p>

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
                          <h6>
                            {homeTranslations.home.installation.smallTitleOne}
                          </h6>
                          <div className="underline"></div>
                          <p>
                            {homeTranslations.home.installation.descriptionOne}
                          </p>
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
                          <h6>
                            {homeTranslations.home.installation.smallTitleTwo}
                          </h6>
                          <div className="underline"></div>
                          <p>
                            {homeTranslations.home.installation.descriptionTwo}
                          </p>
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
                          <h6>
                            {homeTranslations.home.installation.smallTitleThree}
                          </h6>
                          <div className="underline"></div>
                          <p>
                            {
                              homeTranslations.home.installation
                                .descriptionThree
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="section mb-5">
        <div className="container">
          <div className="row">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
