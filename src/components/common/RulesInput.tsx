import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Select } from 'antd';
interface RulesInputProps {
  title?: string;
  routeCount?: number;
}

const Option = Select.Option;
const rulesCodes = [
  { code: 100, title: 'Body Path (JSON/Form data)' },
  { code: 101, title: 'Query string' },
  { code: 101, title: 'Header' },
  { code: 101, title: 'Route Params' },
];
const RulesInput: React.FC<RulesInputProps> = () => {
  return (
    <RulesInputStyle>
      <Select
        className="rulesSelect"
        style={{ width: 400 }}
        defaultValue={rulesCodes[0].code + ' - ' + rulesCodes[0].title}
      >
        {rulesCodes.map((e) => {
          return <Option value={e.code}>{e.code + ' - ' + e.title} </Option>;
        })}
      </Select>
      <Input placeholder="Name" className="name" />
      <h1 className="equalTo"> = </h1>
      <Input placeholder="Value" className="value" />
      <DeleteOutlined className="deleteIcon" />
    </RulesInputStyle>
  );
};

const RulesInputStyle = styled.div`
  display: flex;
  margin: 1rem auto;

  .rulesSelect {
    margin-right: 1rem;
  }
  .name,
  .value {
    width: 30%;
  }
  .equalTo {
    margin: auto;
  }

  .deleteIcon {
    margin: auto 2rem;
  }
`;

export default RulesInput;
