import React from 'react';
import styled from 'styled-components';
interface RulesProps {
  //   title: string;
}

const Rules: React.FC<RulesProps> = () => {
  return (
    <RulesStyle>
      <p>Body</p>
    </RulesStyle>
  );
};

const RulesStyle = styled.div``;

export default Rules;
