"use client";

import React from "react";
import Btn from "../Button";
import Modal from "./index";
import { Button } from "rsuite";
import { Form, Formik, ErrorMessage } from "formik";
import FormikControl from "../formik/formikControl";
import ButtonII from "../button/index";
import { login } from "@/store/action/authAction";
import { TextError } from "../utils/errorFields/textError";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LoaderKey } from "../utils/loaderKey";
import * as Yup from "yup";
import Home from "@/pages";

const LoginModal = ({
  close,
  triggerSignupModal,
  triggerForgotPasswordModal,
}) => {
  const dispatch = useDispatch(); //Initialize useDispatch hook
  const loading = useSelector((state) => state.app);
  const auth = useSelector((state) => state.auth);
  const { loginisSuccess } = auth;
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    email: "",
    password: "",
    // rememberMe: false,  Initialize rememberMe field to false (unchecked) by default
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches
      // /^.{8,}$/,
      // "Must Contain at least 8 characters"
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
      // "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
      (),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    dispatch(login({ data: values }));
  };
  console.log(loginisSuccess);
  useEffect(() => {
    // we will set the loginmodal to false when the login process is successfyll
    if (loginisSuccess) {
      close(false);
      //login and push to Home
      router.push("/");
    }
  }, [loginisSuccess]);

  return (
    <Modal close={close}>
      <div className="w-full flex flex-col gap-4">
        <h3 className=" text-2xl  text-center uppercase font-bold tracking-wider ">
          Login
        </h3>

      {/* <div className="space-y-7">
                    <div className="mt-[30px] inline-flex items-center justify-center w-full">
                      <hr className="min-w-[330px] h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                      <span className="text-xs text-[#989898] absolute px-3 font-[600] text-gray-900 -translate-x-1/2 bg-white left-1/2">
                        or sign up with
                      </span>
                    </div>
                    {/* <div className="flex gap-x-3">
                      <Button className="!min-w-[160px] border-[#DCDFF1] border">
                        <img src={require("../Images/google.png")} />
                        <p className="sharp-sans-bold text-xs ml-1">Google</p>
                      </Button>
                      <Button className="!min-w-[160px] border-[#DCDFF1] border">
                        <img src={require("../Images/facebook.png")} />
                        <p className="-ml-1 sharp-sans-bold text-xs">
                          Facebook
                        </p>
                      </Button>
                    </div>
                  </div> */}
        <div className="mt-2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className="space-y-[20px]">
                  <FormikControl
                    control="input"
                    type="email"
                    label="Email address"
                    name="email"
                    placeholder="Enter your email address"
                    className="!min-w-[350px]"
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                    className="!min-w-[350px]"
                  />
                  {errorMessage && <TextError>{errorMessage}</TextError>}

                  <div className="pt-2">
                    <ButtonII
                      className="bg-black text-white"
                      type="submit"
                      disable={!formik.isValid || formik.isSubmitting}
                      loading={loading[LoaderKey.LOGIN_KEY]?.loading}
                    >
                      {formik.isSubmitting ? "Logging in..." : "Log in"}
                    </ButtonII>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => triggerForgotPasswordModal(true)}
            className="underline pt-4 text-[14px] "
          >
            Forgot password?
          </button>
        </div>

        <div className="flex justify-center text-sm space-x-4 gap-1"> Don't have an account? 
          <button
            onClick={() => triggerSignupModal(true)}
            className="underline text-[14px] "
          >
            Sign up
          </button>
        </div>
      </div>

      {/* <div className="mt-2 mb-8 text-center">
          <Btn
            type={"link"}
            text={"Sign up"}
            onClick={() => triggerSignupModal(true)}
          />

        </div> */}
    </Modal>
  );
};

export default LoginModal;
