import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import ParticlesBg from "particles-bg";

import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { PiUserCircleFill } from "react-icons/pi";
import io from "socket.io-client";
// import { AnimatePresence } from "framer-motion";
const socket = io("http://127.0.0.1:5000", {
  transports: ["websocket"], // Use WebSocket transport
  withCredentials: true, // Send credentials (cookies) with requests
});
const allowedDomainExtensions = [".com", ".in", ".edu", ".org", ".net", ".gov"];

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [domainError, setDomainError] = useState("");
  const [loading, setLoading] = useState(false);
  // const toast = useToast();
  const [responseData, setResponseData] = React.useState("");

  useEffect(() => {
    const checkAndRedirect = () => {
      const storedValue = localStorage.getItem("prediction");

      if (storedValue && parseFloat(storedValue) >= 0.7) {
        window.location.href = "/captcha-test";
      }
    };

    checkAndRedirect();
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const isValidDomainExtension = (email) => {
    return allowedDomainExtensions.some((extension) =>
      email.endsWith(extension)
    );
  };

  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setFormData({ ...formData, email: emailInput });

    if (!isValidDomainExtension(emailInput)) {
      setDomainError("Email domain extension is not allowed");
    } else {
      setDomainError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response", response);
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!!");
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log("success");
      window.location.href = "/home";
    } catch (error) {
      console.error("Error logging in user:", error);
      toast.error("Login failed ! please try again !");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("registration successful!!");
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log("success");

      toggleForm();
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("registration failed ! please try again !");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const mouseData = { x: clientX, y: clientY, timestamp: Date.now() };

      console.log("Mouse Data: ", mouseData);

      // Send data to the Socket.io server

      socket.emit("mouse_data", mouseData);

      socket.on("response1", (data) => {
        // console.log('Data received from server:', data);
        setResponseData(data.data); // Store the received data in state
        // if(localStorage.getItem('prediction') === null){
        localStorage.setItem("prediction", data?.prediction); // Store the received data in local storage
        // }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="rounded-xl"
      style={{
        margin: "0",
        padding: "0",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#053d48",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ParticlesBg
        type="fountain"
        bg={{ zIndex: 0, position: "absolute", top: 0 }}
      />
      <Toaster position="bottom-right" />
      <div
        className="rounded-3xl"
        style={{
          background:
            "linear-gradient(to right, rgb(25, 60, 71), rgb(80, 140, 85), rgb(25, 60, 71))",
          width: "600px",
          height: "320px",
          display: "flex",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            position: "relative",
          }}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
              fontWeight: "500",
              fontSize: "20px",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              marginRight: "40px",
            }}
          >
            <PiUserCircleFill size={80} />
            <p className="text-3xl my-6">Don't have an account?</p>
            <div
              className="bg-transparent hover:bg-white hover:text-black rounded-xl outline-none focus:outline-none"
              style={{
                cursor: "pointer",
                width: "90px",
                padding: "6px 10px",
                border: "1px solid white",
                fontSize: "16px",
                opacity: 1,
                textAlign: "center",
              }}
              onClick={toggleForm}
            >
              Sign Up
            </div>
          </div>
          <div
            style={{
              height: "auto",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              zIndex: 0,
              bottom: "30px",
            }}
          ></div>
          <div
            style={{
              color: "white",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
              fontWeight: "500",
              fontSize: "20px",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              marginLeft: "40px",
            }}
          >
            <PiUserCircleFill size={80} />
            <p className="text-3xl my-8">Already a User?</p>
            <button
              className="bg-transparent hover:bg-white hover:text-black rounded-xl outline-none focus:outline-none"
              style={{
                cursor: "pointer",
                width: "90px",
                padding: "6px 10px",
                border: "1px solid white",
                fontSize: "16px",
                opacity: 1,
                textAlign: "center",
              }}
              onClick={toggleForm}
            >
              Log In
            </button>
          </div>
        </div>
        <div
          className="rounded-3xl"
          style={{
            marginLeft: isSignUp ? "275px" : "25px",
            backgroundColor: "white",
            height: "380px",
            width: "305px",
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "absolute",
            transition: "margin-left 1.5s",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: 0,
              top: "-75px",
            }}
          ></div>
          <div
            className="rounded-3xl"
            style={{
              zIndex: 2,
              position: "relative",
              paddingBottom: "5px",
              height: "1100px",
            }}
          >
            <div className="flex justify-center mt-20">
              <img
                className="animate-bounce"
                src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg?semt=ais_hybrid"
                alt="Bot"
                style={{
                  width: "75px",
                  height: "auto",
                  visibility: "visible",
                  position: "absolute",
                  top: "22px",
                }}
              />
            </div>
            <form
              style={{
                display: isSignUp ? "none" : "block",
                marginTop: "30px",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                onChange={handleEmailChange}
                value={formData.email}
                variant="outlined"
                error={!!domainError}
                helperText={domainError}
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
                InputProps={{
                  style: { color: "black", fontSize: "15px" },
                }}
              />
              <FormControl
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirm-password"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
              <div className="flex justify-center">
                <button
                  className="rounded-xl"
                  type="submit"
                  style={{
                    backgroundColor: "#053d48",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginTop: "15px",
                  }}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
            <form
              style={{
                display: isSignUp ? "block" : "none",
                marginTop: "30px",
              }}
            >
              <TextField
                id="outlined-basic2"
                label="Email"
                name="email"
                onChange={handleEmailChange}
                value={formData.email}
                variant="outlined"
                error={!!domainError}
                helperText={domainError}
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
                InputProps={{
                  style: { color: "black", fontSize: "15px" },
                }}
              />
              <FormControl
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password2">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password2"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <div className="flex justify-center">
                <button
                  onClick={handleLogin}
                  className="rounded-xl"
                  type="submit"
                  style={{
                    backgroundColor: "#053d48",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginTop: "15px",
                  }}
                >
                  {loading ? "Logging In..." : "Log In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
