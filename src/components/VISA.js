"use client"
import React, { useState,useEffect } from 'react'
import supabase from'src/utils/supabase';
import { createdata } from 'src/action/action.js';
// import { experimental_useFormStatus as useFormStatus} from "react-dom";

export default function visa({session}) {
  const [selectedItem, setSelectedItem] = useState('');
  const [country, setCountry] = useState([]);
  useEffect(() => {
  const GetCountry = async () => {
  let{data:visa} = await supabase
                  .from("visa_tariff")
                  .select("*")

                 setCountry(visa);
                 console.log(country);
               
  };
   GetCountry();
  }, []);




  return (
    <div>
      <form action={async formData =>{
        await createdata(formData,session)
      }}>
      <select
        id="dropdown"
        name="country"
        onChange={(e) => setSelectedItem(e.target.value)}
        value={selectedItem}
      >
        <option value="" disabled>
          Select a phone number
        </option>
        {country.map((item) => (
          <option key={item.id} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

<label>Email</label>
<input type="text" id="email" name="emailid"></input>
<button type="submit">add</button>
      </form>
    </div>
  )
}