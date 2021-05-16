import React from 'react';
import styled from 'styled-components';
interface SettingsProps {
  //   title: string;
}

const Settings: React.FC<SettingsProps> = () => {
  return (
    <SettingsStyle>
      <p>settings</p>
    </SettingsStyle>
  );
};

const SettingsStyle = styled.div``;

export default Settings;
