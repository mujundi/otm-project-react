import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router, Location } from "components/Router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

import "./app.css";

let onDashPage = location.pathname.indexOf("dashboard") !== -1;
console.log;
function App() {
  return (
    <Root>
      {!onDashPage && <NavBar />}
      <div className="content">
        <React.Suspense fallback={null}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      {!onDashPage && <Footer />}
    </Root>
  );
}

export default App;
