import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import EnvListItem from './common/EnvListItem';
import { PlusOutlined } from '@ant-design/icons';

interface EnvironmentProps {
  // title: string | null;
}

const Environment: React.FC<EnvironmentProps> = (props) => {
  return (
    <EnvironmentStyle>
      <EnvListItem title="Prod ENV" routeCount={10} />

      <Button
        type="dashed"
        onClick={() => console.log('aswda')}
        block
        icon={<PlusOutlined />}
      >
        Add Environment
      </Button>
    </EnvironmentStyle>
  );
};

const EnvironmentStyle = styled.section`
  margin: 0.5rem auto;
  .title {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export default Environment;
