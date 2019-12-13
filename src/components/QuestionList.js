import React from "react";
import Question from "./Question";

export default () => (
  <section
    className="accordion-section clearfix mt-3"
    aria-label="Question Accordions"
  >
    <div className="container text-muted">
      <div
        className="panel-group"
        id="accordion"
        role="tablist"
        aria-multiselectable="false"
      >
        <ul className="pt-4">
          <li>
            <Question id="0" />
          </li>
          <li>
            <Question id="1" />
          </li>
          <li>
            <Question id="2" />
          </li>
          <li>
            <Question id="3" />
          </li>
        </ul>
      </div>
    </div>
  </section>
);
