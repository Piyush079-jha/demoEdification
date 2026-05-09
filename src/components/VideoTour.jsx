import React from 'react';

const VideoTour = () => {
  return (
    <section className="bg-[#1c1c2e] py-[70px] text-center">
      <div className="max-w-[1170px] mx-auto px-4">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-[#f5a623] text-xs font-semibold uppercase tracking-[1px] mb-2.5 font-['Poppins']">
          <i className="fas fa-award text-xl"></i>
          <span>TAKE A TOUR</span>
        </div>

        <h2 className="text-[28px] font-bold text-white mb-8 font-['Poppins']">
          Video tour on Edification
        </h2>

        {/* Video wrapper */}
        <div className="relative rounded-xl overflow-hidden max-w-[900px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1100&q=80"
            alt="Video Tour"
            className="w-full h-[400px] object-cover block"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(20,20,40,0.55)]" />
          {/* Play button */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f5a623] border-none w-[70px] h-[70px] rounded-full text-white text-2xl flex items-center justify-center cursor-pointer shadow-[0_0_0_15px_rgba(245,166,35,0.2)] hover:scale-110 hover:shadow-[0_0_0_20px_rgba(245,166,35,0.15)] transition-all duration-300 pl-1">
            <i className="fas fa-play"></i>
          </button>
        </div>

      </div>
    </section>
  );
};

export default VideoTour;
