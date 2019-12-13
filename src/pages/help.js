import React from "react";
import QuestionList from "../components/QuestionList";

export default () => (
  <div>
    <div className="container my-5" id="faqs">
      <h2 className="text-center">Frequently Asked Questions:</h2>
      <QuestionList />
    </div>
    <br></br>
    <hr></hr>
    <div className="container mt-5 text-center" id="help">
      <h2 className="mb-5">Have more questions?</h2>
      <button type="button" className="btn btn-primary btn-lg">
        Get Help
      </button>
    </div>
  </div>
);
