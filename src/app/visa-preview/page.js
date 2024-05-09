
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ProfilePage from 'src/components/Instruction';
import Navbar from 'src/components/navbar';

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
      
<Navbar />
<ProfilePage/>
     
    </div>
  );
}
