import React from "react";
import { CvStyles, AsideContactStyles, MainStyles } from "./CvStyles";
import Avatar from "./sections/Avatar";
import Name from "./sections/Name";
import Title from "./sections/Title";
import Description from "./sections/Description";
import Exprience from "./sections/Expreience";
import Study from "./sections/Study";
import Skills from "./sections/Skills";
import Languages from "./sections/Language";
import WrapperEdit from "./sections/WrapperEdit";

function CV({ user }) {
  return (
    <CvStyles>
      <AsideContactStyles>
        <Avatar user={user} />
        <hr />
        <h2>Get Touch :</h2>
        <label htmlFor="Mobile">
          <span>Mobile</span>
          <p>(+212) 06-03-37-16-47</p>
        </label>
        <label htmlFor="Email">
          <span>Email</span>
          <p>{user?.email}</p>
        </label>
        <label htmlFor="LinkedIn">
          <span>LinkedIn:</span>
          <p>www.linkedin.com/in/mahdisoultana</p>
        </label>
        <label htmlFor="GitHub">
          <span>GitHub :</span>
          <p>https://github.com/Mahdi-Soultana</p>
        </label>
        <label htmlFor="Address">
          <span>Address: :</span>
          <p>center Ville Kenitra Morocco</p>
        </label>
      </AsideContactStyles>
      <MainStyles>
        <div>
          <WrapperEdit>
            <Title title={user?.title} />
          </WrapperEdit>
          <WrapperEdit>
            <Name name={user.name} />
          </WrapperEdit>
          <WrapperEdit>
            <Description description={user?.description} />
          </WrapperEdit>
        </div>
        <hr />
        <section className="experinces">
          <h1>Work Experience</h1>
          <Exprience exprience={user?.exprience} />
        </section>
        <hr />
        <section className="study">
          <h1>Study History</h1>
          <Study study={user?.study} />
          <footer>
            <article>
              <h1>Skills</h1>
              <Skills skills={user?.skills} />
            </article>
            <div className="underline--verticle"></div>
            <article>
              <h1>Languages</h1>
              <ul>
                <h5>Spoken:</h5>
                <Languages languages={user?.languages} />
              </ul>
            </article>
          </footer>
        </section>
      </MainStyles>
    </CvStyles>
  );
}

export default CV;
