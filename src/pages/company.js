import React from "react";
import Service from "../components/Service";

export default () => (
  <div>
    <div id="about">
      <div className="jumbotron jumbotron-fluid pb-4">
        <div className="container">
          <div className="mx-auto my-auto text-center">
            <h1>About us</h1>
            <p className="mx-auto w-50">Placeholder motto or phrase here.</p>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h3>Our Beginnings</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Our Team</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Our Priorities</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div id="services">
      <div className="jumbotron jumbotron-fluid pb-4">
        <div className="container">
          <div className="mx-auto my-auto text-center">
            <h1>Services</h1>
            <p className="mx-auto w-50">Based out of Orlando, FL.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <Service />
          <Service />
        </div>
        <div className="row mt-5 mb-5">
          <Service />
          <Service />
        </div>
      </div>
    </div>
  </div>
);
