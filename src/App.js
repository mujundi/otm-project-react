import React, { useEffect, useState } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Link, Router, Location } from "components/Router";
import Footer from "components/Footer";

import "./app.css";
import scrollIntoView from "scroll-into-view-if-needed";

const App = () => {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={null}>
          <Router>
            <Routes path="/contact" />
            <Routes path="/company" />
            <Routes path="/services" />
            <Routes path="/solutions" />
            <Routes path="/help" />
            <Routes path="/legal" />
            <Routes path="/privacy" />
            <Routes path="/partnership" />
            <Routes path="/" />
            <Routes path="/*" />
          </Router>
          <Footer />
          <div className="menu-background" id="menuBackground"></div>
        </React.Suspense>
      </div>
    </Root>
  );
};

export default App;
