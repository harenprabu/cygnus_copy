import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ProfilePage from 'src/components/Auth/images';
import VISA from 'src/components/VISA';
import VISA1 from 'src/components/oldmethod';
import SignOut from 'src/components/SignOut';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in-otp');
  }

  return(
  <div>
  <VISA session={user}/> 

  </div>
  );
}
