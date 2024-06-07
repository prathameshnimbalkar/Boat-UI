import React from "react";
import './login.css';

function Signup(){
    return(
      <>
        <div class="login-box">
  <p>Signup</p>
  <form>
    <div class="user-box">
      <input required="" name="" type="text" />
      <label>Name</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password" />
      <label>Email</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password" />
      <label>Password</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password" />
      <label>Confirm Password</label>
    </div>
    <a href="/signup">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="/login" class="a2">Log in!</a></p>
</div>
      </>
    );
  }
  
  export default Signup;