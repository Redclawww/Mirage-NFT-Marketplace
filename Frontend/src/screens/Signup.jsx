
import { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";


const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json.success);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };

  const handleChange = async (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="Box1">
        <div className="Box2">
          <div className="form">
            <h3>START FOR FREE</h3>
            <Link to="/signup">
              <p>Not a member? Signup here</p>
            </Link>
            <form>
              <label>Userame</label>
              <input
                id="username"
                type="text"
                name="username"
                required
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                id="email"
                type="email"
                name="Email"
                required
                onChange={handleChange}
              />
              <label>Password</label>
              <input
                id="password"
                type="password"
                name="Password"
                required
                onChange={handleChange}
              />
              <div id="btn" onClick={handleSubmit}>
                Signup
              </div>
            </form>
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
