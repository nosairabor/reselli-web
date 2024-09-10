import { useDispatch, useSelector } from "react-redux";
import { LoaderKey } from "@/components/utils/loaderKey";

import { useEffect, useState } from "react";

import { TextError } from "@/components/utils/errorFields/textError";
import * as Yup from "yup";
import ButtonII from "@/components/button/index";
import Link from "next/link";
import { Form, Formik, Field, ErrorMessage } from "formik";
import FormikControl from "@/components/formik/formikControl";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";



const SellerProfile = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth:""
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    dateOfBirth: Yup.string().required("Required")
  });

  const dispatch = useDispatch();
  
  const loading = useSelector((state) => state.app);

  useEffect(() => {
    // get the access token from the local storage
    
  }, []);

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const parameters = {
        data: {
          ...values,
          // date_of_birth: format(new Date(values.date_of_birth), "yyyy-MM-dd")
        },
        accessToken: accessToken,
      };
      const res = await dispatch((parameters));
      if (res.payload.success === true) {
        // console.log("Step 2 account creation is successful");
        // navigate("/mechanic-create-account3");
      }
    } catch (err) {
      console.error("Create Account failed!:", err);
      setErrorMessage("User too young to create an account");
      // Log error message
    } finally {
      setSubmitting(false); // Reset submitting state in Formik
    }
  };

  return (
    <div className="sharp-sans flex flex-col justify-center items-center">
      <div className="mt-10">
        <div className="space-y-1">
          <h3 className="sharp-sans-bold text-2xl text-center">Become a Seller!</h3>
          <p className="sharp-sans text-xs font-medium text-[#878C98] text-center">
            Update your personal details to become a seller
          </p>
        </div>


        <div className="mt-4">
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
                    name="first_name"
                    placeholder="Enter your first name"
                    className="!min-w-[330px] lg:!min-w-[400px]"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Description"
                    name="last_name"
                    placeholder="Enter the description of your business"
                    className="!min-w-[330px] lg:!min-w-[400px]"
                  />
                  <div className="relative">
                    <FormikControl
                        control="input"
                        type="text"
                        label="Address"
                        name="phone_number"
                        placeholder=""
                        className="text-center !min-w-[330px] lg:!min-w-[400px]"
                        
                        
                    />
                        <div className={`flex items-center py-3 space-x-3 absolute left-2 top-[18px]  `}>
                            <p className="text-xs">+234</p>
                            <div className="w-[2px] h-[27px] bg-[#D9D9D9] "></div>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="sharp-sans text-[14px] font-[600] pointer-events-none, max-w-[75%]">Date of Birth</p>
                        <Field name="date_of_birth">
                            {({ field, form }) => (
                            <DatePicker
                                {...field}
                                selected={field.value}
                                onChange={(val) => form.setFieldValue(field.name, val)}
                                dateFormat="yyyy/dd/MM"
                                label="Date of Birth"
                                placeholderText="YY/MM/DD"
                                className="!min-w-[330px] lg:!min-w-[400px] mt-1 py-[2px] px-2 text-[14px] rounded-[3px] border border-[#DCDFF1] pr-[42px] min-h-[44px] focus:shadow-[0_0_3px_#E6ECF7] max-h-[44px]"
                                showYearDropdown
                            />
                            )}
                        </Field>
                        {/* <div className="w-auto absolute right-[30px] top-[35px]">
                            <img
                                src={require('../Images/Calendar.png')}    
                            />
                        </div> */}
                        <ErrorMessage name="dateOfBirth" component={TextError}/>
                    </div>

                  {/* <ErrorMessage name="terms" component={TextError} /> */}
                  {errorMessage && <TextError>{errorMessage}</TextError>}

                  <div className="pt-[5px]">
                    <ButtonII
                      className="bg-black text-white !mt-[30px]"
                      type="submit"
                      disable={!formik.isValid || formik.isSubmitting}
                      loading={loading[LoaderKey.USER_CREATE_ACCOUNT_STEP2]?.loading}
                    >
                      {formik.isSubmitting ? "Creating..." : "Continue"}
                    </ButtonII>
                   
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
