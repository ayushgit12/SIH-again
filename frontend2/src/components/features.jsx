import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Features = (props) => {


  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
})

  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2 className='text-6xl font-semibold'>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div data-aos="fade-right" 
              
                 key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  
                  <i className={d.icon}></i>
                  <h3 className='text-3xl font-semibold my-6'>{d.title}</h3>
                  <p className='text-2xl'>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
