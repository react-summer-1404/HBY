import React from "react";
import SearchButton from "../../common/SearchButton";

const ModalSearch = () => {
  return (
    <div className="w-[324px] h-[524px] bg-white rounded-[18px] shadow shadow-cyan-700 dark:bg-black dark:shadow-cyan-800">
      <div className="w-[260px] h-[476px]">
        <div className="w-[79px] h-[30px] rounded-[8px] bg-red-400 pr-5 mr-58 mt-7 dark:bg-red-500 ">
          <span className="text-rose-900 rounded-[5px] dark:text-rose-950">
            بستن
          </span>
        </div>
        <div className="w-[259px] h-[40px] mt-3">
          <SearchButton />
        </div>
        <div className="w-[259px] h-[213px] space-y-2">
          <div className="w-[324px] h-[30px] space-x-45">
            <span className="w-[42px] h-[22px] text-emerald-900 dark:text-emerald-700">
              دوره ها{" "}
            </span>
            <span className="w-[42px] h-[22px] text-cyan-500 dark:text-cyan-300">
              موارد بیشتر{" "}
            </span>
          </div>
          <div className="w-[259px] h-[167px]">
            <div className="w-[259px] h-[84px]">dore</div>
            <div className="w-[259px] h-[84px]">dore</div>
          </div>
        </div>
        <div className="w-[260pxm] h-[121px]">
          <div className="w-[324px] h-[30px] space-x-35">
            <span className="w-[42px] h-[22px] text-emerald-900 dark:text-emerald-700">
              اخبار و مقالات{" "}
            </span>
            <span className="w-[42px] h-[22px] text-cyan-500 dark:text-cyan-300">
              موارد بیشتر{" "}
            </span>
          </div>
          <div className="w-[260px] h-[75px]">
            servises
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSearch;
