import React, { useEffect, useState } from "react";
import Solution from "../components/Solution";
import axios from "axios";
import NavBar from "../components/NavBar";

const API_URL = "http://167.114.153.121:1337";

const solutionsPageUrl = `${API_URL}/pages/5dff3f78aecfad34d76ee5c5`;

const Solutions = () => {
  const [data, setData] = useState([]);
  const [shipperSolutions, setShipperSolutions] = useState([]);
  const [carrierSolutions, setCarrierSolutions] = useState([]);
  const [shipperBanner, setShipperBanner] = useState([]);
  const [carrierBanner, setCarrierBanner] = useState([]);
  const [shipperBannerImage, setShipperBannerImage] = useState([]);
  const [carrierBannerImage, setCarrierBannerImage] = useState([]);

  useEffect(() => {
    axios.get(solutionsPageUrl).then((res) => {
      setData(res.data);
      setCarrierBanner(res.data.fields[0]);
      setCarrierBannerImage(API_URL + res.data.fields[0].background.url);
      setCarrierSolutions(res.data.fields[1].paragraph);
      setShipperBanner(res.data.fields[2]);
      setShipperBannerImage(API_URL + res.data.fields[2].background.url);
      setShipperSolutions(res.data.fields[3].paragraph);
    });
  }, []);

  if (process.browser) {
    if (location.hash === "#shippers") {
      setTimeout(() => {
        document.getElementById("shippers").scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }
  }

  return (
    <div className="sticky-menu">
      <section className="otm-hero-light">
        <div className="container">
          <NavBar />
        </div>
      </section>
      <div id="carriers">
        <div
          className="jumbotron jumbotron-fluid pb-4 text-light"
          style={{
            backgroundImage: `url(${carrierBannerImage})`,
            backgroundSize: `cover`
          }}
        >
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>{carrierBanner.header}</h1>
              <p className="mx-auto w-50">{carrierBanner.subheader}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 mb-5 mx-auto justify-content-center">
            {carrierSolutions.map((solution, index) => (
              <div key={index} className="col-sm-6 mt-3 text-center">
                <Solution
                  id={solution._id}
                  header={solution.header}
                  description={solution.body}
                />
              </div>
            ))}
          </div>
        </div>

        <div id="shippers" className="py-5">
          <div
            className="jumbotron jumbotron-fluid pb-4 text-light"
            style={{
              backgroundImage: `url(${shipperBannerImage})`,
              backgroundSize: `cover`
            }}
          >
            <div className="container">
              <div className="mx-auto my-auto text-center">
                <h1>{shipperBanner.header}</h1>
                <p className="mx-auto w-50">{shipperBanner.subheader}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5 mb-5 mx-auto justify-content-center">
              {shipperSolutions.map((solution, index) => (
                <div key={index} className="col-sm-6 mt-3 text-center">
                  <Solution
                    id={solution._id}
                    header={solution.header}
                    description={solution.body}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
