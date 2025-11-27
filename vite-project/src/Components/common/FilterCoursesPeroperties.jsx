import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
const items = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];
const FilterCoursesPeroperties = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link >
      <Space className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex justify-between p-2 text-gray-600  dark:text-amber-50 dark:bg-gray-600 dark:border-gray-700 ">
        اساتید
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default FilterCoursesPeroperties;