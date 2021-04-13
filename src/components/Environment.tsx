import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import EnvListItem from './common/EnvListItem';
import { PlusOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';

interface EnvironmentProps {
  // title: string | null;
}

const Environment: React.FC<EnvironmentProps> = (props) => {
  return (
    <EnvironmentStyle>
      <div className="heading">
        <Title level={3}>Environments</Title>
      </div>

      <EnvListItem title="Prod ENV" routeCount={10} />

      <Button
        type="dashed"
        className="addButton"
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
  margin: 0 auto;
  .title {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  .heading {
    height: 3rem;

    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 1rem;
  }
  .addButton {
    margin: 1rem 1rem;
    width: 80%;
  }
`;

export default Environment;
