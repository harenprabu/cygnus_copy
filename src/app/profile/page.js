import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ProfilePage from 'src/components/Auth/images';
import Navbar from 'src/components/navbar';
import SignOut from 'src/components/SignOut';

export default async function Profile() {
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
      <ProfilePage />
    </div>
  );
}
