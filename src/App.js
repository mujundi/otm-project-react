import React, { useEffect, useState } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router, Location } from "components/Router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

import "./app.css";
import scrollIntoView from "scroll-into-view-if-needed";

const App = () => {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={null}>
          <NavBar />
          <Router>
            <Routes path="/contact" />
            <Routes path="/company" />
            <Routes path="/solutions" />
            <Routes path="/help" />
            <Routes path="/legal" />
            <Routes path="/privacy" />
            <Routes path="/careers" />
            <Routes path="/" />
            <Routes path="/*" />
          </Router>
          <Footer />
        </React.Suspense>
      </div>
    </Root>
  );
};

export default App;
