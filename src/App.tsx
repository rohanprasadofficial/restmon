import React, { useState } from 'react';
import './App.global.css';

import Routes from './components/Routes';

import styled from 'styled-components';
import { Layout, Button, Tag, Divider, InputNumber } from 'antd';

import Environment from './components/Environment';
import Text from 'antd/lib/typography/Text';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [status, setStatus] = useState<boolean>(false);
  return (
    <AppStyle>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible={false}
          style={{ backgroundColor: 'white', borderRight: '1px solid #ebebeb' }}
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <Environment />
        </Sider>
        <Layout className="site-layout">
          <Header className="header">
            {!status ? (
              <Button
                className="button"
                onClick={() => setStatus(!status)}
                type="primary"
              >
                Start
              </Button>
            ) : (
              <Button
                className="button"
                onClick={() => setStatus(!status)}
                danger
                type="primary"
              >
                Stop
              </Button>
            )}
            <Tag color="cyan">Prod Env</Tag>
            <Divider className="divider" type="vertical" />
            <Text strong>127.0.0.1 : </Text>
            <InputNumber
              className="portInput"
              min={1024}
              max={1491510}
              defaultValue={3000}
              placeholder="Port"
              onChange={() => {}}
            />

            <div className="latencyInput">
              <Text strong>Latency(ms) : </Text>
              <InputNumber
                min={0}
                max={10000}
                defaultValue={0}
                placeholder="Latency"
                onChange={() => {}}
              />
            </div>
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
  .site-layout .site-layout-background {
    background: #fff;
  }
  .header {
    color: white;
    padding-left: 1rem;
    .button {
      margin-right: 1rem;
    }
    .divider {
      background-color: white;
    }
    .portInput {
      width: 5%;
      margin-left: 0.2rem;
    }
    .latencyInput {
      float: right;
    }
  }
`;

export default App;
