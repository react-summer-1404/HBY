import React, { useEffect, useState } from "react";

import CoursesDetailLeft from "./CoursesDetailLeft";

import CoursesDetailsRight from "./CoursesDetailsRight";
import { useParams } from "react-router-dom";
import apiClient from "../../core/services/interceptor";

const CoursesDetails = () => {
  const { id } = useParams();

  // hi api
  const [detailsC, setDetailsC] = useState([]);

  const getDetailsC = async () => {
    try {
      const res = await apiClient.get(`/Home/GetCourseDetails?CourseId=${id}`);

      setDetailsC(res?.data);
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    getDetailsC();
  }, []);

// console.log(
//   "ddddddddd",detailsC
// )


  // end
  return (
    <div>
      {/* up */}
      <div className="flex justify-center gap-5 mt-30 mx-auto items-start  w-full h-full">
        {/* right */}
        <CoursesDetailsRight item={detailsC} />
        {/* left */}
        <CoursesDetailLeft item={detailsC} />
      </div>
      {/* downe */}
      <div></div>
    </div>
  );
};

export default CoursesDetails;
