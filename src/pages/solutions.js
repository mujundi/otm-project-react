import React, { useEffect, useState } from "react";
import Solution from "../components/Solution";
import scrollIntoView from "scroll-into-view-if-needed";
import axios from "axios";
import Async from "react-async";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const API_URL = "https://otm-dispatch-strapi.herokuapp.com";

const url = `${API_URL}/solutions-pages`;

const Solutions = () => {
  const [data, setData] = useState([]);
  const [shipperSolutions, setShipperSolutions] = useState([]);
  const [carrierSolutions, setCarrierSolutions] = useState([]);
  const [shipperBanner, setShipperBanner] = useState([]);
  const [carrierBanner, setCarrierBanner] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data[0]);
      setShipperSolutions(res.data[0].ShipperSolutions);
      setCarrierSolutions(res.data[0].CarrierSolutions);
      setShipperBanner(res.data[0].ShipperBannerHeader);
      setCarrierBanner(res.data[0].CarrierBannerHeader);
      setImageURL(`${API_URL + res.data[0].BannerImage.BannerImage.url}`);
    });
  }, []);

  if (process.browser) {
    if (location.hash === "#carriers") {
      setTimeout(() => {
        document.getElementById("carriers").scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }
  }

  return (
    <div>
      <NavBar />
      <div id="shippers">
        <div
          className="jumbotron jumbotron-fluid pb-4 text-light"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: `cover`
          }}
        >
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>{shipperBanner.Header}</h1>
              <p className="mx-auto w-50">{shipperBanner.Subheader}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 mb-5 mx-auto justify-content-center">
            {shipperSolutions.map((solution, index) => (
              <div key={index} className="col-sm-6 mt-3 text-center">
                <Solution
                  id={solution._id}
                  header={solution.SolutionHeader}
                  description={solution.SolutionDescription}
                />
              </div>
            ))}
          </div>
        </div>

        <div id="carriers" className="py-5">
          <div
            className="jumbotron jumbotron-fluid pb-4 text-light"
            style={{
              backgroundImage: `url(${imageURL})`,
              backgroundSize: `cover`
            }}
          >
            <div className="container">
              <div className="mx-auto my-auto text-center">
                <h1>{carrierBanner.Header}</h1>
                <p className="mx-auto w-50">{carrierBanner.Subheader}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5 mb-5 mx-auto justify-content-center">
              {carrierSolutions.map((solution, index) => (
                <div key={index} className="col-sm-6 mt-3 text-center">
                  <Solution
                    id={solution._id}
                    header={solution.SolutionHeader}
                    description={solution.SolutionDescription}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
