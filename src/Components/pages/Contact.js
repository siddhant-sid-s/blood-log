import React from 'react';
import './contact.css';
import email from './email.png'
import call from './call1.png'

const Contact = () => {
  return (
      <section className='contact-main'>
      
        <div className='contact'>
            <div className='cont'>
            <h2>Contact Blood-Unity via Phone or Email</h2>
            <p >Any quary of our website or Blood Donation related query, Please Contact with us Via Email or Call</p>
            <p >Please note that due to the high volume of submissions, responses may take several days.</p>
            <p >Adress: Near Biswa Bangla Gate</p>
            <p >Action Area 1, pin-700156,</p>
            <p >New Town- Kolkata - INDIA</p>
            </div>
      </div>
          <div className="two-card">
              <div className="card1" >
                  <div className="card-head1">
                  <img id="img" src={call} alt="call" />
                      <h2 >Contact with Call</h2>
                      <p >Call / WhatsApp: 8755378887</p>
                      <p >Call / WhatsApp: 8955378588</p>
                      <h5 ><b>Blood-Unity Customer Service is available</b></h5>
                      <p >Mon.-Fri. 6 AM - 8 AM</p>
                      <p >Sat.-Sun. 9 AM - 9 AM</p>
                  </div>

              </div>

              <div className="card1" >
                  <div className="card-head1">
                  <img id="img" src={email} alt="email" />
                      <h2 >Contact with Email</h2>
                      <p >Email: mouparna.de.2000@gmail.com</p>
                      <p >Email: siddhantshaw1@gmail.com</p>
                      <p ><b>You can email anytime, anywhere.</b></p>
                      <p >Thank You</p>
                  </div>

              </div>

          </div>
      </section>
  );
};

export default Contact;