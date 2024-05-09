'use client';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Modal from 'src/components/Modal';

const supabase = createClientComponentClient();

const ProfilePage = () => {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    async function getImages() {
      const { data, error } = await supabase.from('user_images').select('image_url');
      if (error) {
        setErrorMsg(error.message);
      } else {
        setImages(data);
      }
    }

    getImages();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div>
      <h1>Your Generated Images</h1>
      {selectedImageIndex !== null && (
        <Modal images={images} selectedImageIndex={selectedImageIndex} onClose={() => setSelectedImageIndex(null)} />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="card" onClick={() => handleImageClick(index)}>
              <img src={image.image_url} />
              <div className="card-overlay" />
              <div className="card-shadow" />
            </div>
          ))
        ) : (
          <div>No images found</div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;