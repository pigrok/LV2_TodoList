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
  border: 1px solid white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StButton = styled.button`
  height: 35px;
  background-color: transparent;

  border: 1px solid black;
  border-radius: 5px;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: white;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

// useState hook을 사용하여 title과 content라는 상태 변수를 선언
const Input = () => {
  // Redux의 dispatch 함수를 가져옴
  const dispatch = useDispatch();

  // useState hook을 사용하여 title과 content라는 상태 변수를 선언
  // 초기값을 빈 문자열로 설정
  // => input 의 title과 content를 관리하는데 사용
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <StBox>
      <form
        // 폼의 제출을 처리
        onSubmit={(event) => {
          // 새로고침 방지
          event.preventDefault();

          // Redux의 addBtn의 action을 dispatch하여
          // 입력된 제목과 내용으로 새로운 toDo를 추가
          dispatch(addBtn(title, content));

          // 추가 후에는 input form을 초기화
          setTitle("");
          setContent("");
        }}
      >
        {/* 입력한 값이 변경될 때마다 상태 변수가 업데이트 */}
        <StInput
          type="text"
          placeholder="Title Enter"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></StInput>
        {/* 입력한 값이 변경될 때마다 상태 변수가 업데이트 */}
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
