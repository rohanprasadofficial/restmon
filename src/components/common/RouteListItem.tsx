import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
interface RouteListItemProps {
  title: string;
  method: string | 'GET';
}
const RouteListItem: React.FC<RouteListItemProps> = (props) => {
  return (
    <RouteListItemStyle>
      <strong>{props.title}</strong>
      <Tag color="#2db7f5">{props.method}</Tag>
    </RouteListItemStyle>
  );
};

const RouteListItemStyle = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: row;
  background-color: #fdfdfd;
`;

export default RouteListItem;
