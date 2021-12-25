import React from "react";
import { CvStyles, AsideContactStyles, MainStyles } from "./CvStyles";

function CV({ user }) {
  return (
    <CvStyles>
      <AsideContactStyles>
        <div className="imgContainer">
          <img
            src={
              user?.avatar.url ||
              "https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg"
            }
            alt="User"
          />
        </div>
        <hr />
        <h2>Get Touch :</h2>
        <label htmlFor="modile">
          <span>Mobile</span>
          <p>(+212) 06-03-37-16-47</p>
        </label>
        <label htmlFor="modile">
          <span>Email</span>
          <p>{user?.email}</p>
        </label>
        <label htmlFor="modile">
          <span>LinkedIn:</span>
          <p>www.linkedin.com/in/mahdisoultana</p>
        </label>
        <label htmlFor="modile">
          <span>GitHub :</span>
          <p>https://github.com/Mahdi-Soultana</p>
        </label>
        <label htmlFor="modile">
          <span>Address: :</span>
          <p>center Ville Kenitra Morocco</p>
        </label>
      </AsideContactStyles>
      <MainStyles>
        <div>
          <h2>{user?.name}</h2>
          <h1>FullStack Web Developer</h1>
          <p>
            I am web developer by JavaScript HTML CSS I Specialize at: ReactJS
            NextJs Gatsby and GraphQL MongoDB (Mongoose) NodeJS, I love
            challenging projects
          </p>
        </div>
        <hr />
        <section className="experinces">
          <h1>Work Experience</h1>
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
                -Complete Full-stack Ecommerce App from the front to the Back
                with PayPal and Stripe payment Integration , NextJs And Framer
                motion in FrontEnd, in the BackEnd NodeJS GraphQL Apollo Server
                MongoDB ,generating rooms for video calls online via WebRTC
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <section className="study">
          <h1>Study History</h1>
          <div>
            <h5>FrontEnd Masters & Udemy Student</h5>
            <h4>Student of Completion Course</h4>
            <ul>
              <li>
                JavaScript: The Hard Parts by Will Sentance Founder Codesmith.
              </li>
              <li>Deep JavaScript Foundations by Kyle Simpson .</li>
              <li>
                CSS In-Depth by Estelle Weyl at Mozilla Developer Network.
              </li>
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
          <footer>
            <article>
              <h1>Study History</h1>
              <ul>
                <li> React JS </li>
                <li>- Next JS </li>
                <li>- Gatsby JS </li>
                <li>- MongoDB </li>
                <li>- GraphQL </li>
                <li>- NodeJS </li>
                <li>-WebRTC</li>
              </ul>
            </article>
            <div className="underline--verticle"></div>
            <article>
              <h1>Study History</h1>
              <ul>
                <h5>European:</h5>
                <li>English,</li>
                <li>French,</li>
                <li>Arab,</li>
              </ul>
            </article>
          </footer>
        </section>
      </MainStyles>
    </CvStyles>
  );
}

export default CV;
