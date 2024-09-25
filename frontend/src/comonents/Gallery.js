import React from 'react';
import UseStateHook from '../hooks/UseStateHook';

const Gallery = () => {
    const { data, dataLoading } = UseStateHook(`${process.env.REACT_APP_BACKEND_URL}/api/gallery`);

    if (dataLoading) {
        return <p>Loading gallery images...</p>; // Loading state
    }

    // Check if data is available and contains gallery images
    if (!data?.galleryImages || data.galleryImages.length === 0) {
        return <p>No gallery images available.</p>; // Fallback for no data
    }

    return (
        <div>
            <section className="ftco-gallery" style={{ background: '#e6e9e6' }}>
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-5 heading-section text-center">
                        <h2 className="mb-4">Gallery</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {data.galleryImages.map((image, index) => (
                        <a
                            key={index}
                            href={image.img} // Direct image link
                            className="gallery image-popup d-flex justify-content-center align-items-center img"
                            style={{
                                backgroundImage: `url(${image.img})`,
                                backgroundSize: 'cover',
                                width: '100%',
                                height: '300px' // Adjust height for better visuals
                            }}
                        >
                            <div className="icon d-flex justify-content-center align-items-center">
                                <span className="icon-search" />
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
