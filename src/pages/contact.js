import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

import "../styles/contact.css";

import NavBar from "components/NavBar";

import OTMDispatchLogo from "../images/logo/otm-trademark.svg";

const API_URL = "http://167.114.153.121:1337";

// const url = `${API_URL}/pages/5dff3d19aecfad34d76ee5b6`;

const Contact = (props) => {
  // const [data, setData] = useState([]);
  // const [contactHeader, setContactHeader] = useState([]);
  // const [contactSubheader, setContactSubheader] = useState([]);
  // const [needs, setNeeds] = useState([]);
  // const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    // axios.get(url).then((res) => {
    //   setData(res.data);
    //   setContactHeader(res.data.fields[0].header);
    //   setContactSubheader(res.data.fields[0].subheader);
    //   setImageURL(`${API_URL + res.data.fields[0].background.url}`);
    //   setNeeds(res.data.fields[1].option);
    // });
    if (process.browser) scrollTo(0, 0);
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
    // <div>
    //   <div
    //     className="jumbotron jumbotron-fluid pb-4 text-light"
    //     style={{
    //       backgroundImage: `url(${imageURL})`,
    //       backgroundSize: `cover`
    //     }}
    //   >
    //     <div className="container">
    //       <div className="mx-auto text-center">
    //         <h1>{contactHeader}</h1>
    //         <p>{contactSubheader}</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container">
    //     <div
    //       id="thank-you-alert"
    //       className="alert alert-success mb-5"
    //       role="alert"
    //       style={{ display: "none" }}
    //     >
    //       <h4 className="alert-heading">Thank you!</h4>
    //       <p>We will get back to you shortly.</p>
    //     </div>
    //     <form id="contact-form" role="form" onSubmit={handleEmail}>
    //       <div className="messages"></div>

    //       <div className="controls">
    //         <div className="row">
    //           <div className="col-md-6">
    //             <div className="form-group">
    //               <label htmlFor="form_name">First name *</label>
    //               <input
    //                 id="form_name"
    //                 type="text"
    //                 name="name"
    //                 className="form-control"
    //                 placeholder="Please enter your first name *"
    //                 required="required"
    //                 data-error="First name is required."
    //               />
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-6">
    //             <div className="form-group">
    //               <label htmlFor="form_lastname">Last name *</label>
    //               <input
    //                 id="form_lastname"
    //                 type="text"
    //                 name="surname"
    //                 className="form-control"
    //                 placeholder="Please enter your last name *"
    //                 required="required"
    //                 data-error="Last name is required."
    //               />
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-md-6">
    //             <div className="form-group">
    //               <label htmlFor="form_email">Email *</label>
    //               <input
    //                 id="form_email"
    //                 type="email"
    //                 name="email"
    //                 className="form-control"
    //                 placeholder="Please enter your email *"
    //                 required="required"
    //                 data-error="Valid email is required."
    //               />
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-6">
    //             <div className="form-group">
    //               <label htmlFor="form_need">Please specify your need *</label>
    //               <select
    //                 id="form_need"
    //                 name="need"
    //                 className="form-control"
    //                 required="required"
    //                 data-error="Please specify your need."
    //               >
    //                 {needs.map((need, index) => (
    //                   <option key={index} value={need.option}>
    //                     {need.option}
    //                   </option>
    //                 ))}
    //               </select>
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-md-12">
    //             <div className="form-group">
    //               <label htmlFor="form_message">Message *</label>
    //               <textarea
    //                 id="form_message"
    //                 name="message"
    //                 className="form-control"
    //                 placeholder="Message for us *"
    //                 rows="4"
    //                 required="required"
    //                 data-error="Please, leave us a message."
    //               ></textarea>
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-12 pb-5">
    //             <input
    //               id="form-submit-btn"
    //               type="submit"
    //               className="btn btn-primary mb-5"
    //               value="Send message"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="sticky-menu">
      <section className="otm-hero-light">
        <div className="container">
          <NavBar />
        </div>
      </section>
      <div className="otm-breadcrumb">
        <div className="container">
          <div className="otm-breadcrumb-inner">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="contact-us-main">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="contact-form-title">
                <h3>Contact Us</h3>
              </div>
              <div className="contact-form-wrapper">
                <form>
                  <div className="form-row">
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
                    <div className="form-group custom-form-group col-12 text-right">
                      <button className="btn btn-lg otm-action-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <div className="contact-form-title">
                <h3>Contact Information</h3>
              </div>
              <div className="contact-details">
                <div className="chat-time">
                  <p>Need to talk with an agent?</p>
                  <h4>8AM - 5PM Live Chat</h4>
                </div>
                <div className="contact-point">
                  <h4>Contact our Office</h4><br />
                  <p>
                    <strong>Toll Free:</strong> <a href="tel:+18001231234">888-842-9507 </a><br />
                    <strong>Direct:</strong> <a href="tel:+18001231234">321-284-3755</a><br />
                    <strong>Fax:</strong> <a href="tel:+18001231234">407-574-6247</a>
                  </p>
                  <p>
                    <strong>Email Us:</strong> <a href="mailto:INFO@OTMDISPATCH.COM">
                      INFO@OTMDISPATCH.COM
                    </a>
                  </p>
                  <p>9500 SATELLITE BLVD SUITE 170, ORLANDO, 32837</p>
                  <img
                    src={OTMDispatchLogo}
                    alt="OTM Dispatch"
                    className="contact-info-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gmap-wrapper">
        <div className="gmap-inner text-center">
          <a href="https://www.google.com/maps/dir/?api=1&destination=9500%20SATELLITE%20BLVD%20SUITE%20170%2C%20ORLANDO%2C%2032837" className="btn btn-lg btn-otm-dark">Get Direction</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
