'use client'
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
//import {SharedModal} from 'src/components/SharedModal'
import downloadPhoto from './DownloadPhoto.js';

const Modal = ({ images, selectedImageIndex, onClose }) => {
  const [direction, setDirection] = useState(null);
  const [curIndex, setCurIndex] = useState(selectedImageIndex);

  const handleClose = () => {
    onClose();
  };

  const changePhotoId = (newIndex) => {
    setDirection(newIndex > curIndex ? 'right' : 'left');
    setCurIndex(newIndex);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      const newIndex = (curIndex + 1) % images.length;
      changePhotoId(newIndex);
    } else if (event.key === 'ArrowLeft') {
      const newIndex = (curIndex - 1 + images.length) % images.length;
      changePhotoId(newIndex);
    }
  };

  return (
    <Dialog open={true} onClose={handleClose} className="fixed inset-0 z-10">
      <Dialog.Overlay as={motion.div} animate={{ opacity: 1 }} />
      <motion.div
        className="fixed inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button className="close-button absolute top-16 right-10 text-white font-bold text-2xl" onClick={handleClose}>
          X
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() =>
              downloadPhoto(
                // `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`,
                // `${index}.jpg`
                images[curIndex].image_url,
                `${curIndex}.jpg`
              )
            }
            className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
            title="Download fullsize version"
          >DOWNLOAD</button>
        </div>
        <div className="modal-content" style={{ maxWidth: '80vw', maxHeight: '80vh',alignItems: 'center', justifyContent: 'center' }}>
          <img src={images[curIndex].image_url} onKeyDown={handleKeyDown} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
        </div>
      </motion.div>
      {/* <SharedModal
          index={curIndex}
          direction={direction}
          images={images}
          changePhotoId={changePhotoId}
          closeModal={handleClose}
          navigation={true}
        /> */}

    </Dialog>
  );
};

export default Modal;