import React from 'react';
import styled from 'styled-components';

interface ListItemProps {
  title: string;
}
const ListItem: React.FC<ListItemProps> = (props) => {
  return <ListItemStyle>{props.title}</ListItemStyle>;
};

const ListItemStyle = styled.li`
  list-style: none;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #ebe8e8;
  /* background-color: #f3f3f3; */
`;

export default ListItem;
