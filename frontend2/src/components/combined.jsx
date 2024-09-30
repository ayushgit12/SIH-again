import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import ParticlesBg from "particles-bg";

const CombinedVerificationDemo = () => {
  const [trail, setTrail] = useState([]);
  const [trackedData, setTrackedData] = useState([]);
  const scrollRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    // Calculate the relative position within the Paper component
    const boundingRect = event.currentTarget.getBoundingClientRect();
    const relativeX = clientX - boundingRect.left;
    const relativeY = clientY - boundingRect.top;

    setTrail((prevTrail) => [
      ...prevTrail,
      { x: relativeX, y: relativeY, timestamp: Date.now() },
    ]);
    setTrail((prevTrail) =>
      prevTrail.filter((point) => Date.now() - point.timestamp < 200)
    );

    setTrackedData((prevData) => [
      ...prevData,
      { type: "mouseMove", position: { x: relativeX, y: relativeY } },
    ]);
  };

  const handleClear = () => {
    setTrackedData([]);
    setTrail([]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [trackedData]);

  return (
    <Box sx={{ padding: 12, textAlign: "center" }}>
      <ParticlesBg type="cobweb" bg={true} />
      <Typography variant="h3" sx={{ marginBottom: 8 }}>
        <b>Data Visualization</b>
      </Typography>

      <Typography variant="h4" sx={{ marginBottom: 12 }}>
        <b>Mouse Movement Tracking Demo</b>
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {/* Mouse Trail Visualization Section */}
        <Grid item xs={10} md={8}>
          <Paper
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              height: "400px",
              position: "relative",
              overflow: "hidden",
              marginBottom: 4,
              backgroundColor: "#f5f5f5",
            }}
            onMouseMove={handleMouseMove}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Mouse Trail Area
            </Typography>
            <svg
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              {trail.map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="3"
                  fill="rgba(0, 150, 255, 0.5)"
                />
              ))}
            </svg>
          </Paper>
        </Grid>

        <Grid item xs={10} md={4} className="relative">
          <Paper
            ref={scrollRef}
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              height: "400px",
              overflowY: "auto",
              backgroundColor: "#f5f5f5",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              className="relative z-10 bg-gray-50 left-0 top-0"
              sx={{ marginBottom: 2 }}
            >
              Mouse Coordinates
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0, flexGrow: 1 }}>
              {trackedData.map((data, index) => (
                <li key={index} style={{ marginBottom: "5px" }}>
                  {data.type} - Position: (X: {data.position.x}, Y:{" "}
                  {data.position.y})
                </li>
              ))}
            </ul>
            {trackedData.length > 0 && (
              <Button
                variant="contained"
                onClick={handleClear}
                sx={{ alignSelf: "center", marginTop: 2 }}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  hover: { backgroundColor: "black", color: "white" },
                }}
              >
                Clear
              </Button>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CombinedVerificationDemo;
