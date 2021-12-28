import React from "react";
import { useQuery } from "react-query";
import BlogPostCard from "../Card";
import { getMethod } from "../../../utils/getFetch";
function BlogAside({ user }) {
  const blog = (user?.blogs.length > 0 && user.blogs[0]) || {};
  const avatar = user.avatar;

  const blogPost = {
    ...blog,
    owner: { avatar, name: user.name, _id: user._id },
  };

  return (
    (blogPost.title && <BlogPostCard data={blogPost} />) || <h3>No POST yet</h3>
  );
}

export default BlogAside;
