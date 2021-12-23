import React, { useEffect } from "react";
import useMutate from "../../hooks/useMutate";
import styled, { css } from "styled-components";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
export const DeleteBtnStyles = styled.button`
  position: absolute;
  z-index: 10;

  display: inline-block;

  margin: 1rem;
  font-size: 1.8rem;

  outline: none;
  text-align: center;

  border-radius: 3em;
  ${(p) => {
    if (p.typerequest == "comment") {
      return css`
        top: -3rem;
        padding: 0.5rem;
        border: white solid 2px;
        left: -2rem;
        background: #e7e6e660;
      `;
    } else if (p.typerequest == "blog") {
      return css`
        top: 0rem;
        padding: 1rem;
        border-radius: 0.3em;
        border: #ffffff0 solid 1px;
        background: #ffffff0;
        left: 86%;
      `;
    }
  }}
  color: #333;
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0 0.5px 5px #33333392;
  &:hover {
    background: #002b47;
    color: #ffffff;
  }
  &:active {
    background: #ffffff;
    color: #002b47;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

function DeleteBtn({ id = "", pramas = "", deleteHandler, typeReq }) {
  const type = typeReq ? typeReq : "comment";
  const { response, mutate } = useMutate("/api/blog/" + pramas, "DELETE", {
    pending: `delete ${type} onProgress`,
    success: `your ${type} is deleted`,
    error: "something not good with delete",
  });
  useEffect(() => {
    if (response?.success) {
      deleteHandler(response.id);
    }
  }, [response]);

  return (
    <DeleteBtnStyles
      title={"Delete " + type}
      typerequest={type}
      onClick={() => {
        const enterValue = window.prompt(`Tape " delete " `);
        if (enterValue.trim() == "delete") {
          console.log("delete", id);
          mutate({ type: "delete_" + type, id });
        } else {
          toast.warn("tape delete correctly 💡");
        }
        //
      }}
    >
      <FaTrash size={typeReq ? "3rem" : "1.5rem"} color="red" />
    </DeleteBtnStyles>
  );
}

export default DeleteBtn;
