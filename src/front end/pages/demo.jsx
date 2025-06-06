import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Demo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    product: "Beast",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Alert all details
    alert(
      `Demo Booking Details:\n\n${Object.entries(formData)
        .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
        .join("\n")}`
    );

    // Store in localStorage
    localStorage.setItem("demoFormData", JSON.stringify(formData));
  };

  return (
    <>
      <main>
        <section>
          <Header />
        </section>

        <section className="flex flex-col justify-center items-center bg-gradient-to-t to-[#ae2db9] to-20% from-white from-80% gap-8 py-10 px-4">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-2">DEMO FORM</h1>
            <p className="text-xl">Fill in the below details to book a demo</p>
          </div>

          <div className="bg-white shadow-2xl p-8 rounded-2xl ">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-1">Name*</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="number" className="block font-semibold mb-1">Phone Number*</label>
                  <input
                    type="number"
                    id="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-1">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block font-semibold mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="product" className="block font-semibold mb-1">Select Product</label>
                  <select
                    id="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    <option value="Beast">Beast</option>
                    <option value="GLX">GLX</option>
                    <option value="VANAMA">VANAMA</option>
                    <option value="OX-1">OX-1</option>
                    <option value="WARRIOR">WARRIOR</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold mb-1">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 bg-[#c80cda] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#a509b3] transition"
                >
                  BOOK DEMO
                </button>
                <p className="mt-4 text-sm text-gray-600">
                  Looking to book product?{" "}
                  <span
                    className="text-[#c80cda] font-medium cursor-pointer hover:underline"
                    onClick={() => navigate("/order")}
                  >
                    Book Product
                  </span>
                </p>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-[#ededed] py-12 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">JOIN THE BULLWORK FAMILY</h1>
          <div className="flex justify-center flex-wrap gap-4">
            <button className="px-7 py-2 text-xl bg-[#c80cda] rounded-full text-white font-semibold hover:bg-[#a509b3] transition">
              Order
            </button>
            <button
              className="px-7 py-2 text-xl font-semibold border-[#c80cda] border-2 rounded-full hover:bg-[#c80cda] hover:text-white transition"
              onClick={() => navigate("/demo")}
            >
              Book Demo
            </button>
          </div>
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
