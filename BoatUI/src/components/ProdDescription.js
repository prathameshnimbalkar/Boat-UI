import React from "react";
import image from "../images/prod4.webp"
import "./ProdDescription.css"

function ProdDescription() {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">
          <img className="product-img" src={image} alt="imagee"/>
          </div>
          
          <div class="col">
          <div className="details-section">
              <h2><b>True Wireless</b></h2>
              <p>
              Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case
              </p>
              <p>Starting from <strong>₹999*</strong></p>
              <p>Choose your colour: </p>
              {/* <div className="color">
              <button class="color-button" id="red"></button>
              <button class="color-button" id="gray"></button>
              <button class="color-button" id="black"></button>
              <button class="color-button" id="olive"></button>
              </div> */}
{/* <div className="color">
<input class="color-button" type="radio" id="red" name="color" value="color1"/>


<input class="color-button" type="radio" id="gray" name="color" value="color2"/>


<input class="color-button" type="radio" id="black" name="color" value="color3"/>
</div> */}

<div class="radio-input">
    {/* <input checked="" value="color-1" name="color" id="color-1" type="radio" />
    <label for="color-1">
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
      </span>
    </label> */}
  
    <input value="color-2" name="color" id="color-2" type="radio" />
    <label for="color-2">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
      </span>
    </label>
  
    <input value="color-3" name="color" id="color-3" type="radio" />
    <label for="color-3">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
      </span>
    </label>

    <input value="color-1" name="color" id="color-1" type="radio" />
    <label for="color-1">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
      </span>
    </label>

    <input value="color-4" name="color" id="color-4" type="radio" />
    <label for="color-4">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
      </span>
    </label>

</div>
              
              <div>
                <button className="Cart-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdDescription;
