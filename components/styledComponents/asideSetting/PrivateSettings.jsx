import React from "react";
import styled from "styled-components";
import HeaderSettings from "./HeaderSettings";
import MainColorSettings from "./MainColorSettings";

export const PrivateSettingsStyles = styled.aside`
  p {
    font-size: 1.7rem;
    font-weight: 700;

    padding: 1rem;
  }
  h4 {
    display: block;
    font-size: 1.7rem;
    font-weight: 400;
    text-align: center;
    border-bottom: 2px solid white;
    padding: 1rem;
  }
  label {
    display: block;

    span {
      display: block;
      font-size: 1.3rem;
      font-weight: 500;
    }
    text-align: center;
  }
  .colorsSettings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem auto;
    margin-bottom: 1rem;
  }

  .info-profile {
    div {
      display: grid;
      grid-template: 1fr / repeat(2, 1fr);
      @media (max-width: 700px) {
        grid-template: 1fr / repeat(1, 1fr);
      }
      align-items: center;

      margin: 2rem auto;
      span {
        justify-self: center;
        display: block;
        font-size: 1.3rem;
        font-weight: 500;
        padding: 0.5rem 1.5rem;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        color: white;
        background-color: chocolate;
        border-radius: 3em;
      }
      h3 {
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
  }
  h2 {
    text-align: left;
    margin-bottom: 1rem;
  }
  label {
    margin-bottom: 2rem;
  }
`;

function PrivateSettings({ isMe, user, commentLikes }) {
  const totalBlogsLike = user?.blogs?.reduce((acc, cc) => {
    acc += cc.likesCount;
    return acc;
  }, 0);
  const totalCommentLike = user?.blogs?.reduce((acc, cc) => {
    acc += cc.comment?.length || 0;
    return acc;
  }, 0);

  return (
    <PrivateSettingsStyles>
      <h4>Related Info</h4>

      <section className="info-profile">
        <div>
          <h3>All Follwers:</h3>
          <span>{user?.follower?.length || 0}</span>
        </div>
        <div>
          <h3>All Followings:</h3>
          <span>{user?.following?.length || 0}</span>
        </div>
        <div>
          <h3>All wining likes:</h3>
          <span>{commentLikes + totalBlogsLike}</span>
        </div>
        <div>
          <h3>All Posts:</h3>
          <span>{user?.blogs?.length || 0}</span>
        </div>
        <div>
          <h3>All Comments:</h3>
          <span>{totalCommentLike}</span>
        </div>
      </section>
      {isMe && (
        <div className="settingsContainer">
          <h4>Settings</h4>
          <section className="colorsSettings">
            <label htmlFor="primary">
              <span>Primary Color</span>
              <MainColorSettings label="color" initColor={user?.color} />
            </label>
            <label htmlFor="header">
              <h2>your header</h2>
              <HeaderSettings label="header" />
            </label>
          </section>

          {/* <h2>Change your Password</h2>
          <ChangePassword password={"xxxxxxxxxxx"} /> */}
        </div>
      )}
    </PrivateSettingsStyles>
  );
}

export default PrivateSettings;
