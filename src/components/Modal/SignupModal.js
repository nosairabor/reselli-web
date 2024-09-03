"use client";

import React from "react";
import Btn from "../Button";
import Modal from "./index";
import { Button } from "rsuite";
import { Form, Formik, ErrorMessage } from "formik";
import FormikControl from "../formik/formikControl";
import ButtonII from "../button/index";
import { signUp } from "../../store/action/authAction";
import { TextError } from "../utils/errorFields/textError";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LoaderKey } from "../utils/loaderKey";
import * as Yup from "yup";

const SignupModal = ({ close, triggerLoginModal }) => {
  const dispatch = useDispatch(); //Initialize useDispatch hook
  const loading = useSelector((state) => state.app);
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); //useState to track if a user has signedup after the api call was successful to render the successful signup message

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    middleName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        // /^.{8,}$/,
        // "Must Contain at least 8 characters"
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
        "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
      ),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await dispatch(signUp({ data: values }));
      if (res.payload.user.firstName) {
        setIsSignUp(true);
      }
    } catch (err) {
      setErrorMessage("Email already taken.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-0 z-[40000] left-0 right-0 top-0 bg-sky-500/30">
      <div className="absolute top-1/2 left-1/2">
        .
        <div className="w-full">
          <section className="modal min-h-[650px] overflow-hidden bg-white rounded-md">
            <div className="sticky top-0 border px-6 py-4 bg-white flex justify-between">
              <div className="modalTitle">&nbsp;</div>
              <div className="modal-close-btn">
                <button
                  className="px-3 py-2 border hover:cursor"
                  onClick={() => close(false)}
                >
                  {" "}
                  X{" "}
                </button>
              </div>
            </div>
            <div
              className={`modal-body px-6 pt-1 flex flex-col gap-6 max-h-[580px] overflow-auto`}
            >
              <h3
                className={`${
                  isSignUp && "hidden"
                } mt-4 text-2xl text-primary text-left uppercase font-bold tracking-wider`}
              >
                Join Resellly!
              </h3>

              <div className={`${isSignUp && "hidden"} mt-3`}>
                {/* Google authentication  */}
                <div className="w-full grid grid-cols-1 gap-4 justify-center items-center">
                  <div classname="w-full bg-gray-400 p-2 block">
                    <Button
                      style={{
                        width: "100%",
                        gap: "40px",
                        justifyContent: "flex-start",
                      }}
                      classname="my-4 w-full flex items-center gap-4"
                      onClick={() => {
                        /* Placeholder for Google Authenticator click */
                      }}
                    >
                      {" "}
                      <img
                        src="/icons/google.svg"
                        alt="Login With Google"
                        className="h-7 text-left"
                      />
                      <span classname="flex-1">Login with Google</span>
                    </Button>
                  </div>

                  {/* Apple authentication */}
                  <div
                    style={{ width: "100%" }}
                    classname="bg-gray-400 rounded my-6 p-1 w-full items-center justify-center  flex font-bold"
                  >
                    <Button
                      style={{ width: "100%" }}
                      onClick={() => {
                        /* Placeholder for Apple Authenticator click */
                      }}
                      classname="w-full  items-center justify-center  flex space-x-4"
                    >
                      {" "}
                      <img
                        src="/icons/apple-logo.svg"
                        alt="Login With Apple"
                        className="mt-1 text-left h-7"
                      />
                      <span className="flex-1">Login with Apple ID</span>
                    </Button>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <h3 classname="flex justify-center w-full items-center">
                      -- OR --
                    </h3>
                  </div>
                </div>
                {/* .w-full.flex.flex-col.gap-4 */}

                {/*Signup form */}
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
                          type="text"
                          label="First Name"
                          name="firstName"
                          placeholder="Enter your first name"
                          className="!min-w-[330px]"
                        />
                        <FormikControl
                          control="input"
                          type="text"
                          label="Middle Name"
                          name="middleName"
                          placeholder="Enter your middle name"
                          className="!min-w-[330px]"
                        />
                        <FormikControl
                          control="input"
                          type="text"
                          label="Last Name"
                          name="lastName"
                          placeholder="Enter your last name"
                          className="!min-w-[330px]"
                        />
                        <FormikControl
                          control="input"
                          type="email"
                          label="Email address"
                          name="email"
                          placeholder="Enter your email address"
                          className="!min-w-[345px]"
                        />
                        <FormikControl
                          control="input"
                          type="password"
                          label="Password"
                          name="password"
                          placeholder="Enter your password"
                          className="!min-w-[345px]"
                        />
                        {errorMessage && <TextError>{errorMessage}</TextError>}

                        <div className="pt-[5px]">
                          <ButtonII
                            className="bg-primary text-white"
                            type="submit"
                            disable={!formik.isValid || formik.isSubmitting}
                            loading={loading[LoaderKey.SIGNUP_KEY]?.loading}
                          >
                            {formik.isSubmitting ? "Continue..." : "Continue"}
                          </ButtonII>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>

              <div className={`${isSignUp ? "block" : "hidden"}`}>
                Sign up successful, please
                <span
                  onClick={() => triggerLoginModal(true)}
                  className="cursor-pointer text-primary"
                >
                  {" "}
                  login
                </span>
              </div>

              <div> 
              <div
                className={`${isSignUp && "hidden"} flex justify-center text-sm space-x-4 gap-1 pb-3`} 
              > Already have an account?
                <button
                  onClick={() => triggerLoginModal(true)}
                  className="underline text-[14px] text-[#4E31AA]"
                >
                  Login
                </button>
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
