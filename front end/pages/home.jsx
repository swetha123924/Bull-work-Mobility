import React from 'react';
import Header from './header';
import Footer from './footer';
import MainBanner from './main';
import ProductsSection from './product';
import BlogsSection from './blogSection';
import { useState,useEffect } from 'react';
import { CircleArrowDown } from 'lucide-react';
import AOS from 'aos'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [showMore, setShowMore] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();

    const toggleAnswer = (index) => {
      setActiveIndex(prev => prev === index ? null : index);
    };


    useEffect(() => {
        AOS.init({
          duration: 1000,     
          once: true           
        });
      }, []);

    return (
        <>
        <main>
            <Header />
            <MainBanner />
            <ProductsSection />
            <BlogsSection />
            <section>

    <div className="mb-16 overflow-hidden text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6a0474] mb-6">PRESS RELEASES</h1>
        <div className="relative w-full overflow-hidden">
            <div className="flex gap-4 animate-press whitespace-nowrap">
                {[...Array(2)].map((_, index) => (
                    <React.Fragment key={index}>
                        {[...Array(10)].map((__, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={`https://www.bullworkmobility.com/press/press${imgIndex + 1}.webp`}
                                alt=""
                                className="rounded-lg shadow-md hover:scale-105 transition w-[200px] sm:w-[240px] h-auto"
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>

    <div className="overflow-hidden text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#510059] mb-6">AWARDS AND CERTIFICATION</h1>
        <div className="overflow-hidden relative w-full">
            <div className="flex gap-4 justify-items-center animate-award whitespace-nowrap">
                {[...Array(2)].map((_, index) => (
                    <React.Fragment key={index}>
                        {[...Array(10)].map((__, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={`https://www.bullworkmobility.com/awards/award${imgIndex + 1}.webp`}
                                alt=""
                                className="rounded-lg shadow-md hover:scale-105 transition w-[200px] sm:w-[240px] h-auto"
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
</section>

<section>
    <img src="https://www.bullworkmobility.com/images/greener_bharath.webp" alt="" className="w-full object-cover" />
</section>

<section className="text-center mt-6 px-4">
    <h1 className="text-3xl sm:text-4xl font-bold">SHOWCASING THE INNOVATION</h1>
    <p className="text-[#510059] mb-4">Bullwork's Electric Vehicles at Major Events</p>
    <div className="flex justify-center items-center">
        <img src="https://www.bullworkmobility.com/images/events.webp" alt="" className="w-full max-w-5xl h-auto" />
    </div>
</section>
                   
  
<section className='text-center mt-6'>
      <h1 className='font-bold mb-10 text-5xl'>FREQUENTLY ASKED QUESTIONS</h1>
      <div className='mx-auto max-w-5xl text-start'>
        
        <div>
          <section className='flex justify-between cursor-pointer mb-4 text-2xl' onClick={() => toggleAnswer(0)}>
            <h3 className='font-semibold'>Does Electric Tractor have same pull and torque as diesel Tractor?</h3>
            <CircleArrowDown className={`${activeIndex === 0 ? 'rotate-180' : ''} transition-transform duration-300`} />
          </section>
          {activeIndex === 0 && (
            <p className='text-[#6a0474] font-semibold'>
              The Electric Tractor has more torque, high efficiency and best-in-class drawbar pull compared to conventional diesel Tractor.
            </p>
          )}
        </div>
        <hr />

        <div>
          <section className='flex justify-between cursor-pointer mb-4 text-2xl p-2' onClick={() => toggleAnswer(1)}>
            <h3 className='font-semibold'>What is the expected battery life of Bullwork vehicles?</h3>
            <CircleArrowDown className={`${activeIndex === 1 ? 'rotate-180' : ''} transition-transform duration-300`} />
          </section>
          {activeIndex === 1 && (
            <p className='text-[#6a0474] font-semibold'>
              Bullwork vehicles run on high-quality lithium-ion batteries, these batteries offer a long life of upto 7 years after which the battery can still be used for power storage purpose like home UPS etc.
            </p>
          )}
        </div>
        <hr />

        <div>
          <section className='flex justify-between cursor-pointer mb-4 text-2xl p-2' onClick={() => toggleAnswer(2)}>
            <h3 className='font-semibold'>Can standard implements be attached with Vamana, GLX, and the Electric Tractor models?</h3>
            <CircleArrowDown className={`${activeIndex === 2 ? 'rotate-180' : ''} transition-transform duration-300`} />
          </section>
          {activeIndex === 2 && (
            <p className='text-[#6a0474] font-semibold'>
              Yes, The Electric Tractor can be attached with Cat 1 implements, Vamana can be attached with Cat 1N implements and  GLX will have quick release attachments that can accommodate other range implements designed by us.
            </p>
          )}
        </div>
        <hr />

        <div>
          <section className='flex justify-between cursor-pointer mb-4 text-2xl p-2' onClick={() => toggleAnswer(3)}>
            <h3 className='font-semibold'>How do you charge Bullwork vehicles?</h3>
            <CircleArrowDown className={`${activeIndex === 3 ? 'rotate-180' : ''} transition-transform duration-300`} />
          </section>
          {activeIndex === 3 && (
            <p className='text-[#6a0474] font-semibold'>
              Our vehicles can be charged through standard 16A or 32A sockets that can be found in all homes, we will also support DC fast charging in the future. Our machines can be charged from 0 to 100% in 5 to 7 hours with the home chargers.
            </p>
          )}
        </div>
        <hr />

        <div>
          <section className='flex justify-between cursor-pointer mb-4 text-2xl p-2' onClick={() => toggleAnswer(4)}>
            <h3 className='font-semibold'>How long does Bullwork vehicles run on one single charge?</h3>
            <CircleArrowDown className={`${activeIndex === 4 ? 'rotate-180' : ''} transition-transform duration-300`} />
          </section>
          {activeIndex === 4 && (
            <p className='text-[#6a0474] font-semibold'>
              Our Electric Tractor will run continuously for 5 to 6 hours depending on the type of usage, however we understand the range anxiety is big issue for customer so we have provided a hybrid charging solution inside the vehicle, Customers can switch this on and extend the range of vehicle by another 4 hours.
            </p>
          )}
        </div>
        <hr />

        <div> 
          <section className='flex justify-between cursor-pointer mb-4 text-2xl p-2' onClick={() => toggleAnswer(5)}>
            <h3 className='font-semibold'>How do I get my Bullwork vehicles serviced?</h3>
            <CircleArrowDown className={`${activeIndex === 5 ? 'rotate-180' : ''} transition-transform duration-300`} />
          </section>
          {activeIndex === 5 && (
            <p className='text-[#6a0474] font-semibold'>
              Bullwork is establishing its service and dealership network across Bharath, customers can contact the service network for issue resolutions.
            </p>
          )}
        </div>
        <hr />

        <div>
          <section className='flex justify-between cursor-pointer mb-4 text-2xl p-2' onClick={() => toggleAnswer(6)}>
            <h3 className='font-semibold'>Can we?</h3>
            <CircleArrowDown className={`${activeIndex === 6 ? 'rotate-180' : ''} transition-transform duration-300`} />
          </section>
          {activeIndex === 6 && (
            <p className='text-[#6a0474] font-semibold'>yes, we can</p>
          )}
        </div>
        <hr />
      </div>

      <button className='bg-[#c80cda] px-20 rounded-4xl text-white font-semibold py-3 mt-10 mb-10'>
        View More
      </button>
    </section>

                   
                    <section className="bg-[#ededed] py-12 px-4 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3">JOIN THE BULLWORK FAMILY</h1>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-7 py-2 text-lg sm:text-xl bg-[#c80cda] rounded-4xl text-white font-semibold">Order</button>
                            <button className="px-7 py-2 font-semibold border-[#c80cda] border-2 rounded-4xl hover:cursor-pointer" onClick={() => navigate("/demo")}>Book Demo</button>
                        </div>
                    </section>
            <Footer />
        </main>
        </>
    );
}

export default Home;


