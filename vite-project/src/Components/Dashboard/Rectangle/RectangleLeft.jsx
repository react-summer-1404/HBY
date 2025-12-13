import React from "react";
import RectangleLeftbutton from "./RectangleLeft/RectangleLeftbutton";
import RectangleLeftTop from "./RectangleLeft/RectangleLeftTop";
// import RectanglLeftTop from "./RectangleLeft/RectanglLeftTop";

const RectangleLeft = () => {
  return (
    <div className="hidden lg:block">
    <RectangleLeftTop/>,
    <RectangleLeftbutton />
    </div>
  );
};

export default RectangleLeft;
