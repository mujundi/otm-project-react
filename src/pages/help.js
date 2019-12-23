import React from "react";
import QuestionList from "../components/QuestionList";
import scrollIntoView from "scroll-into-view-if-needed";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default () => {
  if (process.browser) {
    if (location.hash === "#help") {
      setTimeout(() => {
        document.getElementById("help").scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }
  }

  return (
    <div>
      {/* <NavBar /> */}
      <div className="container mt-5" id="faqs">
        <h2 className="text-center">Frequently Asked Questions:</h2>
        <QuestionList />
      </div>
      <br></br>
      <hr></hr>
      <div className="container my-5 text-center" id="help">
        <h2 className="mb-5">Have more questions?</h2>
        <button type="button" className="btn btn-primary btn-lg mb-5">
          Get Help
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
