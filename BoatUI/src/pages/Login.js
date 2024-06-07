import React from "react";
import './login.css';

function Login(){
    return(
      <>
        <div class="login-box">
  <p>Login</p>
  <form>
    <div class="user-box">
      <input required="" name="" type="text" />
      <label>Email</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password" />
      <label>Password</label>
    </div>
    <a href="/login">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="/Signup" class="a2">Sign up!</a></p>
</div>
      </>
    );
  }
  
  export default Login;