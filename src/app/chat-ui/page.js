import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ChatUi from 'src/components/ChatUI';


export default async function chatUI() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

 //console.log(user.id);

  if (!user) {
    redirect('/sign-in-otp');
  }
 // console.log("test");
  //console.log(user);
  const { data: userRole,error } = await supabase
  .from('users')
  .select('is_super_admin').single();
  // .eq('id', user.id)
  // .single();;

  if (error) {
    console.error('Error retrieving user role:', error.message);
    // Handle the error accordingly
  }
  //console.log(userRole);
  if (userRole && userRole.is_super_admin === true) {
    return (
      <div>
        <ChatUi />
      </div>
    );
  } else {
    // Handle unauthorized access
    return (
      <div>
        <p>Unauthorized access</p>
      </div>
    );
  }
}
