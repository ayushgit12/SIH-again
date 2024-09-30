import ParticlesBg from "particles-bg";
import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="lines"
          bg={{ zIndex: 0, position: "absolute", top: 0 }}
        />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
                <a href="/signup" className="btn btn-custom btn-lg page-scroll">
                  Enter Site
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
