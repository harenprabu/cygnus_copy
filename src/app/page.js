import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import SignOut from 'src/components/SignOut';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in-otp');
  }

  return (
    <div className="card">
      <h2>Welcome!</h2>
      <code className="highlight">{user.role}</code>
                  <img src="https://mcusercontent.com/58d5e43f7588ef13b9cd5ec0c/images/e5048f91-7f73-64b6-32dd-f800c5f65513.jpeg" alt="cygnus" style={{ display: 'block', width: '10%', height: '10%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover', imageRendering: 'auto' }} />
<br />
      <Link className="button" href="/profile">
        Go to Profile
      </Link>
      <SignOut />
    </div>
  );
}
