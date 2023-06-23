import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBtn } from "../modules/toDos";
import { toggleBtn } from "../modules/toDos";
import { styled } from "styled-components";

const StBody = styled.div`
  max-width: 1200px;

  text-shadow: 2px 2px 4px rgba(130, 129, 129, 0.5);
`;

const StMainTitle = styled.div`
  font-size: 30px;
  font-weight: bold;

  margin: 30px;
  text-align: center;
`;

const StWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const StCard = styled.div`
  border: 1px solid #f7ef81;
  border-radius: 15px;

  background-color: #f7ef81;

  max-width: 280px;
  min-width: 280px;

  max-height: 250px;
  min-height: 250px;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StTitle = styled.p`
  text-align: center;

  font-size: 20px;
  font-weight: bold;

  text-decoration: underline;
  margin: 40px 0 20px 0;
`;

const StContent = styled.p`
  word-wrap: break-word;

  font-size: 15px;

  padding: 15px;
`;

const StButtonDiv = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const StButton = styled.button`
  margin: 10px;

  border: 2px solid black;
  border-radius: 5px;

  background-color: transparent;

  &:hover {
    background-color: transparent;

    width: 80px;
    height: 30px;
  }
`;
// isDone이라는 props를 받음
const TodoList = ({ isDone }) => {
  // useDispatch와 useSelector 훅을 사용
  // Redux의 상태와 action dispatch를 사용
  const dispatch = useDispatch();
  // useSelector를 통해 toDos의 state를 가져옴
  const toDos = useSelector((state) => state.toDos);
  console.log(toDos);
  return (
    <>
      <StBody>
        {/* isDone이 true인 경우 DONELIST를 받고, false인 경우  TODOLIST를 받음 */}
        <StMainTitle>{isDone ? "DONELIST" : "TODOLIST"}</StMainTitle>
        <StWrapper>
          {/* toDos를 필터링하여 해당 isDone 값과 일치하는 것만 출력 */}
          {/* map 함수를 사용하여 toDos의 컴포넌트를 생성 */}
          {toDos
            .filter((t) => t.isDone === isDone)
            .map((toDo) => {
              return (
                <StCard>
                  {/* Link 컴포넌트를 사용하여 해당 toDo의 detail page로 이동 */}
                  <Link to={`/detail/${toDo.id}/${toDo.title}/${toDo.content}`}>
                    <StTitle>{toDo.title}</StTitle>
                  </Link>
                  <StContent>{toDo.content}</StContent>
                  <StButtonDiv>
                    <StButton
                      onClick={() => {
                        dispatch(deleteBtn(toDos, toDo.id));
                      }}
                    >
                      Delete
                    </StButton>
                    <StButton
                      onClick={() => {
                        dispatch(toggleBtn(toDos, toDo.id));
                      }}
                    >
                      {isDone ? "Cancel" : "Complete"}
                    </StButton>
                  </StButtonDiv>
                </StCard>
              );
            })}
        </StWrapper>
      </StBody>
    </>
  );
};

export default TodoList;
