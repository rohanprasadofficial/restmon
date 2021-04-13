import React from 'react';
import styled from 'styled-components';

interface BodyProps {
  //   title: string;
}

const Body: React.FC<BodyProps> = () => {
  return (
    <BodyStyle>
      <p>Body</p>
    </BodyStyle>
  );
};

const BodyStyle = styled.div``;

export default Body;
