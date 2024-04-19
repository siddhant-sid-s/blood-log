import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [healthIssues, setHealthIssues] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);
  
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termsChecked) {
        alert('Please accept the terms and conditions.');
        return;
      }

      const userData = {
        name,
        email,
        password,
        phone,
        bloodGroup,
        gender,
        weight,
        age,
        address,
        pincode,
        healthIssues,
      };

    axios.post('http://localhost:3001/register',userData)
    .then(result => 
        {console.log(result);
        navigate('/Login');
    })

    .catch(err => console.log(err))
  };

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone No</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="radio">
            <label className="form-label">Blood Group</label>
            <Form.Select
              aria-label="default select example"
              name="blood"
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option>Select</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </Form.Select>
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <Form.Select
              aria-label="default select example"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Select>
          </div>
          <div className="mb-3">
            <label className="form-label">Weight</label>
            <input
              type="text"
              className="form-control"
              name="weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pincode</label>
            <input
              type="text"
              className="form-control"
              name="pincode"
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Health Issues</label>
            <textarea
              className="form-control"
              name="healthIssues"
              onChange={(e) => setHealthIssues(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeTerms"
              name="terms"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the terms and conditions
            </label>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
