import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[480px] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 40%, #3d3d5c 70%, #4a4a6e 100%)',
      }}
    >
      {/* Background image (right side) */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(20,20,40,0.55)]" />

      {/* Content */}
      <div className="max-w-[1170px] mx-auto px-4 py-20 relative z-10">
        <div className="max-w-[520px]">
          <span className="text-[#ccc] text-sm font-['Poppins'] block mb-3">— ADMISSION '26</span>
          <h1 className="text-[42px] font-extrabold text-white leading-tight mb-4 uppercase">
            YOUR BRIGHT FUTURE<br />
            <span className="text-[#f5a623]">IS OUR MISSION</span>
          </h1>
          <p className="text-[#bbb] text-sm leading-[1.8] mb-7 max-w-[420px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <button className="bg-[#f5a623] hover:bg-[#e6951a] text-white border-none px-8 py-3 rounded-full font-['Poppins'] font-semibold text-[13px] cursor-pointer transition-colors duration-300 uppercase tracking-[0.5px]">
            START LEARNING NOW
          </button>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2.5 z-20">
        {['left', 'right'].map(dir => (
          <button
            key={dir}
            className="bg-white/15 border-none text-white w-9 h-9 rounded-full cursor-pointer text-sm flex items-center justify-center hover:bg-[#f5a623] transition-colors duration-300"
          >
            <i className={`fas fa-chevron-${dir}`}></i>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
