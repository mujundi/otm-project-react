import React from "react";

export default (props) => (
  <div className="panel panel-default">
    <div
      className="panel-heading p-3 mb-3"
      role="tab"
      id={"heading" + props.id}
    >
      <h5 className="panel-title">
        <a
          className="collapsed"
          role="button"
          title=""
          data-toggle="collapse"
          data-parent="#accordion"
          href={"#collapse" + props.id}
          aria-expanded="true"
          aria-controls={"collapse" + props.id}
        >
          {props.question}
        </a>
      </h5>
    </div>
    <div
      id={"collapse" + props.id}
      className="panel-collapse collapse"
      role="tabpanel"
      aria-labelledby={"heading" + props.id}
    >
      <div className="panel-body px-3 mb-5">
        <p>{props.answer}</p>
      </div>
    </div>
  </div>
);
