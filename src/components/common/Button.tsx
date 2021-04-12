import React from 'react';
import styled from 'styled-components';
import { Button as BA } from 'antd';
interface ButtonProps {
  title: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyle>
      <BA className="button">Hello</BA>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  .button {
    padding: 1rem 0.5rem;
    background-color: #000000;
  }
`;

export default Button;
