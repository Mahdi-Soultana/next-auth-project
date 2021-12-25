import React from "react";

function Study({ user }) {
  return (
    user?.study || (
      <>
        <div>
          <h5>FrontEnd Masters & Udemy Student</h5>
          <h4>Student of Completion Course</h4>
          <ul>
            <li>
              JavaScript: The Hard Parts by Will Sentance Founder Codesmith.
            </li>
            <li>Deep JavaScript Foundations by Kyle Simpson .</li>
            <li>CSS In-Depth by Estelle Weyl at Mozilla Developer Network.</li>
            <li> Intermediate React by Brian Holt at Microsoft.</li>
            <li>State Management in Pure React by Steve Kinney at Twilio.</li>
            <li>
              Next.js & React - The Complete Guide by Maximilian
              Schwarzmüller...
            </li>
          </ul>
        </div>
        <div>
          <h4>
            Bac +2Technicians Specialized in Automation and Electromechanics
          </h4>
          <h4>Electrical Technical Science Baccalaureate</h4>
        </div>
      </>
    )
  );
}

export default Study;
