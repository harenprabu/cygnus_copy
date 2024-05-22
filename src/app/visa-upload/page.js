
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
//import Link from 'next/link';
import { redirect } from 'next/navigation';
import UPLOAD from 'src/components/vupload';
import TEST from 'src/components/oldmethod';
export default async function tab() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

 //console.log(user.id);

  if (!user) {
    redirect('/sign-in-otp');
  }

  return (
    <div>
      
{/* <TEST/> */}
<UPLOAD session={user}/>
     
    </div>
  );
}
