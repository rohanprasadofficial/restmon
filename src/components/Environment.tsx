import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface EnvironmentProps {
  title: string | null;
}

const Environment: React.FC<EnvironmentProps> = (props) => {
  return (
    <EnvironmentStyle>
      <p className="title">{props.title}</p>
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
