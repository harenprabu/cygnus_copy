"use client";
import React, { useState, useEffect } from "react";
import supabase from "src/utils/supabase";
import { createdata } from "src/action/action.js";
// import { experimental_useFormStatus as useFormStatus} from "react-dom";

export default function visa({ session }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const GetCountry = async () => {
      let { data: visa } = await supabase.from("visa_tariff").select("*");

      setCountry(visa);
      console.log(country);
    };
    GetCountry();
  }, []);

  return (
    <div>
     <div class="flex flex-col items-center justify-center my-2 py-4 mx-10 shadow-xl border-solid border-2">
  <div class="grid grid-cols-2 md:grid-cols-4 justify-items-center w-full md:w-6/12 gap-2"> 
    <div class="mb-2 md:mb-0 md:mr-2 text-sky-500 flex items-center">
      <div>1. Add itinerary</div>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
      </svg>
    </div>
    <div class="mb-2 md:mb-0 md:mr-2  flex items-center">
      <div>2. Preview</div>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
      </svg>
    </div>
    <div class="mb-2 md:mb-0  flex items-center">
      <div>3. Submit documents</div>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
      </svg>
    </div>
    <div class=" flex items-center">
      <div>4. Visa form</div>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
      </svg>
    </div>
  </div>
</div>


      <div class=" my-5 border-2 shadow-xl  md:container md:mx-auto w-7/12 h-5/6 flex justify-center items-center ...">
        <form
          class="w-full max-w-lg"
          action={async (formData) => {
            await createdata(formData, session);
          }}
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div class="relative">
                <select
                  name="country"
                  onChange={(e) => setSelectedItem(e.target.value)}
                  value={selectedItem}
                  class="select block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="" disabled>Select Country</option>
                  {country.map((item) => (
                  <option key={item.id} value={item.country}> {item.country}</option>
                ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-purpose"
              >
                Purpose of travel
              </label>
              <div class="flex flex-wrap -mx-2 mb-6">
                <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                  <label class="w-full block bg-gray-200 text-gray-700 border border-gray-200 py-2 px-3 pr-1 rounded leading-tight">
                    <input
                      class="mr-1 leading-tight"
                      type="radio"
                      id="radio1"
                      name="radio-group"
                      value="Tourism"
                    />
                    <span class="text-md">Tourism</span>
                  </label>
                </div>
                <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                  <label class="w-full block bg-gray-200 text-gray-700 border border-gray-200 py-2 px-3 pr-1 rounded leading-tight">
                    <input
                      class="mr-1 leading-tight"
                      type="radio"
                      id="radio2"
                      name="radio-group"
                      value="Business"
                    />
                    <span class="text-md">Business</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-1 pl-3 md:mb-0">
              <div class="flex flex-wrap -mx-2 mb-6">
                <div class="w-full md:w-2/4 px-2 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-travel-date"
                  >
                    Travel Date
                  </label>
                  <input
                    class="block appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="date"
                    id="grid-travel-date"
                    placeholder="start"
                    name="traveldate"
                  />
                </div>
                <div class="w-full md:w-1/2 px-2">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-return-date"
                  >
                    Return Date
                  </label>
                  <input
                    class="block appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="date"
                    id="grid-return-date"
                    placeholder="Start"
                    name ="returndate"
                  />
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-travellers"
              >
                No of travellers
              </label>
              <input
                class="block appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-travellers"
                type="text"
                placeholder="Persons"
                name ="travellers"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Note to visa expert(optional)
              </label>
              <textarea
                class="block appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="type here*"
                name="textarea"
              ></textarea>
              <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                proceed
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
