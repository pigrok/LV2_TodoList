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

  text-shadow: 2px 2px 4px rgba(130, 129, 129, 0.5);
`;

const Footer = () => {
  return <StFooter>By.pig_rok</StFooter>;
};

export default Footer;
