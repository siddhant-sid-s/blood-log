import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./home.css";
import logo from "./icon-droplet.png";
import handHeart from "./icon-hand-heart.png";
import cal from "./icon-eight-weeks.png";

const SearchResultsModal = ({ results, showModal, handleClose }) => (
  <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Search Results</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ul>
        {results.map((user) => (
          <li key={user._id}>
            <ul>Name: {user.name}</ul>
            <ul>Email: {user.email}</ul>
            <ul>Address: {user.address}</ul>
            <ul>Pincode: {user.pincode}</ul>
            <ul>Blood Group: {user.bloodGroup}</ul>
            <ul>Phone Number: {user.phone}</ul>
          </li>
        ))}
      </ul>
    </Modal.Body>
  </Modal>
);

function Home() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [pincode, setPincode] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async () => {
    try {
      console.log("Searching with pincode:", pincode, "and bloodGroup:", bloodGroup);

      const response = await axios.get(
        `http://127.0.0.1:3001/api/users?pincode=${pincode}&bloodGroup=${encodeURIComponent(bloodGroup)}`
      );
  
      const searchResultsData = response.data;
  
      setSearchResults(searchResultsData);
      if (searchResultsData.length > 0) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
  
      console.log("Success", searchResultsData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  const handleClose = () => setShowModal(false);
  return (
    <>
      <div className="home" >
        <div className="secContainer container">
          <div className="homeText">
            <h1 className="title">Donate Blood and Save Life</h1>
            <Link to={"/Register"}>
            <Button variant="danger" className="btn">
              Donate Blood
            </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="homecard-grid">
          <div className="locationDiv">
            <Form.Label htmlFor="bloodGroup">Blood Group</Form.Label>
            <Form.Select
              className="select"
              defaultValue="Select..."
              placeholder="BloodGroup"
              name="blood"
              id="bloodGroup"
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option>Select---</option>
              <option>A-</option>
              <option>A+</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </Form.Select>
          </div>

          <div className="distDiv">
            <Form.Label htmlFor="pincode">Pin Code</Form.Label>
            <input
              className="input"
              type="text"
              placeholder="PinCode"
              name="pincode"
              id="pincode"
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>

          <div>
            <Button
              variant="danger"
              className="btn"
              id="bm"
              onClick={handleSearch}
            >
              Search
            </Button>{" "}
          </div>

          {searchResults.length > 0 && showModal && (
      <SearchResultsModal
        results={searchResults}
        showModal={showModal}
        handleClose={handleClose}
      />
      )}
        </div>
        
      </div>
      
      <div className="three-card" >
        <div className="card" style={{ backgroundColor: "#cc4b00" }}>
          <div className="card-head">
            <img id="img" src={logo} alt="Logo" />
            <h2>Register for Blood Donation</h2>
          </div>
          <div className="p-btn">
            <p style={{ color: "white" }}>
              Register yourself to find the nearest blood donation center or
              blood drive near you.
            </p>
            <Link to={"/Register"}>
              <Button
                variant="danger"
                className="btn"
                id="bm-card"
                style={{ color: "#cc4b00" }}
              >
                {" "}
                Donate
              </Button>
            </Link>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: "#ffa300" }}>
          <div className="card-head">
            <img id="img" src={handHeart} alt="Logo" />
            <h2>Learn about donating blood</h2>
          </div>
          <div className="p-btn">
            <p style={{ color: "white" }}>
              Learn about every step in our simple blood donation process and
              what to expect.
            </p>
            <Link to={"/FAQ"}>
            <Button
              variant="danger"
              className="btn"
              id="bm-card"
              style={{ color: "#ffa300" }}
            >
              {" "}
              Learn{" "}
            </Button>{" "}
            </Link>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: "#722282" }}>
          <div className="card-head">
            <img id="img" src={cal} alt="Logo" />
            <h2>Are you eligible for donation ?</h2>
          </div>
          <div className="p-btn">
            <p style={{ color: "white" }}>
              Donating blood is safe and easy to do. Find out the general
              eligibility criteria.
            </p>
            <Link to={"/FAQ"}>
            <Button
              variant="danger"
              className="btn"
              id="bm-card"
              style={{ color: "#722282" }}
            >
              {" "}
              Check{" "}
            </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
