import React from 'react';
import styled from 'styled-components';
import RulesInput from './common/RulesInput';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
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
      <Button icon={<AppstoreAddOutlined />}>Add Rule</Button>
    </RulesStyle>
  );
};

const RulesStyle = styled.div``;

export default Rules;
