import React from "react";
import "../css/Login.css";
import genie from "../assets/photos/genie.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      navigate("/");
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userEmail", credentials.email);

    const handleChange = async (event) => {
        setCredentials({
          ...credentials,
          [event.target.name]: event.target.value,
        });
      };
    }
  };

  return (
    <div>
      <div className="Box1">
        <div className="Box2">
          <div className="form">
            <h3>START FOR FREE</h3>
            <h1>LOGIN TO MIRAGE</h1>
            <Link to="/signup">
              <p>Not a member? Signup here</p>
            </Link>
            <form>
              <label>Email</label>
              <input id="email" type="email" name="Email" value={credentials.email} onChange={handleChange}/>
              <label>Password</label>
              <input id="password" type="password" name="Password" value={credentials.password} 
              onChange={handleChange}
              />
              <div id="btn" onClick={handleSubmit} >Login</div>
            </form>
          </div>
          <image src={genie} />
        </div>
      </div>
    </div>
  );
};

export default Login;
