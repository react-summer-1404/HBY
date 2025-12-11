import React, { useState } from "react";
import RegisterButton from "./Register_button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { getData } from "../../core/localStorage/localStorage";
import apiClient from "../../core/services/interceptor";
const MainBox_step_1 = () => {
  const validation = yup.object({
    phoneNumber: yup.string().required("بنویس").length(11),
    password: yup.string().required().min(8),
  });
  const [Loading, setLoading] = useState(false);
  const postApi = async (data) => {
    try {
      setLoading(true);
      const res = await apiClient.post("/Sign/Register", data);
      return res.data;
    } catch (error) {
      console.log(error, "dddddddddddd");
    } finally {
      setLoading(false);
    }
  };
  const onSubmit = (values) => {
    values.gmail = getData("gmail");
    console.log(values);
    postApi(values);
  };
  return (
    <Formik
      initialValues={{ phoneNumber: "", password: "" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={validation}
    >
      <Form className="w-[430px]  flex flex-col items-center">
        <p className="text-lg select-none">{"خوش امدید :)"}</p>
        <h3 className="text-xl font-bold mt-[4px] select-none">
          {"ایجاد حساب کاربری"}
        </h3>
        <div className="relative w-1/1">
          <Field
            name="phoneNumber"
            className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
            placeholder="نلتخلتخهت"
          />
          <ErrorMessage name="phoneNumber"/>
          <img
            src="/register/email.png"
            className="h-[20px] w-[20px] absolute bottom-[10.5px] right-[8px] my-1 "
          />
        </div>
        <div className="relative w-1/1">
          <Field
            name="password"
            className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
            placeholder="رمز عبور"
            type="password"
          />
          <ErrorMessage name="password"/>
          <img
            src="/register/password.png"
            className="h-[20px] w-[20px] absolute bottom-[10.5px] right-[8px] my-1 "
          />
        </div>
        <RegisterButton innerHtml="تایید" className="bg-[#3C8B85] text-white" />
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
