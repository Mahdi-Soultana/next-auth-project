import React from "react";
import { useQuery } from "react-query";
import BlogPostCard from "../Card";
import { GetMethod } from "../../../utils/getFetch";
function BlogAside({ userId }) {
  const { data, isLoading, isError } = useQuery(
    `blog user Id ${userId}`,
    () => GetMethod(`/api/profiles/${userId}/blog?order=-likes`),
    {
      staleTime: 6000,
      refetchOnWindowFocus: false,
    },
  );
  console.log(data);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : isError ? (
        <h3>Error try later !</h3>
      ) : (
        (data?.posts[0] && <BlogPostCard data={data?.posts[0]} />) || (
          <h2>No post have yet !</h2>
        )
      )}
    </>
  );
}

export default BlogAside;
