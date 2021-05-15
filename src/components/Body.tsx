import React from 'react';
import styled from 'styled-components';
import { Upload, message, Button, Select, Divider, Input } from 'antd';
import { UploadOutlined, FileAddFilled } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
interface BodyProps {
  //   title: string;
}
const Option = Select.Option;
const { TextArea } = Input;
const statusCodes = [
  { code: 100, title: 'Continue' },
  { code: 101, title: 'Switching Protocols' },
  { code: 103, title: 'Early Hints' },
  { code: 200, title: 'OK' },
  { code: 201, title: 'Created' },
  { code: 202, title: 'Accepted' },
  { code: 203, title: 'Non-Authoritative Information' },
  { code: 204, title: 'No Content' },
  { code: 205, title: 'Reset Content' },
  { code: 206, title: 'Partial Content' },
  { code: 300, title: 'Multiple Choices' },
  { code: 301, title: 'Moved Permanently' },
  { code: 302, title: 'Found' },
  { code: 303, title: 'See Other' },
  { code: 304, title: 'Not Modified' },
  { code: 307, title: 'Temporary Redirect' },
  { code: 308, title: 'Permanent Redirect' },
  { code: 400, title: 'Bad Request' },
  { code: 401, title: 'Unauthorized' },
  { code: 402, title: 'Payment Required' },
  { code: 403, title: 'Forbidden' },
  { code: 404, title: 'Not Found' },
  { code: 405, title: 'Method Not Allowed' },
  { code: 406, title: 'Not Acceptable' },
  { code: 407, title: 'Proxy Authentication Required' },
  { code: 408, title: 'Request Timeout' },
  { code: 409, title: 'Conflict' },
  { code: 410, title: 'Gone' },
  { code: 411, title: 'Length Required' },
  { code: 412, title: 'Precondition Failed' },
  { code: 413, title: 'Payload Too Large' },
  { code: 414, title: 'URI Too Long' },
  { code: 415, title: 'Unsupported Media Type' },
  { code: 416, title: 'Range Not Satisfiable' },
  { code: 417, title: 'Expectation Failed' },
  { code: 418, title: "I'm a teapot" },
  { code: 422, title: 'Unprocessable Entity' },
  { code: 425, title: 'Too Early' },
  { code: 426, title: 'Upgrade Required' },
  { code: 428, title: 'Precondition Required' },
  { code: 429, title: 'Too Many Requests' },
  { code: 431, title: 'Request Header Fields Too Large' },
  { code: 451, title: 'Unavailable For Legal Reasons' },
  { code: 500, title: 'Internal Server Error' },
  { code: 501, title: 'Not Implemented' },
  { code: 502, title: 'Bad Gateway' },
  { code: 503, title: 'Service Unavailable' },
  { code: 504, title: 'Gateway Timeout' },
  { code: 505, title: 'HTTP Version Not Supported' },
  { code: 506, title: 'Variant Also Negotiates' },
  { code: 507, title: 'Insufficient Storage' },
  { code: 508, title: 'Loop Detected' },
  { code: 510, title: 'Not Extended' },
  { code: 511, title: 'Network Authentication Required' },
];

const Body: React.FC<BodyProps> = () => {
  const fileprops = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <BodyStyle>
      <Select
        style={{ width: 400 }}
        defaultValue={statusCodes[0].code + ' - ' + statusCodes[0].title}
      >
        {statusCodes.map((e) => {
          return <Option value={e.code}>{e.code + ' - ' + e.title} </Option>;
        })}
      </Select>
      <Title style={{ marginTop: '1.5rem', marginBottom: '10px' }}>
        <FileAddFilled /> File
      </Title>
      <Divider style={{ marginTop: '0', marginBottom: '10px' }} />
      <Upload {...fileprops}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>

      <Title style={{ marginTop: '1.5rem', marginBottom: '10px' }}>
        Body (Content-Type application/json)
      </Title>
      <Divider style={{ marginTop: '0', marginBottom: '10px' }} />
      <TextArea allowClear placeholder="Enter body response" rows={4} />
    </BodyStyle>
  );
};

const BodyStyle = styled.div``;

export default Body;
