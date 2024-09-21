import React, { useState } from 'react';
import UseStateHook from '../hooks/UseStateHook';

const Gallery = () => {
    const { data, dataLoading } = UseStateHook("http://localhost:8080/api/gallery");

    return (
        <div>
            {!dataLoading && data && data.galleryImages && (
              
                <section className="ftco-gallery"style={{background:'#e6e9e6'  }}>
                  
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-5 heading-section  text-center">
              <h2 className="mb-4">Gallery</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {data.galleryImages.map((image, index) => (
                            <a
                                key={index}
                                href={`${image.img}`}
                                className="gallery image-popup d-flex justify-content-center align-items-center img"
                                style={{ backgroundImage: `url(${image.img})`, backgroundSize: "cover", width: "100%" }}
                            >
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="icon-search" />
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};


export default Gallery;



