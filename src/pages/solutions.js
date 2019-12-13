import React from "react";
import Solution from "../components/Solution";
import Scroll from "../components/ScrollToHash";

export default () => (
  <div>
    <Scroll id={"shippers"}>
      <div id="shippers">
        <div className="jumbotron jumbotron-fluid pb-4">
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>For Shippers</h1>
              <p className="mx-auto w-50">
                To learn more, please contact us via the contact page, or call
                us at 1-800-555-5555.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 mb-5">
            <Solution />
            <Solution />
            <Solution />
          </div>
          <div className="row mt-5 mb-5">
            <Solution />
            <Solution />
            <Solution />
          </div>
        </div>
      </div>
    </Scroll>
    <Scroll id={"carriers"}>
      <div id="carriers">
        <div className="jumbotron jumbotron-fluid pb-4">
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>For Carriers</h1>
              <p className="mx-auto w-50">
                To learn more, please contact us via the contact page, or call
                us at 1-800-555-5555.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 mb-5">
            <Solution />
            <Solution />
            <Solution />
          </div>
          <div className="row mt-5 mb-5">
            <Solution />
            <Solution />
            <Solution />
          </div>
        </div>
      </div>
    </Scroll>
  </div>
);
