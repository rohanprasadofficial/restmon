import React from 'react';
import styled from 'styled-components';
import RulesInput from './common/RulesInput';
interface RulesProps {
  //   title: string;
}

const Rules: React.FC<RulesProps> = () => {
  return (
    <RulesStyle>
      <RulesInput />
      <RulesInput />
      <RulesInput />
      <RulesInput />
    </RulesStyle>
  );
};

const RulesStyle = styled.div``;

export default Rules;
