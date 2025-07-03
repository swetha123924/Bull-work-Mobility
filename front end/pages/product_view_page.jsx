import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:10000/api/products/${slug}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };
    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div className="text-center mt-10 text-xl text-red-500">Loading product details...</div>;
  }

  return (
    <>
      <Header />

      <section className="bg-gray-100 text-center">
        <img src={product.image} alt={product.title} className="w-full max-h-[600px] object-cover shadow-md" />
        <h1 className="text-4xl sm:text-5xl font-bold mt-6 text-[#de177a]">{product.title}</h1>
        <p className="mt-4 max-w-4xl mx-auto px-4 text-base sm:text-lg text-gray-700">{product.description}</p>
        <button className="mt-6 mb-10 border-2 border-[#3f0522] px-6 py-2 rounded-md text-[#3f0522] font-semibold hover:bg-[#3f0522] hover:text-white transition">
          Download Brochure
        </button>
      </section>

      <section className="flex flex-wrap justify-between items-center gap-4 px-4 sm:px-10 py-6 bg-white border-y">
        <div className="flex gap-4 sm:gap-8 font-medium text-[#531132] flex-wrap justify-center text-sm sm:text-base">
          {['Features', 'Video', 'TCO', 'Specification'].map((tab, i) => (
            <p key={i} className="cursor-pointer hover:text-[#de177a]">{tab}</p>
          ))}
        </div>
        <button className="bg-[#3f0522] text-white py-2 px-5 rounded hover:bg-[#531132] transition text-sm sm:text-base">
          ORDER
        </button>
      </section>

      <section className="p-6 sm:p-10 bg-[#f9f9f9] text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">FEATURES OF {product.title}</h2>
        {product.feature_image && (
          <img src={product.feature_image} alt="Features" className="max-w-5xl w-full mx-auto rounded-md shadow" />
        )}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {product.features?.map((feature, i) => (
            <div key={i} className="bg-white p-4 shadow rounded-md text-gray-800 font-medium">{feature}</div>
          ))}
        </div>
      </section>

      <section className="p-6 sm:p-10 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">POWER UP WITH THE {product.title}</h2>
        {product.powerup_video && (
          <video
            src={product.powerup_video}
            className="max-w-5xl w-full mx-auto rounded-md shadow"
            autoPlay
            loop
            muted
          />
        )}
      </section>

      <section className="p-6 sm:p-10 bg-purple-50 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">YOUR ELECTRIC SAVINGS</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700 mb-6">{product.saving_description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <div className="bg-purple-600 text-white px-6 py-4 rounded-md text-lg sm:text-xl font-bold">
            1 Year Savings: {product.yearly_savings}
          </div>
          <div className="bg-purple-600 text-white px-6 py-4 rounded-md text-lg sm:text-xl font-bold">
            7 Year Savings: {product.seven_year_savings}
          </div>
        </div>
      </section>

      <section className="p-6 sm:p-10 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">YOU MAY ALSO LIKE</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {product.related_beast && (
            <div className="text-center">
              <img
                src={product.related_beast}
                alt="Beast"
                className="h-[220px] w-[220px] object-cover rounded-md mx-auto cursor-pointer hover:scale-105 transition"
                onClick={() => navigate('/product/beast')}
              />
              <button
                onClick={() => navigate('/product/beast')}
                className="mt-2 bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
              >
                Beast
              </button>
            </div>
          )}
          {product.related_warrior && (
            <div className="text-center">
              <img
                src={product.related_warrior}
                alt="Warrior"
                className="h-[220px] w-[220px] object-cover rounded-md mx-auto cursor-pointer hover:scale-105 transition"
                onClick={() => navigate('/product/warrior')}
              />
              <button
                onClick={() => navigate('/product/warrior')}
                className="mt-2 bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
              >
                Warrior
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#ededed] py-10 px-4 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">JOIN THE BULLWORK FAMILY</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 text-lg bg-[#c80cda] text-white font-semibold rounded-full">Order</button>
          <button className="px-6 py-3 font-semibold border-2 border-[#c80cda] text-[#c80cda] rounded-full" onClick={() => navigate("/demo")}>Book Demo</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
