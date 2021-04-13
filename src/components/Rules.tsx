import React from 'react';
import styled from 'styled-components';
import { SettingFilled, MoreOutlined, GithubFilled } from '@ant-design/icons';
interface RulesProps {
  //   title: string;
}

const Rules: React.FC<RulesProps> = (props) => {
  return (
    <RulesStyle>
      <p>Body</p>
    </RulesStyle>
  );
};

const RulesStyle = styled.div``;

export default Rules;
