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
          What would a sample answer look like?
        </a>
      </h5>
    </div>
    <div
      id={"collapse" + props.id}
      className="panel-collapse collapse"
      role="tabpanel"
      aria-labelledby={"heading" + props.id}
    >
      <div className="panel-body px-3 mb-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at
          consectetur lorem donec massa sapien faucibus et molestie. Consectetur
          adipiscing elit ut aliquam purus sit amet luctus venenatis:
        </p>
        <ul>
          <li>
            Ullamcorper malesuada proin libero nunc consequat interdum varius.
          </li>
          <li>
            Fames ac turpis egestas maecenas. Pellentesque habitant morbi
            tristique senectus et netus et malesuada.
          </li>
          <li>
            Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
            fermentum odio. Scelerisque mauris pellentesque pulvinar
            pellentesque habitant morbi tristique senectus et.
          </li>
        </ul>
      </div>
    </div>
  </div>
);
