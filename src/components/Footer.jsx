import React from 'react';

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a1a2e] text-[#aaa] pt-12">
      <div className="max-w-[1170px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">

        {/* Brand column */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="bg-[#f5a623] w-9 h-9 rounded-md flex items-center justify-center text-white text-[17px]">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <span className="font-['Poppins'] font-extrabold text-base text-white tracking-[2px]">
              EDIFICATION
            </span>
          </div>

          {/* Address */}
          <address className="not-italic text-[13px] leading-[1.9]">
            <p><i className="fas fa-map-marker-alt text-[#f5a623] mr-2 w-3.5"></i>Oxford Centre, London (United Kingdom)</p>
            <p><i className="fas fa-phone text-[#f5a623] mr-2 w-3.5"></i>+011 1000 7000</p>
            <p><i className="fas fa-phone text-[#f5a623] mr-2 w-3.5"></i>+011 1000 7001</p>
            <p><i className="fas fa-envelope text-[#f5a623] mr-2 w-3.5"></i>info@edification.com</p>
          </address>

          {/* Social icons */}
          <div className="flex gap-2 mt-4">
            {['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-google-plus-g', 'fab fa-instagram'].map(icon => (
              <a
                key={icon}
                href="#"
                className="w-[30px] h-[30px] rounded-full bg-[#2d2d44] flex items-center justify-center text-[#aaa] text-xs hover:bg-[#f5a623] hover:text-white transition-all duration-300"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Course Offers column */}
        <div>
          <h5 className="font-['Poppins'] text-[15px] font-bold text-white mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#f5a623]">
            Course Offers
          </h5>
          <ul className="space-y-2.5">
            {[
              { label: 'Case Studies', href: '#courses' },
              { label: 'Blog',         href: '#blog' },
              { label: 'Our Story',    href: '#about' },
              { label: 'Blog List',    href: '#blog' },
              { label: 'Work with us', href: '#contact' },
            ].map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={scrollTo(item.href)}
                  className="text-[13px] text-[#aaa] hover:text-[#f5a623] transition-colors duration-300"
                >
                  <i className="fas fa-chevron-right text-[10px] text-[#f5a623] mr-1.5"></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Hours column */}
        <div>
          <h5 className="font-['Poppins'] text-[15px] font-bold text-white mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#f5a623]">
            Working Day &amp; Time
          </h5>
          <table className="w-full border-collapse text-[13px]">
            <tbody>
              {[
                ['MON - TUE', '8:00 AM – 5:00 PM'],
                ['WED - THU', '9:00 AM – 5:00 PM'],
                ['FRI',       '8:00 AM – 3:00 PM'],
                ['SAT - SUN', 'CLOSED'],
              ].map(([day, time]) => (
                <tr key={day} className="border-b border-[#2d2d44]">
                  <td className="py-1.5 text-[#aaa]">{day}</td>
                  <td className="py-1.5 text-right text-[#f5a623] font-semibold">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="bg-[#111120] py-4 text-center">
        <p className="text-xs text-[#666]">Copyright © 2026 Edification. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
