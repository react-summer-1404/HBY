import React from "react";

const RectangleRight = () => {
  return (
    <div className="w-[600px] h-[650px] dark:bg-gray-700 ml-28 bg-white rounded-4xl">
      <div className=" flex justify-between">
        <span className="font-bold text-cyan-600  mt-4 ml-6 dark:text-cyan-300">
          نمایش بیشتر
        </span>
        <span className="font-bold mr-5 mt-3 text-2xl text-fuchsia-700 mb-5">
          نظر کاربران
        </span>
      </div>
      {/* نظرات */}
      <span className="font-bold ml-130 ">دوره ها</span>
      <div className="w-[550px] m-5 h-[234px] rounded-3xl shadow-2xl p-5 shadow-gray-300" dir="rtl">
        <div className="border border-gray-400 p-1 rounded-2xl w-[490px] h-[60px]">
          <div className="h-[50px] flex justify-around">
            <div className="rounded-4xl w-10 h-10">
              <img
                className="rounded-4xl mt-1 w-10 h-10"
                src="/public/comment/ec1fcb714dd9fbf1c934fb21cd1d77bc00bc0c64.png"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-[14px] text-gray-600 dark:text-gray-400">
                محمد علی راه نشین
              </p>
              <p className="font-bold dark:text-gray-100">
                دوره ی بسیار مفیدی بود ، استادانی عالی با تدریس متعالی{" "}
              </p>
            </div>
            <div className="font-bold mt-1 text-[11px] text-gray-600 dark:text-gray-400">
              {" "}
              27 تیر 1404
            </div>
          </div>
        </div>
      </div>
      <span className="font-bold ml-130 ">نظرات</span>
      <div className="w-[550px] m-5 h-[234px] rounded-3xl shadow-2xl p-5 shadow-gray-400" dir="rtl">
        <div className="border border-gray-400 p-1 rounded-2xl w-[490px] h-[60px]">
          <div className="h-[50px] flex justify-around">
            <div className="rounded-4xl w-10 h-10">
              <img
                className="rounded-4xl mt-1 w-10 h-10"
                src="/public/comment/ec1fcb714dd9fbf1c934fb21cd1d77bc00bc0c64.png"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-[14px] text-gray-600 dark:text-gray-400">
                محمد علی راه نشین
              </p>
              <p className="font-bold dark:text-gray-100">
                دوره ی بسیار مفیدی بود ، استادانی عالی با تدریس متعالی{" "}
              </p>
            </div>
            <div className="font-bold mt-1 text-[11px] text-gray-600 dark:text-gray-400">
              {" "}
              27 تیر 1404
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleRight;
