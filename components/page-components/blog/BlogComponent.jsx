import React from "react";
import CardComponent from "../../styledComponents/Card";
import { ListStyled } from "../../styledComponents/ListStyled";

function BlogComponent(props) {
  const { blogPosts } = props;

  return (
    (blogPosts && (
      <ListStyled page="blog">
        {blogPosts.posts.map((post) => (
          <CardComponent data={post} key={post._id} />
        ))}
      </ListStyled>
    )) ||
    "hey"
  );
}

export default BlogComponent;
