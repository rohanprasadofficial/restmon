import React, { useState } from 'react';
import './App.global.css';
import { methods } from './constants/methods';
import { Button, List, Divider, Layout, Menu, Badge } from 'antd';
import {
  FolderAddTwoTone,
  SlidersFilled,
  SettingTwoTone,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const data = [
  {
    route: '/getuser',
    method: methods[0].title,
    bg: methods[0].hexColor,
  },
  {
    route: '/deleteuser',
    method: methods[4].title,
    bg: methods[4].hexColor,
  },
  {
    route: '/login',
    method: methods[1].title,
    bg: methods[1].hexColor,
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [serverStatus, setServerStatus] = useState(true);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <h3
          style={{
            display: 'flex',
            color: 'white',
            marginTop: '1.6rem',
            marginLeft: '1.5rem',
          }}
        >
          {!collapsed ? 'Environment(s)' : "E's"}
        </h3>

        <p style={{ width: '100%', height: '1px', color: 'white' }}></p>
        <Menu
          style={{ margin: '1.5rem auto' }}
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <Menu.Item key="1" icon={<SlidersFilled />}>
            {' '}
            <strong> Environment - I</strong>
          </Menu.Item>
          <Menu.Item key="2" icon={<SlidersFilled />}>
            <strong> Environment - II</strong>
          </Menu.Item>
        </Menu>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {collapsed ? (
            <FolderAddTwoTone />
          ) : (
            <Button type="primary" ghost>
              Add Environment
            </Button>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            height: '66%',
            color: 'gray',
          }}
        >
          <p
            style={{
              textAlign: 'center',
            }}
          >
            Build : alpha-0.0.1
          </p>
          <p
            style={{
              textAlign: 'center',
            }}
          >
            Env : dev
          </p>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '5px',
          }}
          className="site-layout-background"
        >
          {serverStatus ? (
            <Button
              type="primary"
              style={{
                margin: 'auto 1rem',
                marginLeft: '0',
                backgroundColor: '#1dd1a1',
                border: 'none',
              }}
              onClick={() => setServerStatus(!serverStatus)}
            >
              Start Server
            </Button>
          ) : (
            <Button
              danger
              type="primary"
              style={{ margin: 'auto 1rem', marginLeft: '0' }}
              onClick={() => setServerStatus(!serverStatus)}
            >
              Stop Server
            </Button>
          )}

          <h4 style={{ color: 'white' }}>Environment I</h4>

          <SettingTwoTone
            style={{
              margin: 'auto 2rem',
              marginLeft: '2rem',
              fontSize: '1.5rem',
            }}
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{ height: '100%', display: 'flex' }}
        >
          <Layout>
            <Sider style={{ backgroundColor: 'white' }} width={'auto'}>
              <Divider orientation="left">Routes</Divider>
              <List
                bordered
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      padding: '1rem 1rem',
                      minWidth: '15rem',
                      justifyContent: 'space-between',
                    }}
                  >
                    {item.route}
                    <Badge
                      count={item.method}
                      style={{ marginLeft: '1.5rem', backgroundColor: item.bg }}
                    />
                  </List.Item>
                )}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                }}
              >
                <Button type="primary" ghost style={{ margin: '10px' }}>
                  Add Route
                </Button>
              </div>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Restmon 2021</Footer> */}
      </Layout>
    </Layout>
  );
};
export default App;
