import React, { useEffect, useState } from "react";
import Service from "../components/Service";
import scrollIntoView from "scroll-into-view-if-needed";
import axios from "axios";
import Async from "react-async";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const API_URL = "http://167.114.153.121:1337";

const url = `${API_URL}/pages/5dff3787aecfad34d76ee579`;

const Company = () => {
  const [data, setData] = useState([]);
  const [aboutUsHeader, setAboutUsHeader] = useState([]);
  const [aboutUsSubheader, setAboutUsSubheader] = useState([]);
  const [aboutUsDescriptions, setAboutUsDescriptions] = useState([]);
  const [servicesHeader, setServicesHeader] = useState([]);
  const [servicesSubheader, setServicesSubheader] = useState([]);
  const [servicesDescriptions, setServicesDescriptions] = useState([]);
  const [aboutUsBannerImage, setAboutUsBannerImage] = useState([]);
  const [servicesBannerImage, setServicesBannerImage] = useState([]);

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
      setData(res.data);
      setAboutUsHeader(res.data.fields[0].header);
      setAboutUsSubheader(res.data.fields[0].subheader);
      setAboutUsBannerImage(`${API_URL + res.data.fields[0].background.url}`);
      setAboutUsDescriptions(res.data.fields[1].paragraph);
      setServicesHeader(res.data.fields[2].header);
      setServicesSubheader(res.data.fields[2].subheader);
      setServicesBannerImage(`${API_URL + res.data.fields[2].background.url}`);
      setServicesDescriptions(res.data.fields[3].paragraph);
    });
  }, []);

  return (
    <div>
      <div id="about">
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
      <div id="services">
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
      </div>
    </div>
  );
};

export default Company;
