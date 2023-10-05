import React from "react";
import TestimonialImg from "../images/TestimonialImg.jpg";

function Testimonial(props) {
  const { selectedLanguage, enTranslations, hunTranslations } = props;

  const testimonialTranslations =
    selectedLanguage === "en" ? enTranslations : hunTranslations;

  return (
    <section className="section bg-light mt-5">
      <div className="container">
        <div className="row">
            <h2 className="text-center main-heading main-heading-color">{testimonialTranslations.home.testimonial.title}
            <div className="underline mx-auto"></div></h2>
          <div className="col-lg-4 col-md-6 mb-4 p-4">
            <div className="testimonial">
              <div className="testimonial-author mt-5">
                <img
                  src={TestimonialImg}
                  alt="Author"
                  className="img-fluid rounded-circle mb-3"
                  style={{ maxWidth: "150px" }}
                />
                <div className="testimonial-content">
                  <p>
                    {testimonialTranslations.home.testimonial.descriptionOne}
                  </p>
                </div>
                <h5>{testimonialTranslations.home.testimonial.nameOne}</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 p-4">
            <div className="testimonial">
              <div className="testimonial-author mt-5">
                <img
                  src={TestimonialImg}
                  alt="Author"
                  className="img-fluid rounded-circle mb-3"
                  style={{ maxWidth: "150px" }}
                />
                <div className="testimonial-content">
                  <p>
                    {testimonialTranslations.home.testimonial.descriptionTwo}
                  </p>
                </div>
                <h5>{testimonialTranslations.home.testimonial.nameTwo}</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 p-4">
            <div className="testimonial">
              <div className="testimonial-author mt-5">
                <img
                  src={TestimonialImg}
                  alt="Author"
                  className="img-fluid rounded-circle mb-3"
                  style={{ maxWidth: "150px" }}
                />
                <div className="testimonial-content">
                  <p>
                    {testimonialTranslations.home.testimonial.descriptionThree}
                  </p>
                </div>
                <h5>{testimonialTranslations.home.testimonial.nameThree}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
