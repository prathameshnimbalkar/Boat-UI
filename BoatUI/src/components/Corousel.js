import React from "react";
import "./Corousel.css";
import image from "../images/cover.webp";
import "bootstrap/dist/css/bootstrap.min.css";

function Corousel() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <div className="text-section">
              <h2>True Wireless</h2>
              <h4>
                <b>Earbuds</b>
              </h4>
              <p>
                Starting from <strong>₹999*</strong>
              </p>
              <div>
                <button>
                  Shop Products
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <img className="image-section" src={image} alt="imagee" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Corousel;
