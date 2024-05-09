
"use server"
import supabase from'src/utils/supabase';
import { redirect } from 'next/navigation'
//import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
//import { headers,cookies } from 'next/headers';

export const createdata = async(formData,session) => {
const country1  = formData.get('country');
const email1  = formData.get('emailid');

//const supabase = createClientComponentClient({headers, cookies });

const uuid = session.id;

let { data: visa_tariff, error1 } = await supabase
  .from('visa_tariff')
  .select('*')
  .eq('country', country1)
  .single();
          
const { data, error } = await supabase
  .from('form _data')
  .insert([
    { id:uuid,email: email1, country: country1 ,country_id:visa_tariff.id},
  ])
  .select()
          
if(data){
    console.log("test ok");
    console.log(data);
    redirect('/TESTTAB');
    
}
else{
    console.log("test not ok");
    console.log(error);
}



}
