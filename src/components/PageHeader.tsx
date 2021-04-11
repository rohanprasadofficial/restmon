import React from 'react';
import styled from 'styled-components';
import { SettingFilled, MoreOutlined, GithubFilled } from '@ant-design/icons';
interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <PageHeaderStyle>
      <div>
        <h1 className="pageTitle">{props.title}</h1>
      </div>

      <div className="icons">
        <span className="settingIcon">
          <SettingFilled />
        </span>
        <MoreOutlined className="moreIcon" />
        <GithubFilled className="githubIcon" />
      </div>
    </PageHeaderStyle>
  );
};

const PageHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .pageTitle {
    font-size: 1.25rem;
    margin-left: 0.5rem;
  }
  .ghStar {
    margin: 0.8rem;
    padding: 0;
  }
  .icons {
    .settingIcon,
    .moreIcon,
    .githubIcon {
      cursor: pointer;
      margin: 1rem;
      height: 200px;
    }
  }
`;

export default PageHeader;
