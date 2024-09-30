import React from 'react'
import '../index.css'
import { FaPython } from 'react-icons/fa'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPytorch } from "react-icons/si";

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
        <h2 className='text-6xl font-semibold'>Our Tech Stack</h2>
          <p className='text-black text-4xl mt-10'>
            We have worked upon this website using the following technologies.
          </p>
        </div>
        <div className='flex flex-wrap gap-20 md:mx-80 justify-center'>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><FaPython size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>PYTHON</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><FaHtml5 size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>HTML5</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><FaCss3Alt size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>CSS3</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa'><SiJavascript size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>JAVASCRIPT</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><FaReact size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>REACT JS</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><SiExpress size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>EXPRESS JS</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><FaNodeJs size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>NODE JS</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><SiMongodb size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>MONGO DB</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><SiScikitlearn size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>SCIKIT-LEARN</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><SiNumpy size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>NUMPY</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><RiTailwindCssFill size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>TAILWINDCSS</p>
          </div>
          <div className='w-84 flex flex-col justify-center'>
            <i className='fa relative'><SiPytorch size={50} className='mx-auto' /></i>
            <p className='text-3xl text-center mt-10'>PYTORCH</p>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}
