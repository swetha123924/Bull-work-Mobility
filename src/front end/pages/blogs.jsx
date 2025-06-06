import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function BlogDetail() {
    const { blogId } = useParams(); 
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs/${blogId}`);
                const data = await response.json();
                if (data) {
                    setBlog(data);
                    console.log(data);
                } else {
                    console.error('Blog not found');
                }
            } catch (error) {
                console.error('Error fetching blog details:', error);
            }
        };

        fetchBlog();
    }, [blogId]);

    if (!blog) {
        return <div className="text-center p-10 text-xl">Blog not found.</div>;
    }
    const description = blog.description ? blog.description : '';

    return (
        <>
            <Header />

            <main className="flex flex-col items-center p-4 sm:p-6 md:p-10 bg-white min-h-screen">
                <section className="max-w-5xl w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#510059] mb-3 sm:mb-4">
                        {blog.title}
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 mb-1">{blog.information}</p>
                    <p className="text-sm text-gray-500 italic">{blog.time}</p>
                    <img src={blog.image}   alt={blog.title} className="w-full h-auto object-cover rounded-xl my-6 shadow-md"/>
                    <div className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed space-y-5">
                        <p>{description}</p>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#510059] mt-10 sm:mt-12 mb-4">
                        Recommended for You
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-[#f9f9f9] p-4 sm:p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
                            <img  src={blog.recommended_img1}  alt={blog.recommended_title1} className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3"/>
                            <h3 className="text-base sm:text-lg font-semibold text-[#A100B1] mb-1">
                                {blog.recommended_title1}
                            </h3>
                            <p className="text-sm text-gray-700">{blog.recommended_des1}</p>
                            <button className="mt-5 px-4 py-2 text-sm sm:text-base text-purple-700 border-2 border-purple-600 rounded-full hover:bg-purple-700 hover:text-white font-semibold transition">
                                Read More
                            </button>
                        </div>
                        <div className="bg-[#f9f9f9] p-4 sm:p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
                            <img src={blog.recommended_img2} alt={blog.recommended_title2}   className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3" />
                            <h3 className="text-base sm:text-lg font-semibold text-[#A100B1] mb-1">
                                {blog.recommended_title2}
                            </h3>
                            <p className="text-sm text-gray-700">{blog.recommended_des2}</p>
                            <button className="mt-5 px-4 py-2 text-sm sm:text-base text-purple-700 border-2 border-purple-600 rounded-full hover:bg-purple-700 hover:text-white font-semibold transition">
                                Read More
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <section className="bg-[#ededed] py-10 px-4 sm:px-6 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-[#510059]">
                    JOIN THE BULLWORK FAMILY
                </h1>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 sm:px-7 py-2 text-base sm:text-xl bg-[#c80cda] rounded-full text-white font-semibold">
                        Order
                    </button>
                    <button className="px-6 sm:px-7 py-2 text-base sm:text-xl font-semibold border-[#c80cda] border-2 rounded-full text-[#510059]">
                        Book Demo
                    </button>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default BlogDetail;
