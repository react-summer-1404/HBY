import React, { useState } from "react";
import RegisterButton from "./Register_button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import apiClient from "../../core/services/interceptor";
import { setData } from "../../core/localStorage/localStorage";
import { useNavigate } from "react-router-dom";
const MainBox_step_1 = (values) => {

  const validation = yup.object({
    gmail: yup.string().required("بنویس").email("ایمیلٍ لامسب"),
  });
  const [Loading,setLoading]=useState(false)

  const navigate  = useNavigate();
  const postApi = async (data) => {
    try {
      setLoading(false)
      const res = await apiClient.post("/Sign/SendVerifyMessage", data);
      return res.data;
    } catch (error) {
      console.log(error,"dddddddddddd");
    }
  };
  const onSubmit = (values) => {
    console.log(values.gmail);
    setData("gmail", values.gmail);
    postApi(values);
    navigate("/register/step2");
  };
  return (
    <Formik
      initialValues={{ gmail: "" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={validation}
    >
      <Form className="w-[430px]  flex flex-col items-center space-y-3">
        <p className="text-lg select-none">{"خوش امدید :)"}</p>
        <h3 className="text-xl font-bold mt-[4px] select-none">
          {"ایجاد حساب کاربری"}
        </h3>
        <div className="relative w-1/1">
          <Field
            name="gmail"
            className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
            placeholder="ایمیل..."
          />
          <ErrorMessage
            name="gmail"
            render={(msg) => (
              <div className="py-3 mt-4 mb-4 pr-2 rounded-[8px] dark:bg-gray-800 bg-amber-100">
                {msg}
              </div>
            )}
          />
          <img
            src="/register/phone_black.png"
            className="h-[30px] w-[30px] absolute top-[36px] right-[5px] my-1 "
          />
        </div>
        <RegisterButton
          isLoading={Loading}
          innerHtml="ریافت کد تایید"
          className="bg-[#3C8B85] text-white"
          to="/register/step2"
        />
        <p className="select-none">
          حساب کاربری ندارید؟
          <a className="underline text-blue-600 cursor-pointer mr-1 font-semibold">
            ورود
          </a>
        </p>
      </Form>
    </Formik>
  );
};

export default MainBox_step_1;
