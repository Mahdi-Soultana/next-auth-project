import React from "react";
import CardComponent from "../../styledComponents/Card";
import { ListStyled } from "../../styledComponents/ListStyled";

function BlogComponent(props) {
  const { blogPosts } = props;
  console.log(blogPosts);
  return (
    (blogPosts && (
      <ListStyled>
        {blogPosts.posts.map((post) => (
          <CardComponent data={post} key={post._id} />
        ))}
      </ListStyled>
    )) ||
    "hey"
  );
}

export default BlogComponent;
