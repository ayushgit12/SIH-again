import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 850); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsScrolled(false); // Reset scroll state when route changes
  }, [location]);

  const isHomeRoute = location.pathname === "/";

  // Inline styles for navigation bar
  const navStyle = {
    backgroundColor: isScrolled || !isHomeRoute ? "white" : "transparent",
    color: isScrolled || !isHomeRoute ? "black" : "white",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  // Inline styles for links
  const linkStyle = {
    color: isScrolled || !isHomeRoute ? "black" : "white",
  };

  return (
    <nav id="menu" className="navbar navbar-default" style={navStyle}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="/" style={linkStyle}>
            BOTPROOF
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/comb" className="page-scroll" style={linkStyle}>
                Visuals
              </a>
            </li>
            <li>
              <a href="/#features" className="page-scroll" style={linkStyle}>
                Features
              </a>
            </li>
            <li>
              <a href="/#about" className="page-scroll" style={linkStyle}>
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="page-scroll" style={linkStyle}>
                Tech Stack
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="page-scroll" style={linkStyle}>
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/#testimonials"
                className="page-scroll"
                style={linkStyle}
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
