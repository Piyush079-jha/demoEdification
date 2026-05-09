import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-[#f5a623] py-6">
      <div className="max-w-[1170px] mx-auto px-4 flex justify-between items-center">
        <h3 className="text-white text-xl font-extrabold tracking-[1px] uppercase font-['Poppins']">
          TRAINING IN ADVANCE NETWORKING
        </h3>
        <button className="bg-white hover:bg-[#f0f0f0] text-[#f5a623] font-bold border-none px-8 py-2.5 rounded-full font-['Poppins'] font-semibold text-[13px] cursor-pointer transition-colors duration-300 uppercase tracking-[0.5px] min-w-[120px]">
          JOIN NOW
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
