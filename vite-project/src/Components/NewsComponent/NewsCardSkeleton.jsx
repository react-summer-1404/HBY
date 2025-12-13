import React from "react";
import { Skeleton } from "antd";

const NewsCardSkeleton = () => (
  <div className="w-[350px] mb-6">
    <Skeleton.Image style={{ width: 350, height: 200, borderRadius: 8 }} />
    <Skeleton active paragraph={{ rows: 2 }} />
  </div>
);

export default NewsCardSkeleton;
