import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import OTMDispatchLogoLight from "../images/logo/Logo-Light.svg";
import OTMDispatchLogoDark from "../images/logo/Logo-Dark.svg";
import DropDownArrow from "../images/down-arrow.svg"

// import axios from "axios";
// import Async from "react-async";

// const API_URL = "http://167.114.153.121:1337";

// const logoUrl = `${API_URL}/logos/5dff4f59a21c443501c3241a`;
// const careersUrl = `${API_URL}/pages/5dff3ba2aecfad34d76ee5a0`;
// const companyUrl = `${API_URL}/pages/5dff3787aecfad34d76ee579`;
// const contactUrl = `${API_URL}/pages/5dff3d19aecfad34d76ee5b6`;
// const solutionsUrl = `${API_URL}/pages/5dff3f78aecfad34d76ee5c5`;
// const helpUrl = `${API_URL}/pages/5dff3bdaaecfad34d76ee5a5`;

const NavBar = (props) => {
  // const [imageURL, setImageURL] = useState([]);
  // const [companyLinkText, setCompanyLinkText] = useState([]);
  // const [solutionsLinkText, setSolutionsLinkText] = useState([]);
  // const [helpLinkText, setHelpLinkText] = useState([]);
  // const [contactLinkText, setContactLinkText] = useState([]);
  // const [careersLinkText, setCareersLinkText] = useState([]);

  const mouseEnterHandler = () => {
    document.getElementById("menuBackground").classList.add("show");
  }

  const mouseLeaveHandler = () => {
    document.getElementById("menuBackground").classList.remove("show");
  }

  useEffect(() => {
    // axios.get(logoUrl).then((res) => {
    //   setImageURL(`${API_URL + res.data.navigation_bar_logo.url}`);
    // });
    // axios.get(careersUrl).then((res) => {
    //   setCareersLinkText(res.data.page_name);
    // });
    // axios.get(companyUrl).then((res) => {
    //   setCompanyLinkText(res.data.page_name);
    // });
    // axios.get(contactUrl).then((res) => {
    //   setContactLinkText(res.data.page_name);
    // });
    // axios.get(solutionsUrl).then((res) => {
    //   setSolutionsLinkText(res.data.page_name);
    // });
    // axios.get(helpUrl).then((res) => {
    //   setHelpLinkText(res.data.page_name);
    // });
  }, []);

  return (
    // <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //   <a className="navbar-brand" href="/">
    //     <img src={imageURL} width="125" height="30" />
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item dropdown">
    //         <a
    //           href="/company"
    //           className="nav-link dropdown-toggle"
    //           id="navbarDropdown"
    //           role="button"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           {companyLinkText}
    //         </a>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //           <Link to="/company#about" className="dropdown-item">
    //             About Us
    //           </Link>
    //           <Link to="/company#services" className="dropdown-item">
    //             Services
    //           </Link>
    //         </div>
    //       </li>
    //       <li className="nav-item dropdown">
    //         <Link
    //           to="/solutions"
    //           className="nav-link dropdown-toggle"
    //           id="navbarDropdown"
    //           role="button"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           {solutionsLinkText}
    //         </Link>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //           <Link to="/solutions#carriers" className="dropdown-item">
    //             For Carriers
    //           </Link>
    //           <Link to="/solutions#shippers" className="dropdown-item">
    //             For Shippers
    //           </Link>
    //         </div>
    //       </li>
    //       <li className="nav-item dropdown">
    //         <Link
    //           to="/help"
    //           className="nav-link dropdown-toggle"
    //           href="#"
    //           id="navbarDropdown"
    //           role="button"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           {helpLinkText}
    //         </Link>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //           <Link to="/help#faqs" className="dropdown-item">
    //             FAQs
    //           </Link>
    //           <Link to="/help#help" className="dropdown-item">
    //             Get Help
    //           </Link>
    //         </div>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/contact" className="nav-link">
    //           {contactLinkText}
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/careers" className="nav-link">
    //           {careersLinkText}
    //         </Link>
    //       </li>
    //     </ul>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link to="/login" className="nav-link disabled">
    //           Login
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light otm-nav">
      <Link to="/" className="navbar-brand">
        <img src={props.light ? OTMDispatchLogoLight : OTMDispatchLogoDark} alt="OTM Dispatch" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item dropdown" onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Company
              <img src={DropDownArrow} alt="Dropdown" className="dropdown-menu-icon" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/company" className="dropdown-item">
                Company
                </Link>
              <Link to="/company#about" className="dropdown-item">
                About Us
              </Link>
              <Link to="/company#services" className="dropdown-item">
                Service
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown" onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Solutions
              <img src={DropDownArrow} alt="Dropdown" className="dropdown-menu-icon" />
            </a>
            <div className="dropdown-menu solutions-dropdown" aria-labelledby="navbarDropdown">
              <Link to="/solutions" className="dropdown-item">
                Solutions
              </Link>
              <Link to="/solutions#professional-dispatching" className="dropdown-item">
                Professional Dispatching
              </Link>
              <Link to="/solutions#truck-permits" className="dropdown-item">
                Truck Permits
              </Link>
              <Link to="/solutions#tax-planning" className="dropdown-item">
                Tax Planning and Preparation
              </Link>
              <Link to="/solutions#accounting" className="dropdown-item">
                Accounting and Bookkeeping
              </Link>
              <Link to="/solutions#consulting" className="dropdown-item">
                Business Consulting
              </Link>
              <Link to="/solutions#irs-tax" className="dropdown-item">
                IRS Tax Debt Resolution
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown" onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Help
              <img src={DropDownArrow} alt="Dropdown" className="dropdown-menu-icon" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/help" className="dropdown-item">
                Help
              </Link>
              <Link to="/help" className="dropdown-item">
                FAQs
              </Link>
              <Link to="/help#help" className="dropdown-item">
                Get Help
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-link nav-cta">
              Partner With Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
