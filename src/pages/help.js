import React from "react";
import QuestionList from "../components/QuestionList";
import NavBar from "../components/NavBar";
import { Link } from "@reach/router";

export default () => {
  if (process.browser) {
    if (location.hash) {
      setTimeout(() => {
        document.getElementById(location.hash.replace('#', '')).scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }
  }

  document.getElementById("menuBackground").classList.remove("show");

  return (
    <div className="sticky-menu">
      <section className="otm-hero-light">
        <div className="container">
          <NavBar />
        </div>
      </section>
      <div className="otm-breadcrumb" id="about">
        <div className="container">
          <div className="otm-breadcrumb-inner">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  FAQs
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mt-5" id="faqs">
        <h2 className="text-center">Frequently Asked Questions:</h2>
        <QuestionList />
      </div>
      <br></br>
      <hr></hr>
      <div
        className="container my-5 text-center"
        id="help"
        style={{ paddingTop: "100px" }}
      >
        <h2 className="mb-5">Have more questions?</h2>
        <button type="button" className="btn btn-primary btn-lg mb-5 questions-btn">
          Get Help
        </button>
      </div>
    </div>
  );
};
