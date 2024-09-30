import React, { Component } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

class CaptchaTest extends Component {
   componentDidMount() {
      loadCaptchaEnginge(6); 
   };

   doSubmit = () => {
       let user_captcha = document.getElementById('user_captcha_input').value;

       if (validateCaptcha(user_captcha) === true) {
           alert('Captcha Matched');
           loadCaptchaEnginge(6); 
           document.getElementById('user_captcha_input').value = "";
       } else {
           alert('Captcha Does Not Match');
           document.getElementById('user_captcha_input').value = "";
       }
   };

   render() {
       return (
           <div className="captcha-container">
               <div className="captcha-header">CAPTCHA</div>
               <LoadCanvasTemplate />
               <input 
                   className="captcha-input"
                   placeholder="Enter Captcha Value"
                   id="user_captcha_input"
                   name="user_captcha_input" 
                   type="text"
               />
               <button 
                   className="captcha-button"
                   onClick={this.doSubmit}>
                   Submit
               </button>
           </div>
       );
   };
}

export default CaptchaTest;