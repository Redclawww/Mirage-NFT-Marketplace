import React from 'react'
import "../css/Login.css";

const Login = () => {
  return (
    <div>
    <div className='Box1'>
      <div className='Box2'>
        <h3>START FOR FREE</h3>
        <h1>Create new account.</h1>
        <p>Already A Member? <span>Log in</span></p>
        <form /*onSubmit={this.handleSubmit}*/ >
        <label>
          <input type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      </div>
    </div>
    
  )
}

export default Login
