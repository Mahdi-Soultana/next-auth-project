import React, { useState } from "react";
import Pagination from "react-js-pagination";
function PaginationComponent({
  countPerPage,
  totalItemsCount,
  activeNum,
  setActiveNum,
}) {
  const handelPaginationChange = (pageNumber) => {
    setActiveNum(pageNumber);
  };
  return (
    <Pagination
      activePage={activeNum}
      itemsCountPerPage={countPerPage || 6}
      totalItemsCount={totalItemsCount || 10}
      onChange={handelPaginationChange}
      itemClass="page-item"
      linkClass="page-link"
      prevPageText="Prev"
      nextPageText="Next"
      firstPageText="First"
      lastPageText="Last"
    />
  );
}

export default PaginationComponent;
