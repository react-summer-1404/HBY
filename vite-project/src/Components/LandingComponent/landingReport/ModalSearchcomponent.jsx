import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalSearchcomponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <Button onClick={showModal}>
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </Button>
      <Modal
        // title="بستن"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        
        {/* <div className="w-[324px] h-[524px] bg-white rounded-[18px] shadow shadow-cyan-700 dark:bg-black dark:shadow-cyan-800"> */}
        <div className="w-full h-[476px] ">
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 mt-8 mb-10 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="  جستجو..."
            required
          />

          <div className="w-[259px] h-[213px] space-y-2">
            <div className="w-[324px] h-[30px] space-x-45">
              <span className="w-[42px] h-[22px] text-emerald-900 dark:text-emerald-700">
                دوره ها
              </span>
              <span className="w-[42px] h-[22px] text-cyan-500 dark:text-cyan-300">
                موارد بیشتر
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
            <div className="w-[260px] h-[75px]">servises</div>
          </div>
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
};
export default ModalSearchcomponent;
