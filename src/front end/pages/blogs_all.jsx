import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function MoreBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [form, setForm] = useState({title: '', information: '', time: '', image: '', description: '',recommended_img1: '', recommended_title1: '', recommended_des1: '',recommended_img2: '', recommended_title2: '', recommended_des2: ''});
    const [editingBlogId, setEditingBlogId] = useState(null);
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:10000/api/blogs');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async () => {
        try {
            const payload = { ...form };
            const url = editingBlogId
                ? `http://localhost:10000/api/blogs/${editingBlogId}`
                : 'http://localhost:10000/api/blogs';
            const method = editingBlogId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setShowPopup(false);
                setEditingBlogId(null);
                setForm({title: '', information: '', time: '', image: '', description: '',recommended_img1: '', recommended_title1: '', recommended_des1: '',recommended_img2: '', recommended_title2: '', recommended_des2: ''});
                const response = await fetch('http://localhost:10000/api/blogs');
                const data = await response.json();
                setBlogs(data);
            } else {
                const error = await res.json();
                alert(error.error || 'Failed to submit blog');
            }
        } catch (err) {
            console.error('Error submitting blog:', err);
        }
    };

    const handleEdit = (blog) => {
        setForm(blog);
        setEditingBlogId(blog.id);
        setShowPopup(true);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
        if (confirmDelete) {
            try {
                const res = await fetch(`http://localhost:10000/api/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (res.ok) {
                    const response = await fetch('http://localhost:10000/api/blogs');
                    const data = await response.json();
                    setBlogs(data);
                } else {
                    alert('Failed to delete blog');
                }
            } catch (err) {
                console.error('Error deleting blog:', err);
            }
        }
    };

    return (
        <>
            <Header />
            <h1 className="text-3xl font-bold underline text-center p-3">MORE BLOGS</h1>

            {user?.role === 'admin' && (
                <div className="mb-8 text-center">
                    <button onClick={() => setShowPopup(true)}  className="bg-[#A100B1] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#510059] transition">Post New Blog</button>
                </div>
            )}

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 px-4 md:px-8 py-4">
                {blogs.map((blog) => (
                    <div key={blog.id}className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] p-5 flex flex-col">
                        <img  src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-xl mb-4 transition duration-300 hover:opacity-90"/>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{blog.title}</h3>
                        <p className="text-sm text-purple-700 mb-2">{blog.date}</p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{blog.description}</p>

                        <div className="mt-auto">
                            <button onClick={() => navigate(`/blog/${blog.id}`)} className="hover:bg-[#A100B1] border-2 border-[#A100B1] px-5 py-2 rounded-full font-semibold transition w-full">
                                Read More
                            </button>
                        </div>
                        {user?.role === 'admin' && (
                            <div className="mt-4 flex justify-between">
                                <button onClick={() => handleEdit(blog)} className="bg-[#510059] text-white px-3 py-1 rounded-md hover:bg-[#A100B1]">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(blog.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">{editingBlogId ? 'Edit Blog' : 'Add New Blog'}</h2>
                        <div className="space-y-3">
                            <input name="title" value={form.title} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Title" />
                            <textarea name="information" value={form.information} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Information" />
                            <input name="time" value={form.time} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Time" />
                            <input name="image" value={form.image} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Image URL" />
                            <textarea name="description" value={form.description} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Description" />
                            <input name="recommended_img1" value={form.recommended_img1} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Recommended Image 1 URL" />
                            <input name="recommended_title1" value={form.recommended_title1} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Recommended Title 1" />
                            <textarea name="recommended_des1" value={form.recommended_des1} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Recommended Description 1" />
                            <input name="recommended_img2" value={form.recommended_img2} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Recommended Image 2 URL" />
                            <input name="recommended_title2" value={form.recommended_title2} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Recommended Title 2" />
                            <textarea name="recommended_des2" value={form.recommended_des2} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Recommended Description 2" />
                        </div>
                        <div className="flex justify-end gap-4 mt-4">
                            <button onClick={() => setShowPopup(false)} className="px-4 py-2 rounded border">Cancel</button>
                            <button onClick={handleFormSubmit} className="px-4 py-2 rounded bg-[#A100B1] text-white">{editingBlogId ? 'Update Blog' : 'Add Blog'}</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}
