import React from "react";
import Carousel1 from "../images/Carousel1.jpg";

function Contact({ selectedLanguage, enTranslations, hunTranslations }) {
  const homeTranslations =
    selectedLanguage === "en" ? enTranslations : hunTranslations;

  const heroStyle = {
    backgroundImage: `url(${Carousel1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", // A hero section magassága a teljes viewport magasság legyen
  };

  return (
    <div>
      <section className="hero" style={heroStyle}></section>
      <h3 className="main-heading main-heading-color text-center mt-5">
        Contact Us
      </h3>
      <div className="underline mx-auto mb-5"></div>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                  <div clasName="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Ralf Helga"
                      />
                    </div>
                    <div clasName="mb-3">
                      <label for="exampleFormControlInput2" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput2"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div clasName="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Example textarea
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-warning mt-3">Submit</button>
                  </div>
                </div>
                <div className="col-md-6 border-start">
                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline"></div>
                  <p>xxxx Keszthely Bikás u.2</p>
                  <p>Phone: +36 xxx-xxxx</p>
                  <p>Email: xxxx@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
