import React from "react";

export default (props) => {
  const solutionTemplate = () => {
    let textPosition = props.count % 2 ? "left" : "right";

    let textTemplate = (
      <div className="col-sm-7 my-3 px-5 text-left">
        <div>
          <h4>{props.header}</h4>
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
        </div>
        <button className="btn btn-primary mt-3">Contact Us</button>
      </div>
    );

    let imageTemplate = (
      <div
        className="col-sm-5 d-sm"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: `cover`
        }}
      ></div>
    );

    if (textPosition === "left") {
      return (
        <div className="row mt-5 mb-5 mx-auto">
          {textTemplate}
          {imageTemplate}
        </div>
      );
    } else {
      return (
        <div className="row mt-5 mb-5 mx-auto">
          {imageTemplate}
          {textTemplate}
        </div>
      );
    }
  };

  return solutionTemplate();
};
