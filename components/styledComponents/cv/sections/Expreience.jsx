import React from "react";

function Exprience({ user }) {
  return (
    user?.exprience || (
      <>
        <div>
          <h5>FrontEnd Design</h5>
          <h4>Open Projects | August 2020 - October 2020</h4>
          <ul>
            <li>
              Working in project form Design Figma to GastbyJs Integrated with
              WordPress CMS
            </li>
            <li>
              Best Practices and refactor split code challenges projects with
              JavaScript
            </li>
          </ul>
        </div>
        <div>
          <h5>Full Stack Projects</h5>
          <h4>Private Project on GitHub| October 2020 - 2021 Mars</h4>
          <ul>
            <li>
              Complete Full-stack Ecommerce App from the front to the Back with
              PayPal and Stripe payment Integration , NextJs And Framer motion
              in FrontEnd, in the BackEnd NodeJS GraphQL Apollo Server MongoDB
              ,generating rooms for video calls online via WebRTC
            </li>
          </ul>
        </div>
      </>
    )
  );
}

export default Exprience;
