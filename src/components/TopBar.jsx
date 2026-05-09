import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-[#2c2c3e] text-[#ccc] text-xs py-1.5">
      <div className="max-w-[1170px] mx-auto px-4 flex justify-between items-center">

        {/* Left side contact info */}
        <div className="flex gap-5">
          <span>
            <i className="fas fa-phone text-[#f5a623] mr-1.5"></i>
            +012 3456 7890
          </span>
          <span>
            <i className="fas fa-envelope text-[#f5a623] mr-1.5"></i>
            info@edification.com
          </span>
        </div>

        {/* Right side social icons */}
        <div className="flex gap-1.5">
          {[
            { icon: 'fab fa-facebook-f', href: '#' },
            { icon: 'fab fa-twitter', href: '#' },
            { icon: 'fab fa-google-plus-g', href: '#' },
            { icon: 'fab fa-instagram', href: '#' },
          ].map(({ icon, href }) => (
            <a
              key={icon}
              href={href}
              className="w-[26px] h-[26px] bg-[#3d3d55] rounded-full inline-flex items-center justify-center text-[#ccc] text-[11px] hover:bg-[#f5a623] hover:text-white transition-colors duration-300"
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TopBar;
