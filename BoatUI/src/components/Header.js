import React, { useState } from "react";
import "./Header.css";
import logo from "../logo1.svg";
import profile from "../profile.svg";

function Header() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
   
  return (
    <>
      <div className="Container">
        <img className="logo" src={logo} alt="logo" />

        <div className={ showMediaIcons ? "links mobile-menu-link" : "links"}  >
        <ul >
          <li>
            <a href="https://github.com">Home</a>
          </li>
          <li>
            <a href="https://github.com">About</a>
          </li>
          <li>
            <a href="https://github.com">Services</a>
          </li>
        </ul>
        </div>

        <div className="SearchBar">
          <input
            class="searchInput"
            type="text"
            name=""
            placeholder="Search Products"
          />
          {/* <button class="searchButton" href="/login">
                <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
            </button> */}
          <img className="profile" src={profile} alt="logo" href="/login" />

          {/* Hamburger menu */}

          
        </div>
      
      <div className="hamburger">
          <button className="hamburger" style={{ backgroundColor: "white" }} onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <svg
              fill="#000000"
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>icn/menu</title>
              <path
                d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
                id="a"
              />
            </svg>
          </button>
          </div>
          </div>
    </>
  );
}

export default Header;

