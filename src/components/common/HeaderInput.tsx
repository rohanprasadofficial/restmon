import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import Text from 'antd/lib/typography/Text';
import { DeleteOutlined } from '@ant-design/icons';

interface HeaderInputProps {
  title?: string;
  routeCount?: number;
}
const HeaderInput: React.FC<HeaderInputProps> = ({ title, routeCount = 0 }) => {
  return (
    <HeaderInputStyle>
      <Input placeholder="Name" className="name" />
      <Input placeholder="Value" className="value" />
      <DeleteOutlined className="deleteIcon" />
    </HeaderInputStyle>
  );
};

const HeaderInputStyle = styled.div`
  display: flex;
  margin: 1rem auto;
  .name,
  .value {
    width: 40%;
  }
  .name {
    margin-right: 1rem;
  }
  .deleteIcon {
    margin: auto 2rem;
  }
`;

export default HeaderInput;
