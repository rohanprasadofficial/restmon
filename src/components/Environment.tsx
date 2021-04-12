import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ListItem from './common/ListItem';

interface EnvironmentProps {
  title: string | null;
}

const Environment: React.FC<EnvironmentProps> = (props) => {
  return (
    <EnvironmentStyle>
      <ListItem title="EN!">{props.title}</ListItem>
    </EnvironmentStyle>
  );
};

const EnvironmentStyle = styled.section`
  margin: 0.5rem;

  .title {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export default Environment;
