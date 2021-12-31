import React, { useState } from "react";
import { useQuery } from "react-query";
import CardComponent from "../../styledComponents/Card";
import { ListStyled } from "../../styledComponents/ListStyled";
import PaginationComponent from "./pagination/PaginationComponent";
import Pagination from "./pagination/PaginationComponent";

function BlogComponent(props) {
  const [activeNum, setActiveNum] = useState(1);
  const { data, isLoading, isError } = useQuery(
    "BlogComponent_page  " + activeNum,
    () => {
      return fetch("/api/blog?page=" + activeNum)
        .then((res) => res.json())
        .catch((e) => console.log("error while fetching blogPosts", e));
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 6000,
      initialData: { blogPosts: props.blogPosts.posts },
    },
  );
  const { blogPosts } = data;

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <h2>Error some Where try Again! </h2>
  ) : (
    blogPosts && (
      <>
        <ListStyled page="blog">
          {blogPosts.map((post) => (
            <CardComponent data={post} key={post._id} />
          ))}
        </ListStyled>
        <PaginationComponent
          activeNum={activeNum}
          setActiveNum={setActiveNum}
          countPerPage={data.countPerPage}
          countPerPage={data.countPerPage}
          totalItemsCount={data.totalCount}
        />
      </>
    )
  );
}

export default BlogComponent;
