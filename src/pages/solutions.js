import React, { useEffect, useState } from "react";
import Solution from "../components/Solution";
import axios from "axios";
import NavBar from "../components/NavBar";

const API_URL = "http://167.114.153.121:1337";

const solutionsPageUrl = `${API_URL}/pages/5dff3f78aecfad34d76ee5c5`;

const Solutions = () => {
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState([]);
  const [bannerImage, setBannerImage] = useState([]);
  const [solutionsIntro, setSolutionsIntro] = useState([]);
  const [solutionsIntroImage, setSolutionsIntroImage] = useState([]);
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    axios.get(solutionsPageUrl).then((res) => {
      setData(res.data);
      setBanner(res.data.fields[0]);
      setBannerImage(API_URL + res.data.fields[0].background.url);
      setSolutionsIntro(res.data.fields[1].content[0]);
      setSolutionsIntroImage(API_URL + res.data.fields[1].content[0].icon.url);
      setSolutions(res.data.fields[2].content);
    });
  }, []);

  if (process.browser) {
    if (location.hash === "#plans") {
      setTimeout(() => {
        document.getElementById("plans").scrollIntoView(true);
      }, 150);
    } else if (location.hash === "#solutions") {
      setTimeout(() => {
        document.getElementById("solutions").scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }
  }

  return (
    <div className="sticky-menu">
      <section className="otm-hero-light">
        <div className="container">
          <NavBar />
        </div>
      </section>
      <div id="intro">
        <div
          className="jumbotron jumbotron-fluid pb-4 text-light"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: `cover`
          }}
        >
          <div className="container">
            <div className="mx-auto my-auto text-center">
              <h1>{banner.header}</h1>
              <p className="mx-auto w-50">{banner.subheader}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <Solution
            id={solutionsIntro._id}
            header={solutionsIntro.header}
            description={solutionsIntro.body}
            image={solutionsIntroImage}
            count={1}
          />
        </div>
        {/* Added 100px padding to the div holding the anchors for scrolling, to compensate for the height of the sticky navbar */}
        <div id="plans" style={{ paddingTop: "100px" }}>
          <div className="mx-auto py-5 font-weight-bold font-color text-center text-light bg-primary">
            THE PLANS GO HERE
          </div>
        </div>
        <div id="solutions" style={{ paddingTop: "100px" }}>
          <div className="container py-5">
            {solutions.map((solution, index) => (
              <Solution
                key={index}
                id={solution._id}
                header={solution.header}
                description={solution.body}
                image={API_URL + solution.icon.url}
                count={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
