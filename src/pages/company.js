import React, { useEffect, useState } from "react";
import Service from "../components/Service";
import scrollIntoView from "scroll-into-view-if-needed";
import axios from "axios";
import Async from "react-async";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const API_URL = "https://otm-dispatch-strapi.herokuapp.com";

const url = `/company-pages`;

const axiosInstance = axios.create({
  baseURL: `${API_URL}`
});

const Company = () => {
  const [data, setData] = useState([]);
  const [aboutUsHeader, setAboutUsHeader] = useState([]);
  const [aboutUsDescriptions, setAboutUsDescriptions] = useState([]);
  const [servicesHeader, setServicesHeader] = useState([]);
  const [servicesDescriptions, setServicesDescriptions] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  if (process.browser) {
    if (location.hash === "#services") {
      setTimeout(() => {
        document.getElementById("services").scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }
  }

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data[0]);
      setAboutUsHeader(res.data[0].AboutUsHeader);
      setAboutUsDescriptions(res.data[0].AboutDescriptions);
      setServicesHeader(res.data[0].ServicesHeader);
      setServicesDescriptions(res.data[0].ServicesDescriptions);
      setImageURL(`${API_URL + res.data[0].BannerImage.url}`);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div id="about">
        <div
          className="jumbotron jumbotron-fluid pb-4 text-light"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: `cover`
          }}
        >
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>{aboutUsHeader.BannerHeader}</h1>
              <p className="mx-auto w-50">{aboutUsHeader.Motto}</p>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          {aboutUsDescriptions.map((description, index) => (
            <div key={index}>
              <h3>{description.Header}</h3>
              <p>{description.Paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="services">
        <div
          className="jumbotron jumbotron-fluid pb-4 text-light"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: `cover`
          }}
        >
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>{servicesHeader.BannerHeader}</h1>
              <p className="mx-auto w-50">{servicesHeader.BannerSubheader}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 mb-5">
            {servicesDescriptions.map((service, index) => (
              <div key={index} className="col-sm-6 mt-3 text-center">
                <Service
                  id={service._id}
                  header={service.Header}
                  description={service.Paragraph}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;
