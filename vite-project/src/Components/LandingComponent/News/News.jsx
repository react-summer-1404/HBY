import React from "react";
import CardNews from "./CardNews/CardNews";

const News = () => {
    return (
        <div className="w-full h-auto  mt-20">
            <div className="w-full h-full">
                    <div className="flex flex-col justify-center items-center my-3">
                    <div className="flex w-full justify-center">
                    <img
                        className="transform scale-x-[-1]"
                        src="../../../../public/span-icon/vect.svg"
                        alt=""
                    />
                    <h4 className="mb-2  dark:text-amber-50">با هر خبر، از همه جلوتر</h4>
                    <img
                        className="transform scale-x-[-1]"
                        src="../../../../public/span-icon/vect(1).svg"
                        alt=""
                    />
                    </div>
                    <h1 className="font-bold text-2xl  dark:text-amber-50">خبر های داغ دریچه ای به دنیای تازه ها </h1>
                    </div>
                <div className="md:gap-12 w-auto h-auto md:flex md:flex-row  flex flex-col  items-center justify-center">
                    <CardNews/>
                    <CardNews/>
                    <CardNews/>
                </div>
            </div>
        <div  className="h-[40px] w-[120px] border-2 border-fuchsia-700 rounded-2xl flex flex-col justify-center items-center text-fuchsia-700 mx-auto mt-10  dark:border-fuchsia-500 dark:text-white">بیشتر ببین </div>
        </div>
    );
};

export default News;
