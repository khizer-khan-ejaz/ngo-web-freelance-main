import React, { useContext, useEffect, useState } from 'react';
import GalleryUpload from './GalleryUpload';
import axios from 'axios';
import { Button, Flex, Spinner, Box } from '@chakra-ui/react';
import { Context } from '../../context/Context';
import DeleteButton from "./DeleteButton";
import { MdCancel } from "react-icons/md";
import useToast from "../../hooks/useToast";

const Gallery = () => {
  const { showSuccess, showError } = useToast();
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryImagesLoading, setGalleryImagesLoading] = useState(false);
  const [deleteActivate, setDeleteActivate] = useState(false);
  const { setTotalGalleryImages, user } = useContext(Context);
  const token = user.token;

  // Fetch gallery images on component mount
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setGalleryImagesLoading(true);
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gallery`);
        const data = res.data;
        setGalleryImages(data.galleryImages);
        setTotalGalleryImages(data.galleryImages.length);
        localStorage.setItem("galleryImagesCount", data.galleryImages.length);
      } catch (err) {
        showError("Failed to load gallery images.");
        console.log(err.message);
      } finally {
        setGalleryImagesLoading(false);
      }
    };

    fetchGalleryImages();
  }, [setTotalGalleryImages, showError]);

  // Handle gallery image deletion
  const handleGalleryImageDelete = async (image) => {
    try {
      // Optimistic deletion
      setGalleryImages(prev => prev.filter(img => img._id !== image._id));

      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/gallery/delete/${image._id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      const data = res.data;
      if (data.error) {
        showError(data.error);
        // Roll back if the deletion fails
        setGalleryImages(prev => [...prev, image]);
        return;
      }

      // Update the total gallery image count
      setTotalGalleryImages(prev => {
        localStorage.setItem("galleryImagesCount", prev - 1);
        return prev - 1;
      });

      showSuccess(data.success);
    } catch (err) {
      console.log(err.message);
      showError("Failed to delete the image.");
      // Roll back if the deletion fails
      setGalleryImages(prev => [...prev, image]);
    }
  };

  // Loading spinner
  if (galleryImagesLoading) {
    return (
      <Flex h="50px" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <div className="scroller w-[100%] p-2 relative h-[100%] overflow-scroll">
      {/* Delete Button */}
      <div className="flex justify-center items-center w-[100%]">
        <DeleteButton setDeleteActivate={setDeleteActivate} deleteActivate={deleteActivate} />
      </div>

      {/* Gallery Grid */}
      <Flex flexWrap="wrap" gap="20px" justifyContent="center" alignItems="center">
        {galleryImages.map((gallery, index) => (
          <Box key={index} shadow="lg" transition="all 0.5s" maxW="350px" rounded="md" mt="20px">
            <MdCancel
              onClick={() => handleGalleryImageDelete(gallery)}
              cursor="pointer"
              size="25px"
              className={`${deleteActivate ? "block" : "hidden"} ml-auto`}
            />
            <Box>
              <img className="rounded-md" src={gallery.img} alt={gallery.img} />
            </Box>
          </Box>
        ))}
      </Flex>

      {/* Gallery Upload Component */}
      <GalleryUpload setTotalGalleryImages={setTotalGalleryImages} setGalleryImages={setGalleryImages} galleryImages={galleryImages} />
    </div>
  );
};

export default Gallery;
