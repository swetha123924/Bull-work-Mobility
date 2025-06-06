// src/components/MainBanner.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleChevronDown } from 'lucide-react';

function MainBanner() {
    const navigate = useNavigate();
    
    return (
        <section className='relative h-[40vh] sm:h-[60vh] md:h-[95vh] w-full'>
            <img 
                className='w-full h-full object-cover' 
                src="https://www.bullworkmobility.com/index/homerender_main.png" 
                alt="Electric Autonomous Solutions" 
            />
            <div className="absolute inset-0 top-9/12 flex flex-col items-center justify-center text-center px-4">
                <button 
                    onClick={() => navigate('/order')} 
                    className="bg-gradient-to-l to-[#A100B1] from-[#57115E] px-6 sm:px-8 py-2 sm:py-3 rounded-md text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4"
                >
                    ORDER NOW
                </button>
                <h1 className='text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-black max-w-3xl'>
                    WE PROVIDE FULL STACK ELECTRIC AUTONOMOUS SOLUTIONS FOR A CLEANER, GREENER TOMORROW
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-[#A100B1] mb-3 sm:mb-4 flex flex-wrap gap-x-2 justify-center">
                    <a href="#">Electric Tractors</a> | 
                    <a href="#"> Sprayers</a> | 
                    <a href="#"> Loaders</a> | 
                    <a href="#">Bots</a>
                </p>
                <CircleChevronDown className=' text-white animate-bounce mt-2' />
            </div>
        </section>
    );
}

export default MainBanner;
