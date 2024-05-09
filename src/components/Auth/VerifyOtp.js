'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { useSearchParams } from 'next/navigation';


const SignInSchema = Yup.object().shape({
  //email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const VerifyOtp = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);
  const searchParams = useSearchParams();
  


  async function signIn(formData) {
    //console.log(searchParams.get('email'));
    //console.log(formData.password);
    //console.log(searchParams.get('email'));
    //console.log("hello");



  
    //console.log(searchParams.otp);

    const { data, error } = await supabase.auth.verifyOtp({ 
     email: searchParams.get('email'), 
     token:formData.password, 
     type: 'email'})

     if (error) {
                  setErrorMsg(error.message);
                }
      else{
          console.log("success");
          } 

  }

  return (
    <div className="card">
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        {({ errors, touched }) => (
          <Form className="column w-full">
          
           <label htmlFor="email">Enter the 6-digit OTP received in your inbox <b>{searchParams.get('email')} </b> to login </label>
            <Field
              className={cn('input', errors.password && touched.password && 'bg-red-50')}
              id="password"
              name="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="text-red-600">{errors.password}</div>
            ) : null}

           <button className="button-inverse w-full" type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
    </div>
  );
};

export default VerifyOtp;
