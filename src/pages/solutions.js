import React, { useEffect, useState } from "react";
// import Solution from "../components/Solution";
// import axios from "axios";
import { Link } from "@reach/router";

import "../styles/solution.css";

import NavBar from "../components/NavBar";

import SolutionRightImage from "../images/solution-globe.png";
import DiamondPlanImage from "../images/diamond-plan.png";
import rightArrow from "../images/cta-right-arrow.svg";
import EmeraldPlanImage from "../images/emerald-plan.png";
import TruckImage from "../images/truck-left.png";
import LogoLinesRight from "../images/logo-lines-right.png";
import SolutionTruck from "../images/solutions-trucks.svg";
import ConsultingRightImage from "../images/consulting-right.png";
import OTMTrademark from "../images/logo/otm-trademark.svg";

// const API_URL = "http://167.114.153.121:1337";

// const solutionsPageUrl = `${API_URL}/pages/5dff3f78aecfad34d76ee5c5`;

const Solutions = () => {
  // const [data, setData] = useState([]);
  // const [banner, setBanner] = useState([]);
  // const [bannerImage, setBannerImage] = useState([]);
  // const [solutionsIntro, setSolutionsIntro] = useState([]);
  // const [solutionsIntroImage, setSolutionsIntroImage] = useState([]);
  // const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    // axios.get(solutionsPageUrl).then((res) => {
    //   setData(res.data);
    //   setBanner(res.data.fields[0]);
    //   setBannerImage(API_URL + res.data.fields[0].background.url);
    //   setSolutionsIntro(res.data.fields[1].content[0]);
    //   setSolutionsIntroImage(API_URL + res.data.fields[1].content[0].icon.url);
    //   setSolutions(res.data.fields[2].content);
    // });

    document.getElementById("menuBackground").classList.remove("show");

  }, []);

  // if (process.browser) {
  //   if (location.hash === "#plans") {
  //     setTimeout(() => {
  //       document.getElementById("plans").scrollIntoView(true);
  //     }, 150);
  //   } else if (location.hash === "#solutions") {
  //     setTimeout(() => {
  //       document.getElementById("solutions").scrollIntoView(true);
  //     }, 150);
  //   } else {
  //     scrollTo(0, 0);
  //   }
  // }

  return (
    <div className="sticky-menu">
      <section className="otm-hero-light">
        <div className="container">
          <NavBar />
        </div>
      </section>
      {/* <div id="intro">
        <div
          className="jumbotron jumbotron-fluid pb-4 text-light"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: `cover`
          }}
        >
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>{banner.header}</h1>
              <p className="mx-auto w-50">{banner.subheader}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <Solution
            id={solutionsIntro._id}
            header={solutionsIntro.header}
            description={solutionsIntro.body}
            image={solutionsIntroImage}
            count={1}
          />
        </div>
        <div id="plans" style={{ paddingTop: "100px" }}>
          <div className="mx-auto py-5 font-weight-bold font-color text-center text-light bg-primary">
            THE PLANS GO HERE
          </div>
        </div>
        <div id="solutions" style={{ paddingTop: "100px" }}>
          <div className="container py-5">
            {solutions.map((solution, index) => (
              <Solution
                key={index}
                id={solution._id}
                header={solution.header}
                description={solution.body}
                image={API_URL + solution.icon.url}
                count={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      <section className="solution-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="hero-title text-center">
                <h2>Solutions</h2>
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
                  Solutions
            </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="solution-main">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 about-main-left">
              <div className="about-main-left-inner">
                <h2 className="section-title">Solutions</h2>
                <p className="section-desc">
                  OTM Dispatch provides professional dispatching and business
                  Services. Our professional dispatchers keep you loaded with the
                  best loads at the highest prices and will match a load with your
                  best resource to deliver it. OTM Dispatch is currently dispatching
                  Reefers, Dry Vans, Flatbeds, Car Haulers and Hotshots.
                </p>
                <p className="section-desc">
                  We will ensure that the motor carrier is in compliance with all
                  the FMCSA (Federal Motor Carrier Safety Administration) rules and
                  regulations to keep the carrier on the road pulling loads and
                  increasing profitability.
                </p>
                <p className="section-desc">
                  Our dispatchers can help you plan for and deal with weather
                  delays, traffic congestion and other issues that can cause delays
                  while you are on the road.
                </p>
                <p className="section-desc">
                  OTM Dispatch provides the highest level of customer service,
                  support, business solutions, and help you manage relationships
                  with shippers, address issues that arise, and set proper service
                  expectations.
                </p>
                <p className="section-desc">
                  At OTM Dispatch, we also handle the paperwork associated with
                  delivering and billing for the loads including all invoice
                  submissions to the broker and/or shipper or a factoring company,
                  collections follow-ups, and payment processing.
                </p>
                <Link to="/contact" className="btn btn-orange btn-shadow">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <img src={SolutionRightImage} alt="" className="about-main-img-right" />
      </section>
      <section className="otm-plans">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="plan-main-title">
                <small>OTM Dispatch Handles</small>
                <h4>
                  All The paperwork so you, <br /> can focus On your business!
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 offset-lg-2">
              <div className="plan-inner">
                <div className="plan-icon-wrapper">
                  <img src={DiamondPlanImage} alt="" />
                </div>
                <h4 className="plan-name">Diamond Plan</h4>
                <h4 className="plan-desc">
                  One Plan, <br /> <span>Solves Everything</span>
                </h4>
                <h3 className="plan-price">10%</h3>
                <small className="price-small-desc">of the load</small>
                <a href="#" className="plan-cta">
                  Find out more
                  <img src={rightArrow} alt="" className="cta-arrow" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="plan-inner">
                <div className="plan-icon-wrapper">
                  <img src={EmeraldPlanImage} alt="" />
                </div>
                <h4 className="plan-name">Emerald Plan</h4>
                <h4 className="plan-desc">
                  simple and Efficient, <br /> <span>Easy to Manage</span>
                </h4>
                <h3 className="plan-price">8%</h3>
                <small className="price-small-desc">of the load</small>
                <a href="#" className="plan-cta">
                  Find out more
                  <img src={rightArrow} alt="" className="cta-arrow" />
                </a>
              </div>
            </div>
          </div>
          {/* plan row end */}
          <div className="row plan-footer">
            <div className="col-12">
              <p>More than a service</p>
              <h4>
                You get the proper support that helps you <br /> unlock your real
                business potential.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="truck-permit">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-12 col-lg-7 about-main-left">
              <div className="about-main-left-inner">
                <h2 className="section-title">Truck Permits</h2>
                <p className="section-desc">
                  OTM Dispatch provides Business Consulting, Tax, and Accounting
                  Services nationwide to businesses in the transportation industry
                  such as Trucking and Motor Coach bus companies. We are offering
                  fuel and mileage tax reporting to all states as well as permitting
                  for all your requirements.
                </p>
                <p className="section-desc">WE SPECIALIZE IN:</p>
                <ul className="pl-4">
                  <li>US DOT and MC Numbers</li>
                  <li>IRP (Apportioned Tag Registrations)</li>
                  <li>IFTA License and Decals</li>
                  <li>2290 (Road Taxes)</li>
                  <li>Overweight, Oversize, Wide load &amp; Super load Permits</li>
                  <li>Trip, Fuel &amp; Mileage Permits</li>
                  <li>USDOT Compliance Audits</li>
                  <li>IFTA Quarterly Fuel Tax Returns</li>
                  <li>Fuel Tax audits</li>
                  <li>And much more</li>
                </ul>
                <Link to="/contact" className="btn btn-orange btn-shadow">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <img src={TruckImage} alt="" className="solution-truck" />
        <div className="section-divider section-divider-top" />
        <div className="section-divider section-divider-bottom" />
      </section>
      <section className="solution-main">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 about-main-left">
              <div className="about-main-left-inner">
                <h2 className="section-title">Tax Planning and Preparation</h2>
                <p className="section-desc">
                  We apply tax planning strategies for you to have more money to
                  save and invest or more money to spend. By offering tax planning
                  you could defer and flat out avoid taxes by taking advantage of
                  beneficial tax-law provisions, increasing and accelerating tax
                  deductions and tax credits. We help you make an informed decision
                  that you will be comfortable with while keeping compliance as a
                  critical component.
                </p>
                <p className="section-desc">
                  You can be confident that our firm provides our individual and
                  business clients with taxation expertise and knowledge that they
                  deserve year round. It is our goal to build a long-term
                  relationship that you can rely on when you need professional
                  assistance with a timely and a personal approach.
                </p>
                <p className="section-desc">
                  OUR TAX PLANNING &amp; PREPARATION ROLES INCLUDE,BUT ARE NOT
                  LIMITED TO:
                </p>
                <ul className="pl-4">
                  <li>
                    Tax Consulting, providing answers and solutions to everyday
                    business needs
                  </li>
                  <li>
                    Tax return preparation for Individuals, LLC’s, Corporations, and
                    Partnerships
                  </li>
                  <li>Multi-State Tax Return filings</li>
                  <li>Review of prior year’s tax returns</li>
                  <li>
                    IRS problem resolution for potential abatements, settlements or
                    payment options
                  </li>
                  <li>
                    Secure electronic storage of your tax returns and supporting
                    documents
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-orange btn-shadow">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={LogoLinesRight}
          alt=""
          className="about-main-img-right-logo"
        />
      </section>
      <section className="accounting-otm">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-12 col-lg-7 about-main-left">
              <div className="about-main-left-inner">
                <h2 className="section-title">Accounting and Bookkeeping</h2>
                <p className="section-desc">
                  OTM Dispatch is dedicated to provide the highest quality
                  accounting standards. We can prepare, examine, and analyze
                  financial records and make sure that those records are accurate
                  and that taxes are paid properly and on time. We provide advice
                  and recommend financial actions to help businesses run
                  efficiently.
                </p>
                <p className="section-desc">
                  Bookkeeping, we can provide the recording of your financial
                  transactions on a day to day basis by establishing a chart of
                  accounts. Those transactions include sales, purchases receipts and
                  payments by individuals or businesses along with reconciliation of
                  bank and credit card statements.
                </p>
                <Link to="/contact" className="btn btn-orange btn-shadow">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={SolutionTruck}
          alt=""
          className="solution-accounting"
        />
      </section>
      <section className="bussiness-consulting">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 about-main-left">
              <div className="about-main-left-inner">
                <h2 className="section-title">Business Consulting</h2>
                <p className="section-desc">
                  For more than 25 years, our team has provided quality tailored
                  accounting and consulting services to meet the needs of each
                  individual client.
                </p>
                <p className="section-desc">
                  Our Business Consultants provide expert advice in management
                  consulting to help organizations improve performance and
                  efficiency. Our professionals analyze businesses, provide
                  strategic planning and create solutions to help companies meet
                  their goals and maximize growth.
                </p>
                <p className="section-desc">
                  The success of our firm lies in the personal relationships we
                  build with our clients which is our primary focus. We strive to
                  offer the best services in tax, accounting and consulting for both
                  individuals and businesses.
                </p>
                <Link to="/contact" className="btn btn-orange btn-shadow">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={ConsultingRightImage}
          alt=""
          className="consulting-right-img"
        />
      </section>
      <section className="tax-debt-resolution">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-12 col-lg-7 about-main-left">
              <div className="about-main-left-inner">
                <h2 className="section-title">IRS Tax Debt Resolution</h2>
                <p className="section-desc">
                  At OTM Dispatch we serve clients nationwide to help solve both
                  federal and state tax problems.
                </p>
                <p className="section-desc">
                  Your case will be efficiently reviewed in a timely manner by our
                  tax professionals.
                </p>
                <p className="section-desc">
                  We provide personalized attention to the details of each case,
                  representing our clients in all negotiations with the IRS
                  including responding to IRS communications and pursuing procedural
                  and administrative remedies to attain the best outcome and relief
                  for our clients.
                </p>
                <p className="section-desc">
                  In most cases we are able to settle outstanding taxes, penalties
                  and accumulated interest for a fraction of the amount due and no
                  more threatening calls or letters giving you peace of mind,
                  especially knowing that you have a company that cares about your
                  present and future needs.
                </p>
                <p className="section-desc">
                  Our professionals will provide the solution to your IRS Tax Debt
                  including Filing Missing Tax Returns, IRS Offer in Compromise,
                  Payroll Tax Issues, Business Tax Resolution, Federal Tax Liens
                  &amp; Levies, and much more.
                </p>
                <Link to="/contact" className="btn btn-orange btn-shadow">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={OTMTrademark}
          alt=""
          className="solution-tax-logo"
        />
      </section>
    </div>
  );
};

export default Solutions;
