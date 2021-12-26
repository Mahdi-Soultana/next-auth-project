import React from "react";
import { CvStyles, AsideContactStyles, MainStyles } from "./CvStyles";
import Avatar from "./sections/Aside/Avatar";
import Name from "./sections/Name";
import Title from "./sections/Title";
import Description from "./sections/MainSection/Description";
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
          <WrapperEdit>
            <Exprience exprience={user?.exprience} />
          </WrapperEdit>
        </section>
        <hr />
        <section className="study">
          <h1>Study History</h1>
          <WrapperEdit>
            <Study study={user?.study} />
          </WrapperEdit>

          <footer>
            <article>
              <h1>Skills</h1>
              <WrapperEdit>
                <Skills skills={user?.skills} />
              </WrapperEdit>
            </article>
            <div className="underline--verticle"></div>
            <article>
              <h1>Languages</h1>
              <h5>Spoken:</h5>
              <WrapperEdit>
                <Languages languages={user?.languages} />
              </WrapperEdit>
            </article>
          </footer>
        </section>
      </MainStyles>
    </CvStyles>
  );
}

export default CV;
