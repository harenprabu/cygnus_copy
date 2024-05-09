'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react'

import * as Yup from 'yup';
import { useRouter, Router } from 'next/navigation';


const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  //password: Yup.string().required('Rquired'),
});



const SignInOtp = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();


  async function signIn(formData) {
    router.replace("/verify-otp?email="+formData.email);
    console.log(formData.email);


    
        
         
        const { data, error } = await supabase.auth.signInWithOtp({
          email: formData.email,
          options: {
            emailRedirectTo: 'https://app.tadkastudios.com/profile',
          },
        });
        

        /*
        if (data?.session === null) {
          console.log(formData.email);
          Router.push({ pathname: '/app/verify-otp', query: { email:  }, });
        }
        if(data.user==null) {
          router.push({
            pathname: '/verify-otp',
            query: { email: formData.email },
          });
        }
        */
    
        if (error) {
          setErrorMsg(error.message);
        }
        else{
          router.replace("/verify-otp?email="+formData.email);
    console.log(formData.email);
        }
      } 
  
  
  return (
    <div className="card">
      <h2 className="w-full text-center">Sign In</h2>
      <Formik
        initialValues={{
          email: '',
          //password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        {({ errors, touched }) => (
          <Form className="column w-full">
            <label htmlFor="email">Email</label>
            <Field
              className={cn('input', errors.email && touched.email && 'bg-red-50')}
              id="email"
              name="email"
              placeholder="youremail@here.com"
              type="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-600">{errors.email}</div>
            ) : null}

          
            <button className="button-inverse w-full" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
      {/* <Link href="/sign-up" className="link w-full">
        Don&apos;t have an account? Sign Up.
      </Link> */}
    
    
      
    </div>
     
   
  );
};

export default SignInOtp;
