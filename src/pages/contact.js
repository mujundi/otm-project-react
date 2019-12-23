import React, { useEffect, useState } from "react";
import axios from "axios";
import Async from "react-async";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useSiteData } from "react-static";

const API_URL = "http://167.114.153.121:1337";

const url = `${API_URL}/pages/5dff3d19aecfad34d76ee5b6`;

const Contact = (props) => {
  const [data, setData] = useState([]);
  const [contactHeader, setContactHeader] = useState([]);
  const [contactSubheader, setContactSubheader] = useState([]);
  const [needs, setNeeds] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      setContactHeader(res.data.fields[0].header);
      setContactSubheader(res.data.fields[0].subheader);
      setImageURL(`${API_URL + res.data.fields[0].background.url}`);
      setNeeds(res.data.fields[1].option);
    });
  }, []);

  const handleEmail = (e) => {
    if (e) e.preventDefault();
    const firstName = e.target.name.value;
    const lastName = e.target.surname.value;
    const email = e.target.email.value;
    const reason = e.target.need.value;
    const message = e.target.message.value;
    if (firstName) {
      axios
        .post(`${API_URL}/contact-requests`, {
          first_name: firstName,
          last_name: lastName,
          email: email,
          message: message,
          reason_for_inquiry: reason
        })
        .then((res) => {
          const alert = document.getElementById("thank-you-alert");
          alert.style.display = "block";
          setTimeout(() => {
            alert.style.display = "none";
          }, 4000);
        });
    }
  };

  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid pb-4 text-light"
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: `cover`
        }}
      >
        <div className="container">
          <div className="mx-auto text-center">
            <h1>{contactHeader}</h1>
            <p>{contactSubheader}</p>
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
                      <option key={index} value={need.option}>
                        {need.option}
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
    </div>
  );
};

export default Contact;
