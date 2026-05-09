import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-[70px] bg-white">
      <div className="max-w-[1170px] mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        {/* Text */}
        <div className="flex-1">
          <span className="text-xs text-[#f5a623] font-semibold uppercase tracking-[1px] mb-2 block font-['Poppins']">
            ABOUT US
          </span>
          <h2 className="text-[28px] font-bold text-[#333] mb-4 font-['Poppins']">
            Welcome to<br />
            Our <span className="text-[#f5a623]">university</span>
          </h2>
          <p className="text-[#777] text-sm leading-[1.8] mb-4">
            Fugiat duis dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
            rem aperiam.
          </p>
          <p className="text-[#777] text-sm leading-[1.8] mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque
            porro quisquam.
          </p>
          <button className="bg-[#f5a623] hover:bg-[#e6951a] text-white border-none px-6 py-2.5 rounded-full font-['Poppins'] font-semibold text-[13px] cursor-pointer transition-colors duration-300 uppercase tracking-[0.5px]">
            READ MORE
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <div className="relative rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80"
              alt="University Campus"
              className="w-full block rounded-md"
            />
            {/* Play button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f5a623] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-xl cursor-pointer shadow-[0_0_0_10px_rgba(245,166,35,0.25)] hover:scale-110 transition-transform duration-300">
              <i className="fas fa-play ml-1"></i>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
