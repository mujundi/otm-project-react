import React from "react";
import { Link } from "@reach/router";

import OTMDispatchLogo from '../images/logo/otm-trademark-white.svg';

export default () => (
  <>
    <section className="home-cta">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h4>
              Clear, upfront pricing with unrivaled transparency and the <br />{" "}
              information you need every step of the journey.
          </h4>
            <a href="#" className="btn btn-cta-white">
              SCHEDULE A CONSULTATION
          </a>
          </div>
        </div>
      </div>
    </section>
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="company">OTM Dispatch</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3 col-lg-3">
            <ul className="footer-menu">
              <li>
                <Link to="/company">Overview</Link>
              </li>
              <li>
                <Link to="/solutions">Services</Link>
              </li>
              <li>
                <Link to="/solutions">Platform</Link>
              </li>
              <li>
                <Link to="/company">Company</Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-3 col-lg-3">
            <ul className="footer-menu">
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/help">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6 follow-menu">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="#">
                  <svg
                    width="9px"
                    height="17px"
                    viewBox="0 0 9 17"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <image
                        width={9}
                        height={17}
                        xlinkHref="data:image/png;base64,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"
                        id="facebookIcon"
                      />
                    </defs>
                    <use xlinkHref="#facebookIcon" fill="#FFFFFF" stroke="none" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="17px"
                    height="17px"
                    viewBox="0 0 17 17"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <image
                        width={17}
                        height={17}
                        xlinkHref="data:image/png;base64,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"
                        id="InstagramIcon"
                      />
                    </defs>
                    <use xlinkHref="#InstagramIcon" fill="#FFFFFF" stroke="none" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center footer-logo">
            <img src={OTMDispatchLogo} alt="OTM Dispatch" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>2019 OTM Dispatch. All Rights Reserved?</p>
          </div>
        </div>
      </div>
    </section>
  </>
);
