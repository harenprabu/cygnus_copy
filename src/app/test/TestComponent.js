'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const stringUuid = 'f808d5ec-a36f-4d8d-9187-034387d590f9';

const uuid = uuidv4(stringUuid);


export default function TestComponent() {
  const [users, setUsers] = useState([]);
  const supabase = createClientComponentClient();
  console.log("testTEST");
  //var uuidData = uuid.fromString("f808d5ec-a36f-4d8d-9187-034387d590f9");

  

 // let { data: user_images, error } = await supabase.from('user_images').select("*").eq('id', 'f808d5ec-a36f-4d8d-9187-034387d590f9')
  //console.log(supabase);

  async function fetchUsers() {
    
    console.log("testINSIDE");

    let { data: user_images, error } = await supabase.from('user_images').select('*');

    console.log(user_images);

    console.log(error);
    //const { data, error } = await supabase.from('user_images').select('image_url').eq('user_id', 'f808d5ec-a36f-4d8d-9187-034387d590f9');
    // const { data, error } = await supabase
    //   .from('users')
    //   .select('*');
    //   console.log(data);

    if (error) {
      console.error(error);
    } else {
      setUsers(user_images);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);


  fetchUsers();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
