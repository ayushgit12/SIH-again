import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaptchaTest from "./components/Captcha.jsx";
import CombinedVerificationDemo from "./components/combined.jsx";
import Contact from "./components/contact.jsx";
import Home from "./components/home.jsx";
import SignUp from "./components/signup.jsx";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const token = localStorage.getItem("token");
  const a = token;
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      {/* <GlobalMouseTracker /> */}
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Gallery />
                <Testimonials data={landingPageData.Testimonials} />
              </>
            }
          />
          <Route path="/captcha-test" element={<CaptchaTest />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/comb" element={<CombinedVerificationDemo />} />
          {/* {token && <Route path="/home" element={<Home />} />} */}
          {a ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/home" element={<SignUp />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
