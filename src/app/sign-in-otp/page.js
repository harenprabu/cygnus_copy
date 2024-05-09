import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import SignInOtp from 'src/components/Auth/SignInOtp';



export default async function SignInPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  
  if (data?.session) {
    redirect('/');
  }



  return <SignInOtp />;
}
