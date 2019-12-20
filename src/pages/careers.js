import React, { useEffect, useState } from "react";
import axios from "axios";
import Async from "react-async";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const API_URL = "https://otm-dispatch-strapi.herokuapp.com";

const url = `${API_URL}/careers-pages`;

const Careers = () => {
  const [careersBanner, setCareersBanner] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setCareersBanner(res.data[0].Banner);
      setImageURL(`${API_URL + res.data[0].BannerImage.url}`);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div
        className="jumbotron jumbotron-fluid pb-4 text-light"
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: `cover`
        }}
      >
        <div className="container">
          <div className="mx-auto text-center">
            <h1>{careersBanner.BannerHeader}</h1>
            <p>{careersBanner.BannerDescription}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <form id="contact-form" method="post" action="contact.php" role="form">
          <div className="messages"></div>

          <div className="controls">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_name">First name *</label>
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Please enter your first name *"
                    required="required"
                    data-error="First name is required."
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_lastname">Last name *</label>
                  <input
                    id="form_lastname"
                    type="text"
                    name="surname"
                    className="form-control"
                    placeholder="Please enter your last name *"
                    required="required"
                    data-error="Last name is required."
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_email">Email *</label>
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Please enter your email *"
                    required="required"
                    data-error="Valid email is required."
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="form_message">Message *</label>
                  <textarea
                    id="form_message"
                    name="message"
                    className="form-control"
                    placeholder="Message for us *"
                    rows="4"
                    required="required"
                    data-error="Please, leave us a message."
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12 pb-5">
                <input
                  type="submit"
                  className="btn btn-primary btn-send mb-5"
                  value="Send message"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
