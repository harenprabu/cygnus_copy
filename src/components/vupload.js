"use client";
import React, { useState, useEffect } from "react";
import supabase from "src/utils/supabase";
import { uploadfile } from "src/action/action.js";
// import { experimental_useFormStatus as useFormStatus} from "react-dom";

export default function upload({ session }) {

  const [selectedFiles, setSelectedFiles] = useState([]);
  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   const newFiles = [...event.dataTransfer.files];
  //   setFiles([...files, ...newFiles]);
  // };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };
  const removeFile = (fileToRemove) => {
    const filteredFiles = selectedFiles.filter(file => file !== fileToRemove);
    setSelectedFiles(filteredFiles);
  };
  // const handleFileInputChange = (event) => {
  //   const newFiles = [...event.target.files];
  //   setFiles(newFiles);
  // };
  // const removeFile = (index) => {
  //   const updatedFiles = [...files];
  //   updatedFiles.splice(index, 1);
  //   setFiles(updatedFiles);
  // };
  //console.log("data",files);
  //supabase part
 
  const uploadFiles = async () => {
    for (const file of selectedFiles) {
      const { data, error } = await supabase.storage
        .from('pdf')
        .upload(`folder/${file.name}`, file);

      if (error) {
        console.error('Error uploading file:', error.message);
      } else {
        console.log('File uploaded successfully:', data);
      }
    }
  };
  
 

  return (
    <div>
 <div class="flex flex-col items-center justify-center my-2 py-4 mx-10 shadow-xl border-solid border-2">
  <div class="grid grid-cols-2 md:grid-cols-4 justify-items-center w-full md:w-6/12 gap-2"> 
    <div class="mb-2 md:mb-0 md:mr-2  flex items-center">
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
    <div class="mb-2 md:mb-0  text-sky-500 flex items-center">
      <div>3. Submit documents</div>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
      </svg>
    </div>
    <div class="flex items-center">
      <div>4. Visa form</div>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
      </svg>
    </div>
  </div>
</div>


<div class="md:6/12 px-4 py-4 mx-10 bg-gray-200" >

<div class="flex justify-center  my-6 h-2/4 bg-gray-200">
  <div class="w-1/2 px-6 py-5 bg-white shadow-lg rounded-lg">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-semibold text-gray-800">
        File Upload
      </h2>
      <p class="text-gray-600 mt-2">
         Click to browse.
      </p>
    </div>

    <div class="border-2 border-dashed border-gray-400 rounded-lg px-4 py-16 text-gray-500 text-center">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="mx-auto h-12 w-12 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 15l4.001 4L16 15m-4.001 4V3"
        ></path>
      </svg>
      <p class="mb-2">Upload your files here</p>

      <label
        htmlFor="file-upload"
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer"
      >
        Browse Files
        <input
          type="file"
          id="file-upload"
          class="hidden"
          multiple
          onChange={handleFileChange}
        />
      </label>
    </div>

    {selectedFiles.length > 0 && (
      <div class="text-center mt-6">
        <h3 class="text-lg font-semibold mb-2">Uploaded Files:</h3>
        <ul class="list-disc pl-6">
          {selectedFiles.map((file, index) => (
            <li
              key={index}
              class="flex justify-between items-center"
            >
              <span>{file.name}</span>
              <button
                class="text-red-500 hover:text-red-700"
                onClick={() => removeFile(file)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}

    {selectedFiles.length > 0 && (
      <div class="text-center mt-6">
        <button
          class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
          onClick={uploadFiles}
        >
          Proceed
        </button>
      </div>
    )}

    <div class="text-center mt-6">
      <p class="text-sm text-gray-600">
        Supported file types: .jpg, .jpeg, .png, .gif, .pdf, .docx, .xlsx
      </p>
    </div>
  </div>
</div>
</div>

    </div>
  );
}
