import React,{useEffect} from "react";
import "../styles/home.css";

import NavBar from "components/NavBar";

import GlobeImage from "../images/globe-sm.png";
import TruckIcon from "../images/truck-icon.png";
import OTMTrademark from "../images/logo/otm-trademark.svg";
import PlatFormImage from "../images/logistics-platform.png";

export default () => {
  
  useEffect(() => {
    document.getElementById("menuBackground").style.top = "120px";
    scrollTo(0, 0);

		return () => {
      document.getElementById("menuBackground").style.top = "98px";    
    }
  }, []);

  return (
  <>
    <section className="otm-hero">
      <div className="container">
        <NavBar light />
      </div>
      <div className="container">
        <div className="row align-items-center hero-text-wrap">
          <div className="col">
            <div className="hero-text-wrapper">
              <h1>Powered By</h1>
              <h2>Commitment.</h2>
              {/* <span className="text-wrapper">
                <span className="letters  letters-1">Integrity.</span>
                <span className="letters hide letters-2">Commitment.</span>
                <span className="letters hide letters-3">Innovation.</span>
                Comment Out - - <span className="letters hide letters-4">Talent.</span>
                <span className="letters hide letters-5">The Future.</span>
              </span> */}
              <h3>Professional Dispatching and Business Services </h3>
              <p>Set out to deliver valuable and consistent experiences</p>
              <a href="#" className="btn btn-otm-cta">
                CARRIERS
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={GlobeImage} alt="Globe" className="globe" />
    </section>
    <section className="smart-dispatch">
      {/* Carousel Background */}
      <div className="carousel-background-top" />
      <div className="carousel-background-left" />
      <div className="carousel-background" />
      {/* End Carousel Background */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              id="smart-dispatch"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-item-inner">
                    <div className="carousel-item-title">
                      {/* Updated to SVG icon */}
                      <h3>
                        <span className="carousel-icon">
                          <figure className="icon  icon--tall">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 53.29 66.43"
                            >
                              <defs>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      ".qndhcoflos-a{fill:none;stroke:#00548a;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.64px}"
                                  }}
                                />
                              </defs>
                              <polygon
                                className="qndhcoflos-a"
                                points="8.71 61.48 0.82 57.54 0.82 52.61 52.47 52.61 52.47 57.54 44.58 61.48 8.71 61.48"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="23.38"
                                y1="54.83"
                                x2="29.55"
                                y2="54.83"
                              />
                              <polyline
                                className="qndhcoflos-a"
                                points="13.39 52.61 13.39 28.7 40.15 28.7 40.15 52.61"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="5.07"
                                y1="17.68"
                                x2="48.59"
                                y2="17.68"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="23.38"
                                y1="31.81"
                                x2="29.55"
                                y2="31.81"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="23.38"
                                y1="7.87"
                                x2="29.55"
                                y2="7.87"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="16.23"
                                y1="34.74"
                                x2="36.7"
                                y2="34.74"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="16.23"
                                y1="49.4"
                                x2="36.7"
                                y2="49.4"
                              />
                              <polyline
                                className="qndhcoflos-a"
                                points="7.82 0.82 10.32 3.89 10.32 28.7"
                              />
                              <polyline
                                className="qndhcoflos-a"
                                points="13.39 39.23 7.63 39.23 2.24 44.61 2.24 49.4 13.39 49.4"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="4.69"
                                y1="46.2"
                                x2="10.32"
                                y2="46.2"
                              />
                              <polyline
                                className="qndhcoflos-a"
                                points="40.15 39.23 45.91 39.23 51.3 44.61 51.3 49.4 40.15 49.4"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="48.85"
                                y1="46.2"
                                x2="43.22"
                                y2="46.2"
                              />
                              <polyline
                                className="qndhcoflos-a"
                                points="13.39 28.7 8.47 28.7 8.47 39.23"
                              />
                              <rect
                                className="qndhcoflos-a"
                                x="3.28"
                                y="20.14"
                                width="3.34"
                                height="6.37"
                              />
                              <polyline
                                className="qndhcoflos-a"
                                points="45.72 0.82 43.22 3.89 43.22 28.7"
                              />
                              <polyline
                                className="qndhcoflos-a"
                                points="40.15 28.7 45.07 28.7 45.07 39.23"
                              />
                              <rect
                                className="qndhcoflos-a"
                                x="46.92"
                                y="20.14"
                                width="3.34"
                                height="6.37"
                                transform="translate(97.18 46.65) rotate(-180)"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="13.39"
                                y1="28.7"
                                x2="13.39"
                                y2="14.08"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="32.7"
                                y1="14.11"
                                x2="13.39"
                                y2="14.11"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="40.15"
                                y1="14.11"
                                x2="32.7"
                                y2="14.11"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="4.69"
                                y1="49.4"
                                x2="4.69"
                                y2="52.61"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="48.85"
                                y1="49.4"
                                x2="48.85"
                                y2="52.61"
                              />
                              <path
                                className="qndhcoflos-a"
                                d="M11.85,61.48v2.66a1.48,1.48,0,0,1-1.47,1.48H6.16a1.48,1.48,0,0,1-1.47-1.48V59.47"
                              />
                              <path
                                className="qndhcoflos-a"
                                d="M41.49,61.48v2.66A1.48,1.48,0,0,0,43,65.62h4.22a1.48,1.48,0,0,0,1.47-1.48V59.47"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="40.15"
                                y1="14.08"
                                x2="40.15"
                                y2="28.7"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="13.39"
                                y1="14.08"
                                x2="15.06"
                                y2="5.18"
                              />
                              <polyline
                                className="qndhcoflos-a"
                                points="10.32 10.55 15.06 5.18 38.48 5.18 43.22 10.55"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="38.48"
                                y1="5.18"
                                x2="40.15"
                                y2="14.08"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="17.36"
                                y1="37.05"
                                x2="17.36"
                                y2="46.94"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="23.36"
                                y1="37.05"
                                x2="23.36"
                                y2="46.94"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="29.35"
                                y1="37.05"
                                x2="29.35"
                                y2="46.94"
                              />
                              <line
                                className="qndhcoflos-a"
                                x1="35.35"
                                y1="37.05"
                                x2="35.35"
                                y2="46.94"
                              />
                            </svg>
                          </figure>
                        </span>{" "}
                        Smart Dispatching
                      </h3>
                    </div>
                    <div className="carousel-item-text">
                      <p>
                        Book and retain more business. We partner with you to keep
                        drivers on the road, eliminate manual check calls and
                        increase customer satisfaction. </p>
                        <p><i>Our professional
                        dispatchers keep you loaded with the best loads at the
                        highest prices.</i>{" "}
                      </p>
                    </div>
                    <div className="text-stack__cta text-stack__cta--offset js-cta">
                      <div className="button-wrapper" data-module="circle-button">
                        <a
                          href="/contact"
                          className="button button--circle button--orange"
                        >
                          <span className="button__content js-button-content">
                            Speak to a Representative
                          </span>
                          <span className="button__arrow js-button-arrow">
                            <svg
                              viewBox="0 0 27 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 7.5h25.62M19.602 1l6.335 6.5-6.335 6.5" />
                            </svg>
                          </span>
                          <div className="button__outline js-button-outline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-title">
                    {/* Updated to SVG icon */}
                    <h3>
                      <span className="carousel-icon">
                        <figure className="icon  icon--square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 59.74 59.74"
                          >
                            <defs>
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    ".dlqjspgcln-a{fill:none;stroke:#216294;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
                                }}
                              />
                            </defs>
                            <path
                              className="dlqjspgcln-a"
                              d="M23.15,46.09a87.53,87.53,0,0,1-1.41-16.22C21.74,13.93,25.38,1,29.87,1c2.29,0,4.37,3.39,5.85,8.82"
                            />
                            <path
                              className="dlqjspgcln-a"
                              d="M36.59,13.64A87.65,87.65,0,0,1,38,29.87c0,16-3.64,28.87-8.13,28.87-2.3,0-4.37-3.38-5.85-8.83"
                            />
                            <path
                              className="dlqjspgcln-a"
                              d="M13.64,36.59A88.91,88.91,0,0,1,24.12,24.12C35.4,12.85,47.11,6.28,50.29,9.46c1.62,1.62.69,5.48-2.11,10.37"
                            />
                            <path
                              className="dlqjspgcln-a"
                              d="M46.1,23.15A87.56,87.56,0,0,1,35.62,35.62c-11.28,11.27-23,17.84-26.16,14.67-1.63-1.63-.7-5.49,2.1-10.38"
                            />
                            <path
                              className="dlqjspgcln-a"
                              d="M13.65,23.15a87.61,87.61,0,0,1,16.22-1.41c16,0,28.87,3.64,28.87,8.13,0,2.29-3.39,4.37-8.82,5.85"
                            />
                            <path
                              className="dlqjspgcln-a"
                              d="M46.1,36.59A87.65,87.65,0,0,1,29.87,38C13.93,38,1,34.36,1,29.87,1,27.57,4.38,25.5,9.83,24"
                            />
                            <path
                              className="dlqjspgcln-a"
                              d="M23.15,13.65A87.55,87.55,0,0,1,35.62,24.12c11.27,11.28,17.84,23,14.67,26.17-1.63,1.62-5.49.69-10.37-2.1"
                            />
                            <path
                              className="dlqjspgcln-a"
                              d="M36.59,46.1A87.56,87.56,0,0,1,24.12,35.62C12.85,24.34,6.28,12.63,9.46,9.46c1.62-1.63,5.48-.7,10.37,2.1"
                            />
                          </svg>
                        </figure>
                      </span>{" "}
                      Business Services
                    </h3>
                  </div>
                  <div className="carousel-item-text">
                    <p>OTM Dispatch provides affordable and competitively priced dispatch, tax, accounting, truck permits and consulting services to individuals as well as small and medium size businesses nationwide.</p>
                    <p>OTM Dispatch is currently dispatching Reefers, Dry Vans, Flatbeds, Car Haulers and Hotshots.{" "}</p>
                  </div>
                  <div className="text-stack__cta text-stack__cta--offset js-cta">
                    <div className="button-wrapper" data-module="circle-button">
                      <a
                        href="#"
                        className="button button--circle button--orange"
                      >
                        <span className="button__content js-button-content">
                          Speak to a Representative
                        </span>
                        <span className="button__arrow js-button-arrow">
                          <svg
                            viewBox="0 0 27 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 7.5h25.62M19.602 1l6.335 6.5-6.335 6.5" />
                          </svg>
                        </span>
                        <div className="button__outline js-button-outline" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Carousel Item 
                <div className="carousel-item">
                  <div className="carousel-item-title">
                    <h3>
                      <img src={TruckIcon} /> Smart Dispatching 3
                    </h3>
                  </div>
                  <div className="carousel-item-text">
                    <p>
                      Book and retain more business. We partner with you to keep
                      drivers on the road, eliminate manual check calls and
                      increase customer satisfaction. Our professional dispatchers
                      keep you loaded with the best loads at the highest prices.{" "}
                    </p>
                  </div>
                  <div className="text-stack__cta text-stack__cta--offset js-cta">
                    <div className="button-wrapper" data-module="circle-button">
                      <a
                        href="#"
                        className="button button--circle button--orange"
                      >
                        <span className="button__content js-button-content">
                          Speak to a Representative
                        </span>
                        <span className="button__arrow js-button-arrow">
                          <svg
                            viewBox="0 0 27 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 7.5h25.62M19.602 1l6.335 6.5-6.335 6.5" />
                          </svg>
                        </span>
                        <div className="button__outline js-button-outline" />
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
              <a
                className="carousel-control-prev"
                href="#smart-dispatch"
                role="button"
                data-slide="prev"
              >
                <span className="arrow-left-slider">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160
                              c-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125
                              c4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z
                              "
                    />
                  </svg>
                </span>
              </a>
              <a
                className="carousel-control-next"
                href="#smart-dispatch"
                role="button"
                data-slide="next"
              >
                <span className="arrow-right-slider">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
                              H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
                              c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="otm-main">
      <div className="container otm-home-container">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-6 column2">
            <div className="otm-main-inner">
              <h3>Professional Dispatching</h3>
              <p>
                OTM Dispatch provides affordable and competitively priced dispatch, tax, accounting, truck permits and consulting services to individuals as well as small and medium size businesses nationwide. OTM Dispatch is currently dispatching Reefers, Dry Vans, Flatbeds, Car Haulers and Hotshots.{" "}
              </p>
              <p>
                Our agents are here to be the most transparent they can. We are here to work side by side with shippers and drivers to help minimize costs while maximizing profits.{" "}
              </p>
              <a className="btn btn-orange btn-shadow" href="/contact">Learn More</a>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-6 column1">
            <img src={OTMTrademark} alt="OTM Dispatch. Professional Dispatching" className="otm-main-logo" />
          </div>
        </div>
      </div>
      <div className="container">
        <div
          id="otm-carousel-team"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-6 team-img-wrap">
                  <img
                    src={PlatFormImage}
                    alt="Platform"
                    className="img-fluid"
                  />
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6 team-text-wrap">
                  <div className="team-text-inner">
                    <h4>Your business is our business</h4>
                    <p>
                      We're building solutions to deliver peak efficiency and flexibility in your supply chain, backed by the highest level of Customer Service Agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-6 team-img-wrap">
                  <img
                    src={PlatFormImage}
                    alt="Platform"
                    className="img-fluid"
                  />
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6 team-text-wrap">
                  <div className="team-text-inner">
                    <h4>Platform Designed for your Supply Chain</h4>
                    <p>
                      Technology embedded with deep transportation expertise to
                      meet the unique needs of shippers, LSPs and carriers
                      worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 
              <div className="carousel-item">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-6 team-img-wrap">
                  <img
                    src={PlatFormImage}
                    alt="Platform"
                    className="img-fluid"
                  />
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6 team-text-wrap">
                  <div className="team-text-inner">
                    <h4>Platform Designed for your Supply Chain 12</h4>
                    <p>
                      Technology embedded with deep transportation expertise to
                      meet the unique needs of shippers, LSPs and carriers
                      worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <a
            className="carousel-control-prev"
            href="#otm-carousel-team"
            role="button"
            data-slide="prev"
          >
            <span className="arrow-left-slider">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <path
                  d="M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160
                          c-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125
                          c4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z
                          "
                />
              </svg>
            </span>
          </a>
          <a
            className="carousel-control-next"
            href="#otm-carousel-team"
            role="button"
            data-slide="next"
          >
            <span className="arrow-right-slider">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <path
                  d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
                          H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
                          c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
    <div className="slider-section">
      <div className="slider-trucks">
          <section className="sliding-animation">
          </section>
      </div>
      <div className="slider-background">
          <section className="slider-bottom">
          </section>
      </div>
    </div>
  </>
)};
