import React from "react";
import { MainStyles } from "./CvStyles";
import Name from "./sections/MainSection/Name";
import Title from "./sections/MainSection/Title";
import Description from "./sections/MainSection/Description";
import Exprience from "./sections/MainSection/Expreience";
import Study from "./sections/MainSection/Study";
import Skills from "./sections/MainSection/Skills";
import Languages from "./sections/MainSection/Language";
import WrapperEdit from "./sections/WrapperEdit";
function MainInfo({ user }) {
  return (
    <MainStyles>
      <div>
        <WrapperEdit userId={user._id} label="Title">
          <Title title={user?.title} />
        </WrapperEdit>
        <WrapperEdit userId={user._id} label="Name">
          <Name name={user.name} />
        </WrapperEdit>
        <WrapperEdit userId={user._id} label="description">
          <Description description={user?.description} />
        </WrapperEdit>
      </div>
      <hr />
      <section className="experinces">
        <h1>Work Experience</h1>
        <WrapperEdit userId={user._id} label="Experience">
          <Exprience exprience={user?.exprience} />
        </WrapperEdit>
      </section>
      <hr />
      <section className="study">
        <h1>Study History</h1>
        <WrapperEdit userId={user._id} label="Study">
          <Study study={user?.study} />
        </WrapperEdit>
      </section>
      <footer>
        <article>
          <h1>Skills</h1>
          <WrapperEdit userId={user._id} label="Skills">
            <Skills skills={user?.skills} />
          </WrapperEdit>
        </article>
        <div className="underline--verticle"></div>
        <article>
          <h1>Languages</h1>
          <h5>Spoken:</h5>
          <WrapperEdit userId={user._id} label="Languages">
            <Languages languages={user?.languages} />
          </WrapperEdit>
        </article>
      </footer>
    </MainStyles>
  );
}

export default MainInfo;
