import React from 'react';
import styled from 'styled-components';
interface HeadersProps {
  //   title: string;
}

const Headers: React.FC<HeadersProps> = () => {
  return (
    <HeadersStyle>
      <p>Body</p>
    </HeadersStyle>
  );
};

const HeadersStyle = styled.div``;

export default Headers;
