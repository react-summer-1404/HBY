import React, { useState, useRef } from "react";
import InputSearch from "./InputSearch";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../../core/services/interceptor";
import http from "../../../../core/services/interceptor";
import { Searching } from "../../searchlanding/Searching";
// import { Searching } from "../../landingReport/searchlanding/Searching";

const HerosectionRight = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(true);
  const ref = useRef();

  const mm = show
    ? `mt-[22rem] `
    : `bg-bluec , p-3 , text-black , rounded-lg ,mt-[0px]`;
  const ms = show ? ` hidden` : `block`;
  const msv = show ? `` : `top-[27px] left-[23px]`;
  const mi = show
    ? `ring-[#E3D4FF] ring-8 ring-opacity-30`
    : `ring-[#E3D4FF] ring-8 ring-opacity-0`;
  // ******************* API: COURSE *******************
  const getCourseSearch = async () => {
    const res = await apiClient.get(
      `/Home/GetCoursesWithPagination?PageNumber=1&SortingCol=Active&SortType=DESC${searchQuery}`
    );
    return res.data;
  };

  const {
    data: courseSearch,
    isLoading: courseIsLoading,
    isError: courseIsError,
    error: courseError,
    refetch: courseRefetch,
  } = useQuery({
    queryKey: ["courseListSearch", searchQuery],
    queryFn: getCourseSearch,
    enabled: true,
  });

  // ******************* API: NEWS *******************
  const getNewsSearch = async () => {
    const res = await http.get(
      `/News?PageNumber=1&SortType=DESC${searchQuery}`
    );
    return res.data;
  };

  const {
    data: newsSearch,
    isLoading: newsIsLoading,
    isError: newsIsError,
    error: newsError,
    refetch: newsRefetch,
  } = useQuery({
    queryKey: ["newsListSearch", searchQuery],
    queryFn: getNewsSearch,
    enabled: true,
  });

  // ******************* HANDLE SEARCH INPUT *******************
  const handelSearch = (e) => {
    if (e.target.value === "") {
      setShow(true);
      setSearchQuery("");
    } else {
      clearTimeout(ref.current);
      setShow(false);

      ref.current = setTimeout(() => {
        setSearchQuery(`&Query=${e.target.value}`);
      }, 800);
    }
  };

  return (
    <>
      <div className="lg:left-[-126px] lg:w-[550px] lg:h-75 w-[345px] h-[123px] space-y-9">
        <h1 className="lg:mb-12 font-bold text-5xl dark:text-amber-50">
          آکادمی{" "}
          <span className="text-[#3C8B85] text-5xl font-bold dark:text-emerald-500">
            دکتر کد
          </span>
        </h1>

        <h2 className="font-bold dark:text-amber-50">
          با ما به دنیای جذاب کدنویسی وارد شوید.
        </h2>

        {/* <div className="lg:mt-10 mt-48 lg:block hidden">
          <InputSearch
            titel="هر آنچه در آکادمی دنبالش هستید..."
            color="#9B0EE1"
                               />
        </div> */}

        <div className="mt-15 relative">
          <input
            onChange={handelSearch}
            type="text"
            id="search"
            className={`md:top-80 text-right bg-white ring-0 focus:ring-0 border border-gray-300  dark:bg-gray-700  pr-6 rounded-md w-full h-[3rem] ${mi}`}
            placeholder="جستجوی هر آنچه در آکادمی هست ..."
            style={{ boxShadow: "none", border: "2px solid #9B0EE1" }}
          />
          <img
            src="../../../../../public/imgHero/search.svg"
            className=" bg-[#9B0EE1] absolute top-0 end-0 p-2.5 w-22 h-12  text-white  rounded-e-lg border border-fuchsia-700 hover:bg-fuchsia-800 dark:hover:bg-fuchsia-700"
            alt=""
          />
        </div>
        <div
          className={`h-[200px] md:h-[20rem] overflow-y-scroll flex ${ms} dark:bg-gray-900`}
        >
          <div className="z-100 flex gap-5  dark:bg-gray-900 pt-1 w-full h-[250px]">
            <Searching
              courseSearch={courseSearch?.courseFilterDtos}
              newsSearch={newsSearch?.news}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HerosectionRight;
