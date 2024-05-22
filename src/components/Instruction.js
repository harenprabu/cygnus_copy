"use client";
import { useState, useEffect } from "react";
import supabase from "src/utils/supabase";
import { useRouter } from "next/navigation";

const preview = ({ session }) => {
  const router = useRouter();
  const [traiffdata, settraiff] = useState("");
  const [from, setform] = useState("");
  // const [selectedItem, setSelectedItem] = useState('');
  // const [country, setCountry] = useState([]);
  useEffect(() => {
    const GetCountry = async () => {
      let { data, error } = await supabase
        .from("form _data")
        .select("*,visa_tariff(id,country,visa_fee,service_fee,description)")
        .eq("id", session.id)
        .limit(1)
        .order("created_at", { ascending: false });

      if (data) {
        console.log("DATA:", data);
        settraiff(data[0].visa_tariff);
        //console.log(traiffdata);

        setform(data[0]);
      } else {
        console.log("ERROR:", error);
      }
    };

    GetCountry();
  }, []);
  // const applyvisa = () => {
  //   redirect('/visa-upload');
  // };

  return (
    <div>
      <div class="flex flex-col items-center justify-center my-2 py-4 mx-10 shadow-xl border-solid border-2">
        <div class="grid grid-cols-2 md:grid-cols-4 justify-items-center w-full md:w-6/12 gap-2">
          <div class="mb-2 md:mb-0 md:mr-2 text-sky-500 flex items-center">
            <div>1. Add itinerary</div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                fill="#0F0F0F"
              />
            </svg>
          </div>
          <div class="mb-2 md:mb-0 md:mr-2  flex items-center">
            <div>2. Preview</div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                fill="#0F0F0F"
              />
            </svg>
          </div>
          <div class="mb-2 md:mb-0 md:mr-5 flex items-center">
            <div>3. submit documents</div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                fill="#0F0F0F"
              />
            </svg>
          </div>
          <div class=" flex items-center">
            <div>4. Visa form</div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                fill="#0F0F0F"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-1 place-content-center md:grid-cols-2 gap-4 my-4 mx-6 w-full ">
          <div class="shadow-xl border-solid border-2 h-screen w-full">
            <p>{traiffdata.description}</p>
          </div>
          <div class="grid grid-rows-2 gap-4">
            <div class="shadow-xl border-solid border-2  h-64 md:h-auto w-full md:w-2/3">
              <div class="flex flex-col rounded-xl bg-white shadow ring-1 ring-gray-200">
                <div class=" rounded-t-xl border-b border-gray-200 px-4 py-3 text-base font-medium text-gray-700">
                  Payment details
                </div>
                <div class="flex flex-col gap-5 self-stretch rounded-b-xl p-4">
                  <div class="group-accordion">
                    <div class="flex cursor-pointer items-center justify-between self-stretch">
                      <span class="flex items-center text-sm text-gray-900">
                        Visa Fee<span class="text-gray-500">(1)</span>&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          class="inline-block align-middle transition-transform"
                        >
                          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </span>
                      <span class=" shrink grow basis-0  text-right  text-sm font-medium  text-black">
                        ₹ <span class="cursor-default">{traiffdata.visa_fee}</span>

                      </span>
                      
                    </div>
                  </div>
                  
                  
                  <div class="group-accordion">
                    <div class="flex cursor-pointer items-center justify-between self-stretch">
                      <span class="flex items-center text-sm text-gray-900">
                        Fees &amp; Taxes&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          class="inline-block align-middle transition-transform"
                        >
                          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </span>
                      <span class=" shrink grow basis-0  text-right  text-sm font-medium  text-black">
                        ₹ <span class="cursor-default">{traiffdata.service_fee}</span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <div class="flex items-center justify-between self-stretch py-3 text-lg font-medium text-primary-600">
                      <div class="">Grand total </div>
                      <div class="shrink grow basis-0 text-right font-bold">
                        ₹ <span class="cursor-default">••••</span>
                      </div>
                    </div>
                    <p class="flex items-center justify-center gap-1 pt-2 text-center text-xs text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"></path>
                      </svg>{" "}
                      This is an estimated price for the order
                    </p>
                  </div>
                  <div class="flex flex-col gap-5">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                      type="button"
                      onClick={() => router.push("/visa-upload")}
                    >
                      Apply visa
                    </button>
                    <div class="flex items-center justify-center gap-1.5 text-center text-xs font-semibold tracking-wide text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                      BEST PRICE GUARANTEED
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="shadow-xl border-solid border-1 h-fit md:h-fit w-full md:w-2/3 ">
              <div class="sticky top-8 grid gap-5">
                <div class="flex flex-col rounded-xl bg-white shadow ring-1 ring-gray-200">
                  <ul class="inline-flex w-full list-decimal flex-col items-start justify-start rounded-xl ps-4">
                    <li class="inline-flex w-full items-center justify-start gap-4 px-4 py-3">
                      <div class="font-['Inter Display'] list-item whitespace-nowrap text-sm font-normal leading-tight text-gray-900">
                        Country
                      </div>
                      <div class="h-px shrink grow basis-0 bg-slate-200"></div>
                      <div class="flex items-center justify-end gap-3">
                        <div class="flex items-center  justify-end gap-3">
                          <div class="font-['Inter Display'] text-right text-[13px] font-medium leading-tight text-gray-900">
                            {from.country}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="inline-flex w-full items-center justify-start gap-4 px-4 py-3">
                      <div class="font-['Inter Display'] list-item whitespace-nowrap text-sm font-normal leading-tight text-gray-900">
                        No. of travellers
                      </div>
                      <div class="h-px shrink grow basis-0 bg-slate-200"></div>
                      <div class="font-['Inter Display'] text-right text-[13px] font-medium leading-tight text-gray-900">
                        {from.travellers} Travellers
                      </div>
                    </li>
                    <li class="inline-flex w-full items-center justify-start gap-4 px-4 py-3">
                      <div class="font-['Inter Display'] list-item whitespace-nowrap text-sm font-normal leading-tight text-gray-900">
                        Travel Dates
                      </div>
                      <div class="h-px shrink grow basis-0 bg-slate-200"></div>
                      <div class="font-['Inter Display'] text-right text-[13px] font-medium leading-tight text-gray-900">
                        <span>{from.startdate}</span>&nbsp;
                        <span class="text-sm font-medium   text-gray-500">
                          -
                        </span>
                        &nbsp;<span>{from.enddate}</span>
                      </div>
                    </li>
                    <li class="inline-flex w-full items-center justify-start px-4 py-3">
                      <div class="font-['Inter Display'] list-item whitespace-nowrap pe-3 text-sm font-normal leading-tight text-gray-900">
                        Visa Type
                      </div>
                      <div class="h-px flex-1 shrink grow basis-0 bg-slate-200"></div>
                      <div class="ps-3 text-right">
                        <span class="capitalize">{from.purpose} - 1 Month</span>
                      </div>
                    </li>
                    <li class="inline-flex w-full items-center justify-start gap-4 px-4 py-3">
                      <div class="font-['Inter Display'] list-item whitespace-nowrap text-sm font-normal leading-tight text-gray-900">
                        Duration
                      </div>
                      <div class="h-px shrink grow basis-0 bg-slate-200"></div>
                      <div class="font-['Inter Display'] text-right text-[13px] font-medium leading-tight text-gray-900">
                        30 Days
                      </div>
                    </li>
                    <li class="inline-flex w-full items-center justify-start gap-4 px-4 py-3">
                      <div class="font-['Inter Display'] list-item whitespace-nowrap text-sm font-normal leading-tight text-gray-900">
                        Validity
                      </div>
                      <div class="h-px shrink grow basis-0 bg-slate-200"></div>
                      <div class="font-['Inter Display'] text-right text-[13px] font-medium leading-tight text-gray-900">
                        90 Days
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default preview;
