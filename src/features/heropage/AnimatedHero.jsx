import React from 'react';

// Your local image imports
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import heroBg from '../../assets/heroBg.png';
import imgcenter from '../../assets/imgcenter.png';


export default function AnimatedHero() {
  return (
    <div className="relative flex items-center justify-center min-h-[90vh]  w-full bg-white  text-gray-800 mt-7">
      
      {/* 
        --- BACKGROUND 180-DEGREE ARCS --- 
      */}
      <div className="absolute left-1/2 top-[60%] sm:top-[65%] -translate-x-1/2 flex justify-center items-end pointer-events-none z-0 mt-10">
        <div className="absolute bottom-0 w-[520px] h-[260px] sm:w-[660px] sm:h-[330px] border-[1.5px] border-b-0 border-gray-100 rounded-t-[100vw]"></div>
        <div className="absolute bottom-0 w-[700px] h-[350px] sm:w-[860px] sm:h-[430px] border-[1.5px] border-b-0 border-gray-100 rounded-t-[100vw]"></div>
        <div className="absolute bottom-0 w-[880px] h-[440px] sm:w-[1060px] sm:h-[530px] border-[1.5px] border-b-0 border-gray-100 rounded-t-[100vw]"></div>
        <div className="absolute bottom-0 w-[1060px] h-[530px] sm:w-[1260px] sm:h-[630px] border-[1.5px] border-b-0 border-gray-100 rounded-t-[100vw]"></div>
      </div>

      {/* Inline styles for the smooth floating/moving animations */}
      <style>
        {`
          @keyframes float-left {
            0%, 100% { transform: translateY(0) rotate(-12deg); }
            50% { transform: translateY(-25px) rotate(-8deg); }
          }
          @keyframes float-mid {
            0%, 100% { transform: translateY(0) rotate(-6deg); }
            50% { transform: translateY(-20px) rotate(-10deg); }
          }
          @keyframes float-right {
            0%, 100% { transform: translateY(0) rotate(12deg); }
            50% { transform: translateY(-25px) rotate(16deg); }
          }

          .animate-float-left {
            animation: float-left 6s ease-in-out infinite;
          }
          .animate-float-mid {
            animation: float-mid 8s ease-in-out infinite;
          }
          .animate-float-right {
            animation: float-right 7s ease-in-out infinite;
          }
        `}
      </style>

      {/* --- FIXED POSITION FLOATING BACKGROUND IMAGES --- */}
      <div className="absolute inset-0 w-full max-w-[1600px] mx-auto h-full pointer-events-none z-10">
        
        {/* LEFT IMAGE FIXED */}
        <div className="absolute top-[30%] sm:top-[35%] left-[2%] sm:left-[6%] md:left-[10%] lg:left-[12%] pointer-events-auto">
            <div className="animate-float-left w-[110px] h-[150px] sm:w-[160px] sm:h-[220px] md:w-[220px] md:h-[300px] rounded-[1rem] md:rounded-[2rem] overflow-hidden  transition-transform duration-500 hover:scale-110 cursor-pointer ">
                <img 
                  src={img1} 
                  alt="Left Floating Image" 
                  className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* MIDDLE IMAGE FIXED (Top Center) */}
        <div className="absolute top-[8%] sm:top-[10%] md:top-[1%] left-1/2 -translate-x-1/2 pointer-events-auto">
            <div className="animate-float-mid w-[140px] h-[90px] sm:w-[200px] sm:h-[130px] md:w-[280px] md:h-[180px] rounded-[1rem] md:rounded-[2rem] overflow-hidden  transition-transform duration-500 hover:scale-110 cursor-pointer ">
                <img 
                  src={img2} 
                  alt="Middle Floating Image" 
                  className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* RIGHT IMAGE FIXED */}
        <div className="absolute top-[30%] sm:top-[35%] right-[2%] sm:right-[6%] md:right-[10%] lg:right-[12%] pointer-events-auto">
            <div className="animate-float-right w-[110px] h-[150px] sm:w-[160px] sm:h-[220px] md:w-[220px] md:h-[300px] rounded-[1rem] md:rounded-[2rem] overflow-hidden  transition-transform duration-500 hover:scale-110 cursor-pointer ">
                <img 
                  src={img3} 
                  alt="Right Floating Image" 
                  className="w-full h-full object-cover"
                />
            </div>
        </div>

      </div>

      {/* --- CENTER FIXED PHONE IMAGE --- */}
      <div className="relative z-20 flex justify-center items-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mt-10 sm:mt-0 pointer-events-none">
        {/* Render the actual center phone image instead of CSS UI */}
        <img 
          src={imgcenter} 
          alt="Phone on Hand" 
          className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto object-contain transition-transform duration-700 hover:scale-160 pointer-events-auto scale-150"
        />
      </div>

    </div>
  );
}
