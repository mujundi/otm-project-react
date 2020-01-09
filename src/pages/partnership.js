import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "@reach/router";

import "../styles/partnership.css";

import NavBar from "../components/NavBar";

import HelpImage from "../images/get-help.png";
import ProcessImage from "../images/partnership-process.svg";
import loaderImage from "../images/loader.gif";
// const API_URL = "http://167.114.153.121:1337";

// const url = `${API_URL}/pages/5dff3ba2aecfad34d76ee5a0`;

const Partnership = () => {
  // const [bannerHeader, setBannerHeader] = useState([]);
  // const [bannerSubheader, setBannerSubheader] = useState([]);
  // const [imageURL, setImageURL] = useState([]);

  const [sendingMail, setSendingMail] = useState(false);

  useEffect(() => {
    // axios.get(url).then((res) => {
    //   setBannerHeader(res.data.fields[0].header);
    //   setBannerSubheader(res.data.fields[0].subheader);
    //   setImageURL(`${API_URL + res.data.fields[0].background.url}`);
    // });
    if (process.browser) scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const alert = document.getElementById("loader");
    alert.style.display = "block";
        setTimeout(() => {
            alert.style.display = "none";
        }, 4000);

    setSendingMail(true);

    const data = $(event.target).serializeArray();
    let body = 'Hi, You have received a new partnership request for OTM Dispatch. Please see below for lead information: <br /><br />';
    //let signature ='Thank you! <br />OTM Dispatch Lead Capture';
    data.map(field => body = body + field.name + ' : ' + field.value + '<br />');

    Email.send({
      Host: "smtp.office365.com",
      Username: "leads@otmdispatch.com",
      Password: "Kok49018",
      To: 'leads@otmdispatch.com',
      From: "leads@otmdispatch.com",
      Subject: "New Lead - OTM Dispatch",
      Body: body
    }).then((message) => {
      setSendingMail(false);
      if (message === 'OK') {
        const alert = document.getElementById("thank-you-alert");
        //alert('We received your details. Thank you :)');
        alert.style.display = "block";
        setTimeout(() => {
            alert.style.display = "none";
        }, 4000);
        document.getElementById('partnershipForm').reset();
      } else {
        const alert = document.getElementById("error-alert");
        //alert('We received your details. Thank you :)');
        alert.style.display = "block";
        setTimeout(() => {
            alert.style.display = "none";
        }, 4000);
      }
    });
  }

  return (
    <div className="sticky-menu">
      <section className="otm-hero-light">
        <div className="container">
          <NavBar />
        </div>
      </section>
      {/* <div
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
      </div> */}
      {/* <div className="container">
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
      </div> */}
       <div className="otm-breadcrumb">
        <div className="container">
          <div className="otm-breadcrumb-inner">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Partner With Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="partner-main">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-12 col-lg-7 offset-lg-1 partner-form">
              <div className="partner-form-inner">
                <h2 className="section-title">Partner With Us</h2>
                <form id="partnershipForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">
                      Package Of Interest?
                    </label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Package Name"
                        id="Ruby"
                        defaultValue="Ruby"
                        required
                      />
                      <label className="form-check-label" htmlFor="Ruby">
                        Ruby
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Package Name"
                        id="Emerald"
                        defaultValue="Emerald"
                      />
                      <label className="form-check-label" htmlFor="Emerald">
                        Emerald
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Package Name"
                        id="Diamond"
                        defaultValue="Diamond"
                      />
                      <label className="form-check-label" htmlFor="Diamond">
                        Diamond
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactName">
                      1. What is your Name? Contact Person
                    </label>
                    <div className="input-has-icon">
                      <input
                        id="contactName"
                        className="form-control otm-form-control"
                        type="text"
                        placeholder="Your Name"
                        name="Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="carrierName">
                      2. What is the Carrier Name?
                    </label>
                    <div className="input-has-icon">
                      <input
                        id="carrierName"
                        className="form-control otm-form-control"
                        type="text"
                        placeholder="Carrier Name"
                        name="Carrier Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">
                      3. What is your Phone Number?
                    </label>
                    <div className="input-has-icon">
                      <input
                        id="phoneNumber"
                        className="form-control otm-form-control"
                        type="text"
                        placeholder="123-234-5678"
                        name="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailAddress">
                      4. What is your Email Address?
                    </label>
                    <div className="input-has-icon">
                      <input
                        id="emailAddress"
                        className="form-control otm-form-control"
                        type="email"
                        placeholder="email@emailaddress.com"
                        name="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="physicalAddress">
                      5. What is the Physical Address?
                    </label>
                    <div className="input-has-icon">
                      <input
                        id="physicalAddress"
                        className="form-control otm-form-control"
                        type="text"
                        placeholder="123 Street Address City, State & Zip"
                        name="Physical Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="faxNumber">6. Fax Number?</label>
                    <div className="input-has-icon">
                      <input
                        id="faxNumber"
                        className="form-control otm-form-control"
                        type="text"
                        placeholder="123-456-7890"
                        name="Fax Number"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="dotNumber">7. DOT #</label>
                      <div className="input-has-icon">
                        <input
                          type="text"
                          className="form-control otm-form-control"
                          id="dotNumber"
                          placeholder={12345}
                          name="DOT"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="MCNumber">8. MC #</label>
                      <div className="input-has-icon">
                        <input
                          type="text"
                          className="form-control otm-form-control"
                          id="MCNumber"
                          placeholder={12345}
                          name="MC"
                        />
                      </div>
                    </div>
                  </div>
                    <div id="thank-you-alert" className="alert alert-success mb-5" role="alert"style={{ display: "none" }}>
                      <h4 className="alert-heading">Thank you!</h4>
                      <p>We will get back to you shortly.</p>
                    </div>
                    <div id="error-alert" className="alert alert-success mb-5" role="alert"style={{ display: "none" }}>
                      <h4 className="alert-heading">Hmmm!</h4>
                      <p>Something went wrong. <a href="https://app.purechat.com/w/otmdispatch">Contact Support</a></p>
                    </div>
                  <div className="form-group text-center">
                  <div id="loader" role="alert" style={{ display: "none" }}><img src={loaderImage} className="loaderImage" /></div>
                      
                    <button
                      type="submit"
                      className="btn btn-success partner-btn-submit"
                      disabled={sendingMail}>
                      <span>Ok</span>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
                                      c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
                                      C514.5,101.703,514.499,85.494,504.502,75.496z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                <p className="form-footer">
                  OTM Dispatch reserves the right to not provide the services
                  mentioned above if Carrier does not furnish all the required
                  information to complete such services and Carrier cannot hold OTM
                  Dispatch accountable for doing so if those requirements are not
                  met by Carrier.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 partner-process">
              <div className="partner-process-inner">
                <div className="process-title">
                  <h4>Partnership Process Explained</h4>
                </div>
                <img src={ProcessImage} className="partnership-image" alt="Partnership Process" />
                <ul className="steps-pills">
                  <li className="step-li step-one">
                    <div className="step-pill pill-green">Fill out form</div>
                  </li>
                  <li className="step-li step-two">
                    <div className="step-pill pill-light">Wait for our call</div>
                  </li>
                  <li className="step-li step-three">
                    <div className="step-pill pill-blue">Get Approved</div>
                  </li>
                  <li className="step-li step-four">
                    <div className="step-pill pill-green">Get Top Loads</div>
                  </li>
                  <li className="step-li step-five">
                    <div className="step-pill pill-dark">Maximize Profits</div>
                  </li>
                </ul>
                <div className="get-help-wrap">
                  <p>
                    Press below to get assistance from one of our representatives.
                  </p>
                  <a href="https://app.purechat.com/w/otmdispatch" target="_app"><img src={HelpImage} alt="help" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
