import React from "react";

const Services = () => {
    return (
        <div className="w-full h-[554px] md:flex md:flex-col justify-center items-center hidden">
            <div className="flex flex-col justify-center items-center my-10">
                <div className="flex w-full justify-center">
                <img
                    className="transform scale-x-[-1]"
                    src="../../../../public/span-icon/vect.svg"
                    alt=""
                />
                <h4 className="mb-2 dark:text-amber-50">خدمات حرفه ای،کیفیت بی نظیر</h4>
                <img
                    className="transform scale-x-[-1]"
                    src="../../../../public/span-icon/vect(1).svg"
                    alt=""
                />
                </div>
                <h1 className="font-bold text-2xl  dark:text-amber-50">خدمات ما،راهی به سوی موفقیت شما</h1>
            </div>
            <div className="flex w-full h-[424] justify-center items-center ">
                <div className="w-[475] h-[400]">
                    <img src="../../../../public/services/img.svg" alt="" />
                    {/* <h1>تجربه ای بینظیر با خدمات ما، از شروع تا پایان !</h1> */}
                </div>
                <div className="flex w-[735px] h-[410] ">
                    <div className="gap-54 w-[362px] h-[372px] ">
                        <div className="w-[361px] h-[151px] ">
                            <img className="w-[100px] h-[100px] mr-65 " src="../../../../public/services/left/image.svg" alt="" />
                            <div className="w-[350px] h-[100px] flex flex-col -mt-13 justify-center items-center  rounded-[16px] bg-emerald-500 ">
                                <p className="text-[20px]   item text-white   ">مشاوره</p>
                                <span className="text-[16px]  text-white  ">مشاوره حرفه، راهنمایی مطمئن</span>
                            </div>
                        </div>
                        <div className="w-[361px] h-[151px] mt-25 ">
                            <img className="w-[100px] h-[100px] mr-0 " src="../../../../public/services/left/image 4.svg" alt="" />
                            <div className="w-[350px] h-[100px] flex flex-col -mt-13 justify-center items-center  rounded-[16px] bg-fuchsia-700 ">
                                <p className="text-[20px]   item text-white   ">فرصت شغلی</p>
                                <span className="text-[16px]  text-white  ">با ما، شغل رویایی تان را پیدا کنید</span>
                            </div>
                        </div>
                    </div>
                    <div className="gap-54 w-[362px] h-[372px] mt-14 ">
                        <div className="w-[361px] h-[151px] not-odd:-mt-5 ">
                            <img className="w-[100px] h-[100px] mr-65 " src="../../../../public/services/left/image 2.svg" alt="" />
                            <div className="w-[350px] h-[100px] flex flex-col -mt-13 justify-center items-center  rounded-[16px] bg-fuchsia-700 ">
                                <p className="text-[20px]   item text-white   ">آزمون</p>
                                <span className="text-[16px]  text-white  ">با ما،تصمیمات هوشمندانه بگیر!</span>
                            </div>
                        </div>
                        <div className="w-[361px] h-[151px] mt-27 ">
                            <img className="w-[100px] h-[100px] mr-0 " src="../../../../public/services/left/image 3.svg" alt="" />
                            <div className="w-[350px] h-[100px] flex flex-col -mt-13 justify-center items-center  rounded-[16px] bg-emerald-500 ">
                                <p className="text-[20px]   item text-white   ">برترین دوره ها</p>
                                <span className="text-[16px]  text-white  ">اموزش حرفه ای،اینده روشن!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default Services;
