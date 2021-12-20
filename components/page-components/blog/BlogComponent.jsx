import React from "react";
import CardComponent from "../../styledComponents/Card";
import { ListStyled } from "../../styledComponents/ListStyled";

function BlogComponent(props) {
  console.log(props);
  const { blogPosts } = props;
  return (
    <ListStyled>
      {blogPosts.posts.map((post) => (
        <CardComponent data={post} key={post._id} />
      ))}
    </ListStyled>
  );
}

export default BlogComponent;
