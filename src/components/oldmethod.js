"use client";
import supabase from "src/utils/supabase";
import { useState, useEffect } from "react";

export default function FileUpload() {
    const [selectedFiles, setSelectedFiles] = useState([]);
  
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    };
    console.log(selectedFiles);
  
    const removeFile = (fileToRemove) => {
        const filteredFiles = selectedFiles.filter(file => file !== fileToRemove);
        setSelectedFiles(filteredFiles);
      };
    const uploadFiles = async () => {
      for (const file of selectedFiles) {
        const { data, error } = await supabase.storage
          .from('pdf')
          .upload(`folder/${file.name}`, file);
  
        if (error) {
          console.error('Error uploading file:', error.message);
        } else {
          console.log('File uploaded successfully:', data.Key);
        }
      }
    };
  
    return (
      <div>
        <input type="file" multiple onChange={handleFileChange} />
        <div>
        {selectedFiles.map((file, index) => (
          <div key={index}>
            <span>{file.name}</span>
            <button onClick={() => removeFile(file)}>Remove</button>
          </div>
        ))}
      </div>
        <button onClick={uploadFiles}>Upload</button>
      </div>
    );
  }
