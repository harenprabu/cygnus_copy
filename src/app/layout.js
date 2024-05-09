import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import AuthProvider from 'src/components/AuthProvider';
import {Providers} from "./providers";

import 'src/styles/globals.css';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();


  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
      <body>
        {/* <div className="flex min-h-screen flex-col items-center justify-center py-2"> */}
          <main >
            {/* <h1 className="mb-12 text-5xl font-bold sm:text-6xl">
              TADKA<span className="font-black text-green-400">STUDIOS</span>
              https://res.cloudinary.com/dyjccaobs/image/upload/f_auto,q_auto/pvq5v0ypqk1d1ev286ce
            </h1> */}
            {/* <img src="https://mcusercontent.com/58d5e43f7588ef13b9cd5ec0c/images/e5048f91-7f73-64b6-32dd-f800c5f65513.jpeg" alt="GOODWIND" style={{ display: 'block', width: '10%', height: '10%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover', imageRendering: 'auto' }} /> */}
            <Providers> 
              <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
              </Providers>
          </main>
        {/* </div> */}
      </body>
    </html>
  );
}
