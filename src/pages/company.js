import React, { useEffect, useState } from "react";
// import Service from "../components/Service";
// import axios from "axios";
import { Link } from "@reach/router";

import "../styles/about.css";

import NavBar from "../components/NavBar";

import AboutUsImageRight from "../images/about-img-right.png";
import CTAWrapLogo from "../images/logo/otm-trademark-white.svg";
import ServiceImageLogo from "../images/logo/otm-trademark.svg";

// const API_URL = "http://167.114.153.121:1337";

// const url = `${API_URL}/pages/5dff3787aecfad34d76ee579`;

const Company = () => {
  // const [data, setData] = useState([]);
  // const [aboutUsHeader, setAboutUsHeader] = useState([]);
  // const [aboutUsSubheader, setAboutUsSubheader] = useState([]);
  // const [aboutUsDescriptions, setAboutUsDescriptions] = useState([]);
  // const [servicesHeader, setServicesHeader] = useState([]);
  // const [servicesSubheader, setServicesSubheader] = useState([]);
  // const [servicesDescriptions, setServicesDescriptions] = useState([]);
  // const [aboutUsBannerImage, setAboutUsBannerImage] = useState([]);
  // const [servicesBannerImage, setServicesBannerImage] = useState([]);

  // if (process.browser) {
  //   if (location.hash === "#services") {
  //     setTimeout(() => {
  //       document.getElementById("services").scrollIntoView(true);
  //     }, 150);
  //   } else {
  //     scrollTo(0, 0);
  //   }
  // }

  useEffect(() => {
    // axios.get(url).then((res) => {
    //   setData(res.data);
    //   setAboutUsHeader(res.data.fields[0].header);
    //   setAboutUsSubheader(res.data.fields[0].subheader);
    //   setAboutUsBannerImage(`${API_URL + res.data.fields[0].background.url}`);
    //   setAboutUsDescriptions(res.data.fields[1].paragraph);
    //   setServicesHeader(res.data.fields[2].header);
    //   setServicesSubheader(res.data.fields[2].subheader);
    //   setServicesBannerImage(`${API_URL + res.data.fields[2].background.url}`);
    //   setServicesDescriptions(res.data.fields[3].paragraph);
    // });

    document.getElementById("menuBackground").classList.remove("show");

  }, []);

  return (
    <div className="sticky-menu">
      <section className="otm-hero-light">
        <div className="container">
          <NavBar />
        </div>
      </section>
      {/* <div id="about">
        <div
          className="jumbotron jumbotron-fluid pb-4 text-light"
          style={{
            backgroundImage: `url(${aboutUsBannerImage})`,
            backgroundSize: `cover`
          }}
        >
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>{aboutUsHeader}</h1>
              <p className="mx-auto w-50">{aboutUsSubheader}</p>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          {aboutUsDescriptions.map((description, index) => (
            <div key={index}>
              <h3>{description.header}</h3>
              <p>{description.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="services" style={{ paddingTop: "100px" }}>
        <div
          className="jumbotron jumbotron-fluid pb-4 text-light"
          style={{
            backgroundImage: `url(${servicesBannerImage})`,
            backgroundSize: `cover`
          }}
        >
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>{servicesHeader}</h1>
              <p className="mx-auto w-50">{servicesSubheader}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 mb-5">
            {servicesDescriptions.map((service, index) => (
              <div key={index} className="col-sm-6 mt-3 text-center">
                <Service
                  id={service._id}
                  header={service.header}
                  description={service.body}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="hero-title text-center">
                <h2>About Us</h2>
                <h4>OTM DISPATCH</h4>
              </div>
            </div>
          </div>
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
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="about-us-main">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 about-main-left">
              <div className="about-main-left-inner">
                <h2 className="section-title">About Us</h2>
                <p className="section-desc">
                  OTM Dispatch provides clients (both intrastate and interstate)
                  access to a network of freight shippers and brokers in hundreds of
                  product categories with over 25 years of experience.
                </p>
                <p className="section-desc">
                  Our professional dispatchers and administration staff possess the
                  skills and experience that will help your organization meet
                  challenges, improve efficiencies, and increase profitability.
                </p>
                <p className="section-desc">
                  We provide affordable and competitively priced dispatch, tax,
                  accounting, truck permits and consulting services to individuals
                  as well as small and medium size businesses. OTM Dispatch prides
                  itself on delivering the highest level of professional service to
                  its clients. Our firm treats all clients with the utmost
                  importance. Individuals and/or companies who choose our firm rely
                  on our competent advice and quick accurate results.
                </p>
                <Link to="/contact" className="btn btn-orange btn-shadow">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={AboutUsImageRight}
          alt=""
          className="about-main-img-right"
        />
      </section>
      <section className="dark-cta-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={CTAWrapLogo}
                alt=""
                className="cta-wrapp-logo"
              />
              <p>
                “OTM Dispatch prides itself on delivering the highest level of
                professional service to its clients. Our firm treats all clients
                with the utmost importance.”
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-service">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-12 col-lg-7 about-main-left">
              <div className="about-main-left-inner">
                <h2 className="section-title">Service</h2>
                <p className="section-desc">
                  OTM Dispatch provides professional dispatching and business
                  Services. Our professional dispatchers keep you loaded with the
                  best loads at the highest prices and will match a load with your
                  best resource to deliver it. OTM Dispatch is currently dispatching
                  Reefers, Dry Vans, Flatbeds, Car Haulers and Hotshots.
                </p>
                <ul>
                  <li>Professional Dispatching</li>
                  <li>Truck Permits</li>
                  <li>Tax Planning and Preparation</li>
                  <li>Accounting and Bookkeeping</li>
                </ul>
                <Link to="/contact" className="btn btn-orange btn-shadow">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <img src={ServiceImageLogo} alt="" className="service-img-logo" />
      </section>
    </div>
  );
};

export default Company;
