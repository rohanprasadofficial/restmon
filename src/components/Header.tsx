import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import HeaderInput from './common/HeaderInput';
import { AppstoreAddOutlined } from '@ant-design/icons';

interface HeadersProps {
  //   title: string;
}

const Headers: React.FC<HeadersProps> = () => {
  return (
    <HeadersStyle>
      <HeaderInput />
      <HeaderInput />
      <HeaderInput />
      <HeaderInput />
      <Button icon={<AppstoreAddOutlined />}>Add Header</Button>
    </HeadersStyle>
  );
};

const HeadersStyle = styled.div``;

export default Headers;
