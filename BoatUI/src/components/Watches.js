import React from "react";
import "./Products.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import Prod1 from "../images/watch1.webp";
import Prod2 from "../images/watch2.webp";
import Prod3 from "../images/watch3.webp";
import Prod4 from "../images/watch4.webp";


function Watches(){
    return (
        <>
        <div className="main-body">
        <h1>Best Sellers</h1>
        <div className="card-container">
            <div className="row" id ="product-items">
                <Card className="col-md-3">
                    <Card.Img variant="top" src={Prod1} />
                    <Card.Body>
                        <h3 className="duration">50 hours Playback</h3>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>₹899  <span>89% off</span></Card.Text>
                      <button class="button2">Add to Cart</button>
                    </Card.Body>
                </Card>

                <Card className="col-md-3">
                    <Card.Img variant="top" src={Prod2} />
                    <Card.Body>
                    <h3 className="duration">50 hours Playback</h3>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>₹899  <span>89% off</span></Card.Text>
                      <button class="button2">Add to Cart</button>
                    </Card.Body>
                </Card>

                <Card className="col-md-3">
                    <Card.Img variant="top" src={Prod3} />
                    <Card.Body>
                    <h3 className="duration">50 hours Playback</h3>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>₹899  <span>89% off</span></Card.Text>
                      <button class="button2">Add to Cart</button>
                    </Card.Body>
                </Card>

                <Card className="col-md-3">
                    <Card.Img variant="top" src={Prod4} />
                    <Card.Body>
                    <h3 className="duration">50 hours Playback</h3>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>₹899  <span>89% off</span></Card.Text>
                      <button class="button2">Add to Cart</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
        </>
    );
}
export  default Watches; 