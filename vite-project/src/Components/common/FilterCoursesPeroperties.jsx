import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import SearchTeacher from './SearchTeacher';
const items = [
  // {
  //   key: '1',
  //   label: <SearchTeacher/>,
  // },
  {
    key: '2',
    label: 'محبوب ترین',
  },
  {
    key: '3',
    label: ' گران ترین',
  },
  {
    key: '4',
    label: 'ارزان ترین',
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
      <Space className="font:yekan border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex justify-between p-2 text-gray-600  dark:text-amber-50 dark:bg-gray-600 dark:border-gray-700 ">
   مرتب شده بر اساس
        
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default FilterCoursesPeroperties;