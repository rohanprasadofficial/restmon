import React from 'react';
import styled from 'styled-components';
import { Badge } from 'antd';
import Text from 'antd/lib/typography/Text';
interface EnvListItemProps {
  title?: string;
  routeCount?: number;
}
const EnvListItem: React.FC<EnvListItemProps> = ({ title, routeCount = 0 }) => {
  return (
    <EnvListItemStyle>
      <Badge size="small" count={routeCount}>
        <Text strong className="title">
          {title}
        </Text>
      </Badge>
    </EnvListItemStyle>
  );
};

const EnvListItemStyle = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: row;
  background-color: #f3f3f3;
`;

export default EnvListItem;
