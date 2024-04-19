import React, { useState } from 'react';
import './login2.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {console.log(result)
        if(result.data === "Success"){
            navigate('/')
        }else if(result.data === "The password is incorrect"){
            alert("The password is incorrect")
        }else if(result.data === "No record existed"){
            alert("No user found please register")
            navigate('/Register')
        }
        
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="Auth-form-container" >
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;