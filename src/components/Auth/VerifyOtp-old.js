'use Client';


import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';



const SignInSchema = Yup.object().shape({
  //email: Yup.string().email('Invalid email').required('Required'),
  //password: Yup.string().required('Rquired'),
});

const VerifyOtp = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);
  //const router = useRouter();
  //const  searchParams = useSearchParams();
 // console.log(searchParams.email);


 
  async function signIn(formData) {

    //console.log("hi");
    //console.log(email);

    
    /*const { data, error } = await supabase.auth.verifyOtp({ 
      email: email, 
      token:formData.password, 
      type: 'email'})

      if (error) {
      setErrorMsg(error.message);
    }
  }
    */
    
    console.log(data);

    

  return (

    <div className="card">
      {
      //<h2 className="w-full text-center">Enter Your OTP here</h2>
           }
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        {({ errors, touched }) => (
          <Form className="column w-full">
            

            <label htmlFor="email">Password</label>
            <Field
              className={cn('input', errors.password && touched.password && 'bg-red-50')}
              id="password"
              name="password"
              type="integer"
            />
            {errors.password && touched.password ? (
              <div className="text-red-600">{errors.password}</div>
            ) : null}
            <button className="button-inverse w-full" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
    </div>
  );
};
};

//export default VerifyOtp;
