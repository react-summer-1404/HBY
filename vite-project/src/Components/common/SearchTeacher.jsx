import React from 'react';
// import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
// const suffix = <AudioOutlined style={{ fontSize: 16, color: '#1677ff' }} />;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchTeacher = () => (
  <Space vertical>
    <Search placeholder="استادتان را پیدا کنید" allowClear onSearch={onSearch} style={{ width: 220 }} />
  </Space>
);
export default SearchTeacher;