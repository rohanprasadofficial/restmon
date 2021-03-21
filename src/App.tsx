import React from 'react';
import { Button, DatePicker, version } from 'antd';
import './App.global.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </div>
  );
};
export default App;
