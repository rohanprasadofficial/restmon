import React from 'react';
import styled from 'styled-components';
import { Layout, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import RouteListItem from './common/RouteListItem';
import Dashboard from './Dashboard';

const { Sider, Content } = Layout;

const Routes: React.FC = () => {
  return (
    <RoutesStyle>
      <Layout>
        <Sider className="sider" trigger={null} collapsible={false}>
          <RouteListItem title="/getUsers" method="GET" />

          <Button
            type="dashed"
            onClick={() => console.log('aswda')}
            block
            icon={<PlusOutlined />}
          >
            Add Route
          </Button>
        </Sider>
        <Content className="content">
          <Dashboard />
        </Content>
      </Layout>
    </RoutesStyle>
  );
};
//TODO: Fix button of Add routes & enviroment
const RoutesStyle = styled.div`
  height: 400px;
  .sider {
    height: 100vh;
    background-color: white;
  }
  .addRouteBtn {
    margin: 0.5rem;
  }
  .content {
    margin: 1.5rem 1rem;
    padding: 1.5rem;
  }
`;

export default Routes;
