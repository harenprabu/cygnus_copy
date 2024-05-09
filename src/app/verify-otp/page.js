import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { useUrl } from 'next/navigation';
import VerifyOtp from 'src/components/Auth/VerifyOtp';


export default async function SignInPage() {
  //const query = searchParams.get('query') ;
  //const url = useUrl();

  
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect('/');
  }

  return <VerifyOtp />;
}
