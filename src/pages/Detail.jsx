import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StWrapper = styled.div`
  border: 1px solid black;
  border-radius: 15px;

  width: 600px;
  height: 400px;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StTop = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 15px;

  text-decoration: underline;
  text-shadow: 2px 2px 4px rgba(130, 129, 129, 0.5);
`;

const StMainBtn = styled.button`
  background-color: transparent;

  border: 1px solid black;
  border-radius: 5px;

  width: 85px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #eae9e9;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const StTitle = styled.div`
  padding: 0 20px 0 20px;
  text-shadow: 2px 2px 4px rgba(130, 129, 129, 0.5);
`;
const StContent = styled.div`
  padding: 0 20px 20px 20px;
  text-shadow: 2px 2px 4px rgba(130, 129, 129, 0.5);
`;

const StMainFont = styled.p`
  font-size: 23px;
  text-decoration: underline;
`;

function Detail() {
  const { id, title, content } = useParams();
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <StContainer>
      <StWrapper>
        <StTop>
          <p>ID: {id}</p>
          <StMainBtn onClick={navigateHandler}>Main</StMainBtn>
        </StTop>
        <div>
          <StTitle>
            <StMainFont>Title</StMainFont>
            <p>{title}</p>
          </StTitle>
          <StContent>
            <StMainFont>Content</StMainFont>
            <p>{content}</p>
          </StContent>
        </div>
      </StWrapper>
    </StContainer>
  );
}

export default Detail;
