import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBtn } from "../modules/toDos";
import { styled } from "styled-components";

const StBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
  background-color: #95b9f1;

  /* border-radius: 15px; */
`;
const StInput = styled.input`
  width: 300px;
  height: 30px;

  margin: 10px;

  text-align: center;
  font-weight: bold;

  border-radius: 5px;
`;

const StButton = styled.button`
  height: 35px;
  background-color: transparent;

  border: 2px solid black;
  border-radius: 5px;

  &:hover {
    background-color: white;
  }
`;

const Input = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <StBox>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          dispatch(addBtn(title, content));

          setTitle("");
          setContent("");
        }}
      >
        <StInput
          type="text"
          placeholder="Title Enter"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></StInput>
        <StInput
          type="text"
          placeholder="Content Enter"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></StInput>
        <StButton type="submit">submit</StButton>
      </form>
    </StBox>
  );
};

export default Input;
