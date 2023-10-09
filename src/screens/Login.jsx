import React from "react";
import "../css/Login.css";


const Login = () => {
  return (
    <div>
      <div className="Box1">
        <div className="Box2">
            
            <h3>START FOR FREE</h3>
            <h1>Create an account.</h1>
            <p>Already A Member?</p>
            <form>
              <input id="fn" type="text" name="First name" />
              <input id="ln" type="text" name="Last name" />
              <input id="email" type="email" name="Email" />
              <input id="ps" type="password" name="Password" />
              <div id="btn">Create account</div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
