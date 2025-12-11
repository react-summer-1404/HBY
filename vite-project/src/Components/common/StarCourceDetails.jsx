import React from 'react';
import { Rate } from 'antd';
const StarCourceDetails = ({item}) => <Rate allowHalf defaultValue={item.currentRate} />;
export default StarCourceDetails;