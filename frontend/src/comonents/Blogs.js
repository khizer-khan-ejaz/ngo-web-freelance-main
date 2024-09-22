import React, { useState } from 'react';
import UseStateHook from '../hooks/UseStateHook';
import PaginationFooter from './PaginationFooter';

const Blogs = () => {
    const { data, dataLoading } = UseStateHook("http://13.233.20.65:8080/api/blogs");
    const [page, setPage] = useState(1);

    if (dataLoading) {
        return <p>Loading...</p>; // Add a loading state or spinner if needed
    }

    // Check if data and data.blogs are defined
    if (!data || !data.blogs || data.blogs.length === 0) {
        return <p>No blogs available.</p>; // Handle the case where no blogs are available
    }

    return (
        <>
            <div>
                <section className="ftco-section" style={{background:'#FAFBED'  }}>
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section text-center">
                                <h2 className="mb-4">Recent from blog</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="row d-flex">
                            {data.blogs.slice(page * 6 - 6, page * 6).map((blog, index) => (
                                <div key={index} className="col-md-4 d-flex">
                                    <div className="blog-entry align-self-stretch min-w-[100%]">
                                        <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${blog.img})` }}>
                                        </a>
                                        <div className="text p-4 d-block">
                                            <div className="meta mb-3">
                                                <div><a href="#"> {blog.date.month} {blog.date.day}, {blog.date.year} </a></div>
                                                <div><a href="#">Admin</a></div>
                                                <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                            </div>
                                            <h3 className="heading mt-3"><a href="#"> {blog.title} </a></h3>
                                            <p> {blog.desc} </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            
            </div>
        </>
    );
};

export default Blogs;
