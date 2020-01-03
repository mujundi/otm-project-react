import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

const API_URL = "http://167.114.153.121:1337";

const url = `${API_URL}/pages/5dff3ba2aecfad34d76ee5a0`;

const Careers = () => {
  const [bannerHeader, setBannerHeader] = useState([]);
  const [bannerSubheader, setBannerSubheader] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setBannerHeader(res.data.fields[0].header);
      setBannerSubheader(res.data.fields[0].subheader);
      setImageURL(`${API_URL + res.data.fields[0].background.url}`);
    });
  }, []);

  return (
    <div className="sticky-menu">
      <section className="otm-hero-light">
        <div className="container">
          <NavBar />
        </div>
      </section>
      <div
        className="jumbotron jumbotron-fluid pb-4 text-light"
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: `cover`
        }}
      >
        <div className="container">
          <div className="mx-auto text-center">
            <h1>{bannerHeader}</h1>
            <p>{bannerSubheader}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <form id="contact-form" method="post" action="contact.php" role="form">
          <div className="messages"></div>

          <div className="controls">
            <div className="row">
              <div className="radio">
                <label>
                  <input type="radio" value="Ruby" />
                  Ruby Package
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="Emerald" />
                  Emerald Package
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="Diamond" />
                  Diamond Package
                </label>
              </div>
              <div className="form-group custom-form-group col-12">
                      <label>Your Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group custom-form-group col-12">
                      <label>Company (if applicable)</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group custom-form-group col-12">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="+1 (123) 555-5678"
                      />
                    </div>
                    <div className="form-group custom-form-group col-12">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="youremail@address.com"
                      />
                    </div>
                    <div className="form-group custom-form-group col-12">
                      <label>Street Address</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="100 Street Address"
                      />
                    </div>
                    <div className="form-group custom-form-group col-12">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Florida"
                      />
                    </div>
                    <div className="form-group custom-form-group col-6">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Orlando"
                      />
                    </div>
                    <div className="form-group custom-form-group col-6">
                      <label>Zip</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder={"12345"}
                      />
                    </div>
              
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group custom-form-group col-6">
                      <label>Zip</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder={"12345"}
                      />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group custom-form-group col-6">
                      <label>Zip</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder={"12345"}
                      />
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
                    rows={4}
                    required
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
    </div>
  );
};

export default Careers;
