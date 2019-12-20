import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Async from "react-async";

const API_URL = "https://otm-dispatch-strapi.herokuapp.com";

const url = `${API_URL}/logos`;

const NavBar = () => {
  const [imageURL, setImageURL] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setImageURL(`${API_URL + res.data[0].NavBarLogo.url}`);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img src={imageURL} width="125" height="30" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              href="/company"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Company
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/company#about" className="dropdown-item">
                About Us
              </Link>
              <Link to="/company#services" className="dropdown-item">
                Services
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/solutions"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Solutions
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/solutions#shippers" className="dropdown-item">
                For Shippers
              </Link>
              <Link to="/solutions#carriers" className="dropdown-item">
                For Carriers
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/help"
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Help
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/help#faqs" className="dropdown-item">
                FAQs
              </Link>
              <Link to="/help#help" className="dropdown-item">
                Get Help
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-link">
              Careers
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link disabled">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
