import React, { useState } from 'react';
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, Input, Tabs} from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
const { TextArea } = Input;
const { TabPane } = Tabs;
interface DashboardProps {
  //   title: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const [method, setMethod] = useState<React.Key>('GET');
  const onClick = (e: MenuInfo) => {
    console.log(e.key);
    setMethod(e.key);
  };

const OperationsSlot = {
    left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
    right: <Button>Right Extra Action</Button>,
  };

  const menu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="GET">GET</Menu.Item> <Menu.Divider />
      <Menu.Item key="POST">POST</Menu.Item> <Menu.Divider />
      <Menu.Item key="PUT">PUT</Menu.Item> <Menu.Divider />
      <Menu.Item key="HEAD">HEAD</Menu.Item> <Menu.Divider />
      <Menu.Item key="DELETE">DELETE</Menu.Item> <Menu.Divider />
      <Menu.Item key="CONNECT">CONNECT</Menu.Item> <Menu.Divider />
      <Menu.Item key="OPTIONS">OPTIONS</Menu.Item> <Menu.Divider />
      <Menu.Item key="TRACE">TRACE</Menu.Item> <Menu.Divider />
      <Menu.Item key="PATCH">PATCH</Menu.Item>
    </Menu>
  );
  return (
    <DashboardStyle>
      <div className="routeNamePath">
        <Dropdown className="dropDown" overlay={menu} trigger={['click']}>
          <Button>
            {method} <DownOutlined />
          </Button>
        </Dropdown>
        <strong className="divider">/</strong>
        <Input placeholder="Enter path" allowClear onChange={() => {}} />
      </div>
      <TextArea
        placeholder="Add description or refering notes"
        rows={1}
        className="description"
      />
      <TabbingStyleDiv>
        <div className="card-container">
          <Tabs tabBarExtraContent={OperationsSlot} type="card">
            <TabPane tab="Status Code & Body" key="1">
              <p>Content of Tab Pane 1</p>
             
            </TabPane>
            <TabPane tab="Headers" key="2">
              <p>Content of Tab Pane 2</p>
            
            </TabPane>
            <TabPane tab="Rules" key="3">
              <p>Content of Tab Pane 3</p>
             
            </TabPane>
            <TabPane tab="Settings" key="4">
              <p>Content of Tab Pane 3</p>
            
            </TabPane>
          </Tabs>
        </div>
      </TabbingStyleDiv>
    </DashboardStyle>
  );
};
//TODO:  Bring the button to the left align the content
const DashboardStyle = styled.div`
  .routeNamePath {
    display: grid;
    grid-template-columns: 10% 2% 20%;
    .dropDown {
      margin-right: 1rem;
    }
    .divider {
      margin: auto auto;
      margin-right: 1rem;
      font-size: 1.2rem;
      color: #a8a8a8;
    }
  }
  .description {
    margin-top: 1rem;
  }
`;

const TabbingStyleDiv = styled.div`
  margin-top: 1rem;

  .card-container > .ant-tabs-card .ant-tabs-content {
    height: 120px;
    margin-top: -16px;
  }
  .card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
    padding: 16px;
    background: #fff;
  }
  .card-container > .ant-tabs-card > .ant-tabs-nav::before {
    display: none;
  }
  .card-container > .ant-tabs-card .ant-tabs-tab,
  [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab {
    background: transparent;
    border-color: transparent;
  }
  .card-container > .ant-tabs-card .ant-tabs-tab-active,
  [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
    background: #fff;
    border-color: #fff;
  }
  #components-tabs-demo-card-top .code-box-demo {
    padding: 24px;
    overflow: hidden;
    background: #f5f5f5;
  }
  [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-content {
    height: 120px;
    margin-top: -8px;
  }
  [data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab {
    background: transparent;
    border-color: transparent;
  }
  [data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {
    background: #000;
  }
  [data-theme='dark']
    .card-container
    > .ant-tabs-card
    .ant-tabs-content
    > .ant-tabs-tabpane {
    background: #141414;
  }
  [data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
    background: #141414;
    border-color: #141414;
  }
  .tabs-extra-demo-button {
    margin-right: 16px;
  }

  .ant-row-rtl .tabs-extra-demo-button {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export default Dashboard;
