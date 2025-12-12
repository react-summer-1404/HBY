import React, { useEffect, useState } from "react";

import CoursesDetailLeft from "./NewsDetailLeft";

import CoursesDetailsRight from "./NewsDetailsRight";
import { useParams } from "react-router-dom";
import apiClient from "../../core/services/interceptor";
import NewsDetailsRight from "./NewsDetailsRight";
import NewsDetailLeft from "./NewsDetailLeft";
import ScrollToTop from "react-scroll-to-top";

const NewsDetails = () => {
  const { id } = useParams();

  // hi api
  const [detailsN, setDetailsN] = useState([]);

  const getDetailsN = async () => {
    try {
      const res = await apiClient.get(`/News/${id}`);

      setDetailsN(res?.data || []);
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    getDetailsN();
  }, []);

console.log(
  "ofv ofvخبررررررررر",detailsN
)


  // end
  return (
    <div>
      {/* up */}
      <div className="flex justify-center gap-5 mt-30 mx-auto  px-10  items-start w-full h-full">
        {/* right */}
        <NewsDetailsRight item ={detailsN?.detailsNewsDto} />
        {/* left */}
        <NewsDetailLeft item ={detailsN?.detailsNewsDto} />
      </div>
      {/* downe */}
      <ScrollToTop smooth style={{ backgroundColor: 'rgba(88,0,255,0.4)',
                right: '60px' ,
                borderRadius: '50%' 
                }}/>
      <div></div>
    </div>
  );
};

export default NewsDetails;
