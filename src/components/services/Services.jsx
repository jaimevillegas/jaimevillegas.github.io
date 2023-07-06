import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Responsive Web Design:</b> Creation of websites that are optimized for various devices and screen sizes, providing a seamless user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Front-End Development:</b> Build interactive and visually appealing user interfaces using HTML, CSS, JavaScript and React.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Back-End Development:</b> Build robust server-side logic and databases using Ruby on Rails and PostgreSQL.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>API Development and Integration:</b> Build and integrate APIs (Application Programming Interfaces) to enable efficient data exchange and communication between different systems.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Website Maintenance and Support:</b> Provide reliable website maintenance, bug fixes, security updates, and technical support to ensure the ongoing smooth operation of websites.</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>CAD Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>2D Drafting:</b> Creation of accurate and detailed 2D technical drawings and plans.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>3D Modelling:</b> Creation of 3D models of machinery parts, products, mechanical parts and 3D printing models.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Product Design:</b> Expertise in designing and developing new products using CAD software, ensuring functionality, aesthetics, and manufacturability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>3D Rendering and visualization:</b> I can provide high-quality 3D renderings and visualizations of CAD models, bringing designs to life and helping clients visualize the final product.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Technical Drawing Generation for Manufacturing:</b> I specialize in creating detailed technical drawings and documentation that are ready for manufacturing processes. This includes producing accurate dimensions, annotations, tolerances, and specifications required by manufacturers to produce the designed product. </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mechatronics</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>System Design and Integration:</b> I specialize in designing and integrating complex mechatronic systems by combining mechanical, electrical, and control engineering principles.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Robotics and Automation:</b> I possess expertise in designing and developing robotic systems and automation solutions for various industries, optimizing efficiency and productivity.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Sensor Integration and Data Acquisition:</b> I have experience in integrating sensors and acquiring data from various sources, enabling real-time monitoring and feedback for precise control.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Embedded Systems Development:</b> I offer services in developing embedded systems for mechatronic applications, including microcontroller programming, firmware development, and interfacing with sensors and actuators.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p><b>Industrial IoT (Internet of Things):</b> I possess knowledge in implementing IoT solutions for industrial applications, enabling connectivity, data analysis, and remote monitoring of mechatronic systems.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services