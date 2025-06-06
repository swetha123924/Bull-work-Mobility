import { useState } from "react";
import Header from "./header";
import Footer from "./footer";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    aadhar: "",
    pan: "",
    product: "Beast",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Alert all data
    alert(
      `Order Details:\n\n` +
        Object.entries(formData)
          .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
          .join("\n")
    );

    // Store in localStorage
    localStorage.setItem("orderFormData", JSON.stringify(formData));
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-t to-[#53025a] to-20% from-white from-80% px-4">
        <h2 className="font-bold text-center text-white pt-10 text-3xl md:text-4xl">
          ORDER FORM
        </h2>
        <p className="text-center text-white mb-8">
          Fill in the details below to order your product
        </p>

        <div className="bg-white shadow-xl rounded-2xl max-w-5xl mx-auto p-6 md:p-10 flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-6 w-full">
            <button className="w-full md:w-auto px-6 py-3 bg-[#57115E] text-white font-semibold rounded-lg">Individual</button>
            <button className="w-full md:w-auto px-6 py-3 border-2 border-[#57115E] font-semibold rounded-lg">Company</button>
          </div>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 text-md">
              <div>
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" required className="w-full text-gray-700 border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" required className="w-full text-gray-700 border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email Address" required className="w-full text-gray-700 border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address" className="w-full text-gray-700 border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Country</label>
                <select name="country" value={formData.country} onChange={handleChange} className="w-full text-gray-700 border border-gray-300 rounded-md p-2">
                  <option>Select country</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <select name="state" value={formData.state} onChange={handleChange} className="w-full text-gray-700 border border-gray-300 rounded-md p-2">
                  <option>Select state</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <select name="city" value={formData.city} onChange={handleChange} className="w-full text-gray-700 border border-gray-300 rounded-md p-2">
                  <option>Select city</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pincode</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Enter Pincode" className="w-full text-gray-700 border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Aadhar Number</label>
                <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Enter Aadhar Number" className="w-full text-gray-700 border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pan Number</label>
                <input type="text" name="pan" value={formData.pan} onChange={handleChange} placeholder="Enter Pan Number" className="w-full text-gray-700 border border-gray-300 rounded-md p-2" />
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Select Product</label>
                <select name="product" value={formData.product} onChange={handleChange} className="w-full text-gray-700 border border-gray-300 rounded-md p-3">
                  <option>Beast</option>
                  <option>Vanama</option>
                  <option>OX - 1</option>
                  <option>GLX E-Loader</option>
                  <option>Warrior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Enter Message" className="w-full text-gray-700 border border-gray-300 rounded-md p-2 resize-none" />
              </div>

              <div className="flex flex-col items-center gap-4 mt-6">
                <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-md w-full md:w-auto">
                  BOOK PRODUCT
                </button>
                <p className="text-center font-semibold hover:text-purple-900">
                  Looking for a Product Demo?{" "}
                  <a href="#" className="text-purple-700 underline">
                    Book a Demo
                  </a>
                </p>
              </div>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">JOIN THE BULLWORK FAMILY</p>
        </div>
      </div>

      <section className="bg-[#ededed] py-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">JOIN THE BULLWORK FAMILY</h1>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-10 py-2 text-lg bg-[#570f5d] rounded-xl text-white font-semibold">Order</button>
          <button className="px-7 py-2 text-lg font-semibold border-[#c80cda] border-2 rounded-xl">Book Demo</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OrderForm;
