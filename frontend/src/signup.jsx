import { transform } from "framer-motion";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useRef } from "react";
import { Password } from 'primereact/password';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ParticlesBg from "particles-bg";


        


const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const passwordRef = useRef(null);
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (

    
    <div
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
      <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
      <div
        style={{
          background: "linear-gradient(to right, rgb(25, 60, 71), rgb(80, 140, 85), rgb(25, 60, 71))",
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
            <p>Have an account?</p>
            <div
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                width: "90px",
                padding: "10px 15px",
                border: "1px solid white",
                fontSize: "16px",
                opacity: 1,
                textAlign: "center",
              }}
              onClick={toggleForm}
            >
              Log In
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
          >
            
           
          </div>
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
            <p>Don't have an account?</p>
            <div
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                width: "90px",
                padding: "10px 15px",
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
        </div>
        <div
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
          >
            
          </div>
          <div style={{ zIndex: 2, position: "relative", paddingBottom:"5px", height : "700px" }}>
            <div className="flex justify-center mt-20">
          <img
          className="animate-bounce"
              src="/Users/dhruvagrawal/sih_bot/sih_bot/frontend2/public/bot2.png"
              alt="Bot"
              style={{
                width: "92px",
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
            >
              <TextField id="outlined-basic" label="Username" variant="outlined" sx={{ m: 1, width: '250px', marginTop : '5px', marginBottom : '10px', marginLeft : '25px', marginRight : '5px', }} />
                <FormControl sx={{ m: 1, width: '250px', marginTop : '5px', marginBottom : '10px', marginLeft : '25px', marginRight : '5px', 
                 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
             
              <div
                style={{
                  cursor: "pointer",
                  display: "block",
                  padding: "10px",
                  width: "250px",
                  margin: "5px",
                  marginLeft: "25px",
                  textAlign: "center",
                  
                  background: "linear-gradient(to right, rgb(25, 60, 71), rgb(80, 140, 85))",
                  color: "white",
                  opacity: 1,
                }}
              >
                Log in
              </div>
            </form>
            <form
              style={{
                display: isSignUp ? "block" : "none",
                marginTop: "30px",
              }}
            >
              <TextField id="outlined-basic" label="Username" variant="outlined" sx={{ m: 1, width: '250px', marginTop : '5px', marginBottom : '10px', marginLeft : '25px', marginRight : '5px', }} />
             <FormControl sx={{ m: 1, width: '250px', marginTop : '5px', marginBottom : '10px', marginLeft : '25px', marginRight : '5px',}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
        <FormControl sx={{ m: 1, width: '250px', marginTop : '5px', marginBottom : '10px', marginLeft : '25px', marginRight : '5px', }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
              <div
                style={{
                  cursor: "pointer",
                  display: "block",
                  padding: "10px",
                  width: "250px",
                  marginLeft: "25px",
                  marinLeft : "25px",
                  textAlign: "center",
                  
                  background:" linear-gradient(to right, rgb(80, 140, 85), rgb(25, 60, 71))",
                  color: "white",
                  opacity: 1,
                }}
              >
                Sign Up
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;