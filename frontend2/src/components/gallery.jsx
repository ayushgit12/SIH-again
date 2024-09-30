import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import video1 from "../assets/canva3-small.mp4";
import video2 from "../assets/newvideo3.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

export const Gallery = () => {
  const [playVideo1, setPlayVideo1] = useState(false);
  const [playVideo2, setPlayVideo2] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const hasPlayedRef1 = useRef(false);
  const hasPlayedRef2 = useRef(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasPlayedRef1.current) {
          setPlayVideo1(true);
          hasPlayedRef1.current = true; // Prevent the video from playing again
        }
      },
      { threshold: 0.5 } // Adjust this value to determine when to trigger
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasPlayedRef2.current) {
          setPlayVideo2(true);
          hasPlayedRef2.current = true; // Prevent the video from playing again
        }
      },
      { threshold: 0.5 } // Adjust this value to determine when to trigger
    );

    if (videoRef1.current) {
      observer1.observe(videoRef1.current);
    }

    if (videoRef2.current) {
      observer2.observe(videoRef2.current);
    }

    return () => {
      if (videoRef1.current) {
        observer1.unobserve(videoRef1.current);
      }
      if (videoRef2.current) {
        observer2.unobserve(videoRef2.current);
      }
    };
  }, []);

  const videoStyle1 = {
    transform: isHovered1 ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
    borderRadius: "32px",
    height: "500px",
    width: "500px",
    border: "2px solid black",
  };

  const videoStyle2 = {
    transform: isHovered2 ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
    borderRadius: "32px",
    height: "500px",
    width: "500px",
    border: "2px solid black",
  };

  return (
    <div
      id="portfolio"
      className="text-center"
      style={{
        display: "flex",
        margin: "0px 20px 0px 100px",
        justifyContent: "center",
      }}
    >
      <div
        className="h-fit w-fit"
        ref={videoRef1}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        data-aos="fade-right"
      >
        <ReactPlayer
          url={video1}
          height="500px"
          width="500px"
          loop={false} // Play video only once
          playing={playVideo1}
          muted={true}
          controls={false}
          style={videoStyle1}
        />
      </div>
      <div
        className="h-fit w-fit"
        ref={videoRef2}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        style={{
          height: "500px",
          width: "500px",
          backgroundColor: "none",
          margin: "0px 0px 0px 50px",
        }}
        data-aos="fade-left"
      >
        <ReactPlayer
          url={video2}
          height="100%"
          width="100%"
          loop={false} // Play video only once
          playing={playVideo2}
          muted={true}
          controls={false}
          style={videoStyle2}
        />
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Link
            to="/comb"
            style={{
              textDecoration: "none",
              color: "#007BFF",
              fontWeight: "bold",
              fontSize: "18px",
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
              transition: "color 0.4s ease, transform 0.3s ease-in-out",
              transformOrigin: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotate(360deg) scale(1.3)";
              e.currentTarget.style.color = "seagreen"; // Change color on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotate(0deg) scale(1)";
              e.currentTarget.style.color = "#007BFF"; // Revert color on hover out
            }}
            onClick={(e) => {
              const target = e.currentTarget;
              const rect = target.getBoundingClientRect();
              const ripple = document.createElement("span");

              ripple.style.width =
                ripple.style.height = `${Math.max(rect.width, rect.height) * 2}px`;
              ripple.style.left = `${e.clientX - rect.left - rect.width}px`;
              ripple.style.top = `${e.clientY - rect.top - rect.height}px`;
              ripple.style.position = "absolute";
              ripple.style.borderRadius = "50%";
              ripple.style.background = "rgba(0, 123, 255, 0.3)";
              ripple.style.transform = "scale(0)";
              ripple.style.animation = "ripple 0.6s linear";
              ripple.style.pointerEvents = "none";

              target.appendChild(ripple);

              setTimeout(() => {
                ripple.remove();
              }, 600);

              target.style.color = "#0056b3"; // Change color on click

              // Reset the color after a delay
              setTimeout(() => {
                target.style.color = "#007BFF";
              }, 400);
            }}
          >
            Try it
          </Link>
        </div>
      </div>
    </div>
  );
};
