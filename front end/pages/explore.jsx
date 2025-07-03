import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';

const sliderImages = [
  "https://www.bullworkmobility.com/technology/slide1.webp",
  "https://www.bullworkmobility.com/technology/slide2.webp"
];

const sliderImages2 = [
  "https://www.bullworkmobility.com/technology/2slide1.webp",
  "https://www.bullworkmobility.com/technology/2slide2.webp"
];

function Explore() {
  const [image, setImage] = useState(0);
  const [i, setI] = useState(0);

  const prev = () => {
    setImage((pre) => (pre === 0 ? sliderImages.length - 1 : pre - 1));
  };
  const cur = () => {
    setImage((pre) => (pre === sliderImages.length - 1 ? 0 : pre + 1));
  };

  const previ = () => {
    setI((pre) => (pre === 0 ? sliderImages2.length - 1 : pre - 1));
  };
  const curi = () => {
    setI((pre) => (pre === sliderImages2.length - 1 ? 0 : pre + 1));
  };

  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative">
          <img
            src="https://www.bullworkmobility.com/technology/techmain.webp"
            alt="Tech Main"
            className="w-full h-auto"
          />
          <div className='absolute top-[110px] left-[70px] text-white'>
            <h1 className='font-bold text-5xl md:text-9xl'>BHAI</h1>
            <p className='text-base md:text-xl'>Envisioned by Bullwork Mobility</p>
          </div>
        </section>

        <section className="text-center py-4 flex flex-col md:flex-row justify-between items-center px-4 shadow-2xl gap-4">
          <ul className='list-decimal flex flex-wrap justify-center items-center gap-6 md:gap-20 hover:cursor-pointer hover:underline'>
            <li>Automatic</li>
            <li>Control System</li>
            <li>BHAI App</li>
            <li>Analytics</li>
          </ul>
          <button className="bg-fuchsia-900 text-white px-8 py-2 rounded-lg hover:bg-fuchsia-800 transition mt-2 md:mt-0">ORDER</button>
        </section>

        <section className="text-center px-4 py-16 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            UNLEASH ELECTRIC VEHICLE'S TRUE POWER WITH BHAI BY YOUR SIDE
          </h2>
          <p className="mb-6 text-base md:text-lg">
            Experience the future of electric vehicles, seamlessly controlled via mobile app,
            featuring autonomous navigation guided by mission files.
          </p>
          <video
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            autoPlay loop muted 
            src="https://www.bullworkmobility.com/technology/Technology_page.mp4"
          />
        </section>

        <section className="bg-purple-50 px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">DISCOVER BULLWORK'S CONTROL SYSTEM</h2>
          <p className="text-center mb-10">
            Bullwork offers a variety of unique control options tailored to their vehicles
          </p>
          <section className='flex flex-col gap-10 max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-6 bg-white shadow-2xl rounded-3xl justify-center items-center p-5'>
              <div className='max-w-lg'>
                <h1 className='text-2xl md:text-3xl font-bold'>Control through Remote</h1>
                <p>The vehicle features a remote control, enabling you to manage its movements, including steering, accelerating, and braking, all from a distance for added convenience and control.</p>
              </div>
              <div>
                <img src="https://www.bullworkmobility.com/technology/remote.webp" alt="Remote Control" className='h-[200px] md:h-[300px] w-full md:w-[400px] p-2 rounded-4xl object-contain' />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-6 bg-white shadow-2xl rounded-3xl justify-center items-center p-5'>
              <div className='max-w-lg'>
                <h1 className='text-2xl md:text-3xl font-bold'>Control through App</h1>
                <p>The vehicle can be controlled through a user-friendly mobile app, offering remote access and autonomous features.</p>
              </div>
              <div>
                <img src="https://www.bullworkmobility.com/technology/app.webp" alt="App Control" className='h-[200px] md:h-[300px] w-full md:w-[400px] p-2 rounded-4xl object-contain' />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-6 bg-white shadow-2xl rounded-3xl justify-center items-center p-5'>
              <div className='max-w-lg'>
                <h1 className='text-2xl md:text-3xl font-bold'>Control through Draw-wire</h1>
                <p>The vehicle, featuring a new and innovative tethered control system, operates seamlessly through a wired connection for easy control.</p>
              </div>
              <div>
                <img src="https://www.bullworkmobility.com/technology/drawwire.webp" alt="Draw-wire Control" className='h-[200px] md:h-[300px] w-full md:w-[400px] p-2 rounded-4xl object-contain' />
              </div>
            </div>
          </section>

        </section>

        <section className="px-4 py-16 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-4">ELEVATE FROM ACTION TO INSIGHT</h2>
          <p className="mb-6">Track metrics and optimize operations with Bullwork's smart app insights.</p>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <CircleChevronLeft className='h-10 w-10 cursor-pointer' onClick={prev} />
            <img src={sliderImages[image]} alt="" className="w-full max-w-lg rounded-lg" />
            <CircleChevronRight className='h-10 w-10 cursor-pointer' onClick={cur} />
          </div>
          <p className="mt-4">
            Bullwork's electric vehicles are equipped with a smart app that <br className='hidden md:block' /> 
            provides detailed insights into its live location, current speed, <br className='hidden md:block' /> 
            remaining battery charge and real-time performance metrics.
          </p>
        </section>

        <section className="px-4 py-16 bg-purple-100 text-center">
          <h2 className="text-3xl font-bold mb-4">REAL-TIME ANALYTICS AND LIVE STREAMING</h2>
          <p className="mb-6">Stay informed with real-time updates on your vehicle's performance and live camera feeds, all accessible through a user-friendly interface</p>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <CircleChevronLeft className='h-10 w-10 cursor-pointer' onClick={previ} />
            <img src={sliderImages2[i]} alt="" className="w-full max-w-lg rounded-lg" />
            <CircleChevronRight className='h-10 w-10 cursor-pointer' onClick={curi} />
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-10">EXPLORE OUR AUTONOMOUS VEHICLES</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            {[
              {
                name: "BEAST",
                desc: "The Mighty Autonomous Electric Tractor",
                img: "https://www.bullworkmobility.com/home_products/beast.webp",
              },
              {
                name: "VAMANA",
                desc: "The Ultimate Unmanned Ground Vehicle",
                img: "https://www.bullworkmobility.com/home_products/Vamana%20Pro.webp",
              },
            ].map((vehicle, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-xs mx-auto">
                <img src={vehicle.img} alt={vehicle.name} className="w-full h-60 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold">{vehicle.name}</h3>
                <p>{vehicle.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#ededed] py-12 px-4 text-center">
          <h1 className='text-3xl md:text-4xl mb-3'>JOIN THE BULLWORK FAMILY</h1>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
            <button className='px-7 py-2 text-xl bg-[#c80cda] rounded-4xl text-white font-semibold'>Order</button>
            <button className='px-7 py-2 font-semibold border-[#c80cda] border-2 rounded-4xl' onClick={() => navigate("/demo")}>Book Demo</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
