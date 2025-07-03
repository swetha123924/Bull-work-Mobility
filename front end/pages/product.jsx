import { useState, useEffect } from 'react';
import { CircleArrowLeft, CircleArrowRight, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ProductsSection() {
    const [startIndex, setStartIndex] = useState(0);
    const [products, setProducts] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // ← track screen size
    const BASE_URL = "https://bull-work-mobility.onrender.com"
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    const [form, setForm] = useState({
        slug: '', title: '', image: '', description: '', features: '',
        saving_description: '', yearly_savings: '', seven_year_savings: '',
        related_beast: '', related_warrior: '', feature_image: '', powerup_video: ''
    });

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/products`);
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        fetchProducts();

        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Samsung-like width threshold
        };

        handleResize(); // check on load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleProducts = () => {
        if (isMobile) return products; // show all products if mobile
        const result = [];
        for (let i = 0; i < 3; i++) {
            const product = products[(startIndex + i) % products.length];
            if (product && product.title) {
                result.push(product);
            }
        }
        return result;
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % products.length);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async () => {
        try {
            const payload = {
                ...form,
                features: form.features.split(',').map(f => f.trim())
            };

            const res = await fetch(`${BASE_URL}/api/products/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setShowPopup(false);
                setForm({
                    slug: '', title: '', image: '', description: '', features: '',
                    saving_description: '', yearly_savings: '', seven_year_savings: '',
                    related_beast: '', related_warrior: '', feature_image: '', powerup_video: ''
                });
                fetchProducts();
            } else {
                const error = await res.json();
                alert(error.error || 'Failed to add product');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="bg-gray-100 py-10">
            <div className='flex '>
                {user?.role === 'admin' && (
                    <button
                        onClick={() => setShowPopup(true)}
                        className="flex items-center gap-2 bg-[#A100B1] text-white px-4 py-2 rounded hover:scale-105 transition"
                    >
                        <PlusCircle size={20} /> Add Product
                    </button>
                )}
            </div>
                
            <div className=" items-center px-6 mb-4">
                <h2 className="text-3xl text-center font-bold">PRODUCTS</h2>
            </div>

            <p className="text-[#A100B1] text-center cursor-pointer mb-10 sm:mb-20 text-sm sm:text-base">
                Agriculture | Construction | Material Handling | Mining
            </p>

            <div className="flex items-center justify-center gap-4 px-2 sm:px-4 flex-wrap">
                {!isMobile && (
                    <CircleArrowLeft onClick={handlePrev} className="w-8 h-8 sm:w-10 sm:h-10 text-[#A100B1] cursor-pointer hover:scale-110 transition" />
                )}

                <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row'} gap-6 overflow-x-auto scrollbar-hide`}>
                    {visibleProducts().map((product, idx) => (
                        <div key={idx} className="min-w-[300px] sm:min-w-[350px] md:w-[400px] lg:w-[450px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                            <img
                                onClick={() => navigate(`/product/${product.slug}`)}
                                src={product.image || 'default-image-url.jpg'}
                                alt={product.title}
                                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                            />
                            <div className="p-4">
                                <h1 className="text-lg sm:text-xl font-bold text-black">{product.title}</h1>
                                <h3 className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</h3>
                                <div className="flex flex-col gap-2">
                                    {product.features?.map((feature, i) => {
                                        const [label, ...rest] = feature.split('-');
                                        return (
                                            <div key={i} className="flex justify-between bg-[#eee6ef] rounded-md px-3 py-1 text-sm">
                                                <span className="text-gray-600">{label.trim()}</span>
                                                <span className="text-[#A100B1] font-semibold">{rest.join('-').trim()}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button
                                        onClick={() => navigate(`/order`)}
                                        className="bg-gradient-to-l to-[#A100B1] from-[#57115E] px-6 sm:px-8 py-2 sm:py-2 rounded-md text-white mb-4 text-sm sm:text-base"
                                    >
                                        ORDER NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!isMobile && (
                    <CircleArrowRight onClick={handleNext} className="w-8 h-8 sm:w-10 sm:h-10 text-[#A100B1] cursor-pointer hover:scale-110 transition" />
                )}
            </div>

            {/* Admin Popup Form */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                        <div className="space-y-3">
                            {Object.entries(form).map(([key, value]) => (
                                key === 'description' ? (
                                    <textarea key={key} name={key} value={value} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder={key.replace(/_/g, ' ')} />
                                ) : (
                                    <input key={key} name={key} value={value} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder={key.replace(/_/g, ' ')} />
                                )
                            ))}
                        </div>
                        <div className="flex justify-end gap-4 mt-4">
                            <button onClick={() => setShowPopup(false)} className="px-4 py-2 rounded border">Cancel</button>
                            <button onClick={handleFormSubmit} className="px-4 py-2 rounded bg-[#A100B1] text-white">Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProductsSection;
