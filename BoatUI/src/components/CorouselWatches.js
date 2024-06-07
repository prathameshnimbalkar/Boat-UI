import React from "react";
import image from "../images/watches.png";
import "./Corousel.css";

function CorouselWatches() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <img className="image-watch" src={image} alt="imagee" />
          </div>

          <div class="col">
            <div className="title-section">
              <h4>
                Smart<b> WATCHES</b>
              </h4>
              <p>
                Starting from <strong>₹999*</strong>
              </p>
              <div>
                <button className="shop-button">
                  Shop Products
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CorouselWatches;
