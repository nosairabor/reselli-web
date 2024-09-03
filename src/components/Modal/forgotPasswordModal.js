"use client";

import React from "react";
import Btn from "../Button";
import Modal from "./index";
import { Button } from "rsuite";
import { Form, Formik, ErrorMessage } from "formik";
import FormikControl from "../formik/formikControl";
import ButtonII from "../button/index";
import { forgetPassword } from '../../store/action/authAction';
import { TextError } from "../utils/errorFields/textError";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LoaderKey } from "../utils/loaderKey";
import * as Yup from "yup";



const ForgotPasswordModal = ({ close }) => {

  const dispatch = useDispatch();  //Initialize useDispatch hook
  const loading = useSelector((state) =>state.app);
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false); //useState to track if a user has done  forgotPassword after the api call was successful in order to render the forgotPassword success message
  

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {

    try {
      const res =  await dispatch(forgetPassword({data:values}))
     
        setIsForgotPassword(true);
      

    } catch (err) {
      console.error("login failed for some reason", err);
      setErrorMessage('')
     
    } finally {
      setSubmitting(false);
    }
    
  }

  return (
    <Modal close={close}>
      <h3 className={`${isForgotPassword && 'hidden'} mt-5 mt-4 text-2xl text-center font-semibold tracking-wider`}>
        Forgot your password?
      </h3>
      <div className={`${isForgotPassword && 'hidden'} mt-5`}>
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
                              className="!min-w-[345px]"
                          />
                         
                          {errorMessage && <TextError>{errorMessage}</TextError>}
                        
                          <div className="pt-[5px]">
                              <ButtonII
                                  className="bg-primary text-white !mt-[30px]"
                                  type="submit"
                                  disable={!formik.isValid || formik.isSubmitting}
                                  loading={loading[LoaderKey.FORGET_PASSWORD]?.loading}
                            >
                                  {formik.isSubmitting ? 'Continue...' : 'Continue'}
                              </ButtonII>
                              
                             </div>
                      </Form>
                  )
              }}
              
          </Formik>
        </div>



      <div className={`pb-2 ${isForgotPassword ? 'block' :'hidden'}`}>
        The password reset link has been sent to your email.
      </div>

    </Modal>
  );
};

export default ForgotPasswordModal;
