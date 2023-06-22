import React from "react";
import { styled } from "styled-components";

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: #abe9f5;
  padding: 20px;

  font-size: 30px;
  font-weight: bold;

  margin-top: 20px;

  border-radius: 15px 15px 0 0;

  text-shadow: 2px 2px 4px rgba(130, 129, 129, 0.5);
`;

const Header = () => {
  return <StHeader>MY_TODO_LIST</StHeader>;
};

export default Header;
