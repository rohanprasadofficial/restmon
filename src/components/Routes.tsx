import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, List, Button } from 'antd';
import { UserOutlined, PieChartOutlined } from '@ant-design/icons';
import ListItem from './common/ListItem';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Routes: React.FC = () => {
  return (
    <RoutesStyle>
      <Layout>
        <Sider
          style={{ backgroundColor: 'white', height: '100vh' }}
          trigger={null}
          collapsible={false}
        >
          <ListItem title="/getUsers" />
          <ListItem title="/login" />
          <ListItem title="/test" />
          <Button className="addRouteBtn">Add Route</Button>
        </Sider>
        <Layout className="site-layout">
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </RoutesStyle>
  );
};

const RoutesStyle = styled.div`
  height: 400px;
  .sideb {
    width: 200px;
  }
  .addRouteBtn {
    margin: 0.5rem;
  }
`;

export default Routes;
