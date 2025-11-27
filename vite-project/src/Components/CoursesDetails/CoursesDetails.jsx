import React from "react";

import CoursesDetailLeft from "./CoursesDetailLeft";

import CoursesDetailsRight from "./CoursesDetailsRight";
import { useParams } from "react-router-dom";

const CoursesDetails = () => {
  const { id } = useParams();

  





  return (
    <div>
      {/* up */}
      <div className="flex justify-center gap-5 mt-40 mx-auto items-center w-full h-full">
        {/* right */}
        <CoursesDetailsRight />
        {/* left */}
        <CoursesDetailLeft />
      </div>
      {/* downe */}
      <div></div>
    </div>
  );
};

export default CoursesDetails;
