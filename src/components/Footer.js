import React from "react";
import { Link } from "@reach/router";

export default () => (
  <footer className="fixed-bottom text-center bg-dark align-middle text-secondary py-0">
    {/* Use <Link to=""> instead of <a href=""> for 
    navigating to pages within the React app. 
    Two examples below.*/}
    <Link to="/" className="m-1">
      Home
    </Link>
    <Link to="/contact" className="m-1">
      Contact
    </Link>
  </footer>
);
