import React from "react";
import { styled } from "styled-components";

const StFooter = styled.footer`
  margin-top: 100px;

  text-align: right;

  font-size: 20px;
  font-weight: bold;
  padding: 30px;

  background-color: #f5cbee;

  border-radius: 0 0 15px 15px;
`;

const Footer = () => {
  return <StFooter>By.pigrok</StFooter>;
};

export default Footer;
