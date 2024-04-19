import React from 'react';
import blood from './blood ab.webp';
import { Link } from "react-router-dom";
import "./Aboutus.css";
import core from './core.jpg'

const About = () => {
  return (
    <section>
    <div className='about'>
      <div className="test-card">
              <div className="card2" >
                  <div className="card-head2">
                  <img id="img" src={blood} alt="blood" />
                      
                  </div>

              </div>

              <div className="card2" >
                  <div className="card-head2">
                  
                      <h5 style={{color: 'white'}}>About Us</h5>
                      <h2 style={{color: 'white'}}><b>We're in a</b> mission!</h2>
                      <p style={{ color: 'white' }}>Our mission is to provide the best solutions for our customers and make a positive impact on the world.
          We value innovation, teamwork, and excellence in everything we do, and also oue Mission is to bring volunteers and organisations together to share time, skills and passion to promote India
          social development. </p>
                      <p style={{ color: 'white' }}>If you have any questions or would like to get in touch with us, please don't hesitate to contact us
          using the information provided on our<Link to={"/Contact"}>Contact</Link> page.</p>
                      <p style={{ color: 'white' }}><b>You can Contact via Call or Email anytime, anywhere.</b></p>
                      <p style={{ color: 'white' }}>Thank You</p>
                  </div>

              </div>
        </div>

        <div className="test-card1">
              <div className="card3" >
                  <div className="card-head3">
                  <h5 style={{color: 'White'}}>Innovation</h5>
                      <p style={{ color: 'white' }}>For us, this means creating opportunities and creative solutions: we will continue to identify and explore 
                      unchatered opportunities for growth and sustainability, mitigate risks,and provide the best social services that we can. </p>
                      <h5 style={{color: 'White'}}>Respect</h5>
                      <p style={{ color: 'white' }}>We all serve with respect,honouring the people we serve, our communities, partners and one another. We will highly
                      value the relationships we build with our communities, partners, stakeholders and each other. </p>
                      <h5 style={{color: 'White'}}>Integrity</h5>
                      <p style={{ color: 'white' }}>We will be consistent, honest,accountable and transparent in what we say and do.
                      We will safeguard the Integrity and dignity of those we serve. </p>
                      <h5 style={{color: 'White'}}>Service to Humanity</h5>
                      <p style={{ color: 'white' }}>Embodying responsibility, accountability and commitment-
                      We will faithfully execute the duties and responsibilities entrusted 
                      to us and maintain the highest ethical standards. </p>
                      
                  </div>

              </div>

              <div className="card3" >
                  <div className="card-head3">
                  <img id="img" src={core} alt="core" />
                      
                  </div>

              </div>



        </div>
        
        </div>
    </section>
  );
};

export default About;