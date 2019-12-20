import React, { useEffect, useState } from "react";
import axios from "axios";
import Async from "react-async";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const API_URL = "https://otm-dispatch-strapi.herokuapp.com";

const url = `${API_URL}/contact-pages`;

const Contact = () => {
  const [data, setData] = useState([]);
  const [contactHeader, setContactHeader] = useState([]);
  const [needs, setNeeds] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data[0]);
      setContactHeader(res.data[0].ContactHeader);
      setNeeds(res.data[0].Needs);
      setImageURL(`${API_URL + res.data[0].BannerImage.url}`);
    });
  }, []);

  const handleEmail = (e) => {
    if (e) e.preventDefault();
    const firstName = e.target.name.value;
    const lastName = e.target.surname.value;
    const email = e.target.email.value;
    const reason = e.target.need.value;
    const message = e.target.message.value;

    axios
      .post(`${API_URL}/info-requests`, {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Message: message,
        Reason: reason
      })
      .then((res) => {
        const alert = document.getElementById("thank-you-alert");
        alert.style.display = "block";
        setTimeout(() => {
          alert.style.display = "none";
        }, 4000);
      });
  };

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
            <h1>{contactHeader.BannerHeader}</h1>
            <p>{contactHeader.BannerSubheader}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          id="thank-you-alert"
          className="alert alert-success mb-5"
          role="alert"
          style={{ display: "none" }}
        >
          <h4 className="alert-heading">Thank you!</h4>
          <p>We will get back to you shortly.</p>
        </div>
        <form id="contact-form" role="form" onSubmit={handleEmail}>
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
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_need">Please specify your need *</label>
                  <select
                    id="form_need"
                    name="need"
                    className="form-control"
                    required="required"
                    data-error="Please specify your need."
                  >
                    {needs.map((need, index) => (
                      <option key={index} value={need.Needs}>
                        {need.Needs}
                      </option>
                    ))}
                  </select>
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
                  id="form-submit-btn"
                  type="submit"
                  className="btn btn-primary mb-5"
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

export default Contact;
