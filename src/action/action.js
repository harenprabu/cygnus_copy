
"use server"
import supabase from'src/utils/supabase';
import { redirect } from 'next/navigation'
//import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
//import { headers,cookies } from 'next/headers';

export const createdata = async(formData,session) => {
const country1  = formData.get('country');
const email1  = formData.get('emailid');
const travelType = formData.get('radio-group');//travel type
const startdate = formData.get('traveldate');//start data
const enddate = formData.get('returndate');
const travellers = formData.get('travellers');
const textarea = formData.get("textarea");

//const supabase = createClientComponentClient({headers, cookies });

const uuid = session.id;
const mail = session.email;
const jio = session;
console.log(jio);
console.log(startdate);
console.log(travellers);

let { data: visa_tariff, error1 } = await supabase
  .from('visa_tariff')
  .select('*')
  .eq('country', country1)
  .single();
          
const { data, error } = await supabase
  .from('form _data')
  .insert([
    { id:uuid, country: country1 , email:mail,country_id:visa_tariff.id ,purpose:travelType,startdate:startdate,enddate:enddate,travellers:travellers,note:textarea
    },
  ])
  .select()
          
if(data){
    console.log("test ok");
    console.log(data);
    redirect('/visa-preview');
    
}
else{
    console.log("test not ok");
    console.log(error);
}




}

export const uploadfile = async(formData1) => {
 
  //console.log("test",formData1);
 
  const country2  = formData1.get('file');
  
  console.log(country2[1]);
  
  }
