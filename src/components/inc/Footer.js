import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6>Company Information</h6>
            <hr />
            <p>
              This is the day touch water with paw then recoil in horror but
              claw your carpet in places everyone can see - why hide my amazing
              artistic clawing skills? but purr.
            </p>
          </div>

          <div className="col-lg-4 text-center">
            <h6>Ouick Links</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About Us</Link>
            </div>
            <div>
              <Link to="/">Contact</Link>
            </div>
            <div>
              <Link to="/">Blog</Link>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">
                This is the day touch water with
              </p>
            </div>
            <div>
              <p className="text-white mb-1">
                This is the day touch water with
              </p>
            </div>
            <div>
              <p className="text-white mb-1">
                This is the day touch water with
              </p>
            </div>
            <div>
              <p className="text-white mb-1">
                This is the day touch water with
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
