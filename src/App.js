import React, { useEffect, useState } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router, Location } from "components/Router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

import "./app.css";
import scrollIntoView from "scroll-into-view-if-needed";

let onDashPage = location.pathname.indexOf("dashboard") !== -1;

const App = () => {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={null}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
};

export default App;
