import React, { useState } from 'react';
import './App.global.css';
import PageHeader from './components/PageHeader';
import Routes from './components/Routes';

import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { UserOutlined, PieChartOutlined } from '@ant-design/icons';
import ListItem from './components/common/ListItem';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AppStyle>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <ListItem title="Hello" />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            <PageHeader title="Restmon" />
          </Header>
          <Content>
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </AppStyle>
  );
};

const AppStyle = styled.div`
  #components-layout-demo-custom-trigger .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #052e55;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;

export default App;
