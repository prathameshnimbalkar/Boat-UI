import React, { useState } from "react";
import "./Faq.css";

function Faq(){
    const [expand, setExpand] = useState(false);
    return(
        <div className="faq-section">
        <h1>FAQs</h1>
            <div className="question-section">
                <div className={ expand ? "question question-expand" : "question"} >
                    <p>Q. How can we pause and play tracks?</p>
                    <button className="expand" onClick={() => setExpand(!expand)}>+</button>
                    {expand && <p>Answer 1</p>}
                </div>
                <div className="question">
                    <p>Q. Can I use any adapter to charge my device?</p>
                    <button className="expand">+</button>
                </div>
                <div className="question">
                    <p>Q. Are Airdopes 131 waterproof and sweat resistant?</p>
                    <button className="expand">+</button>
                </div>
                <div className="question">
                    <p>Q. Is there a warranty for the product? How do I claim the warranty?</p>
                    <button className="expand">+</button>
                </div>

            </div>
            {/*  expand */}

            
        
        </div>
    );

}
export default Faq;