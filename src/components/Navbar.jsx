import React, { useState, useEffect, useRef } from 'react';

const links = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Teacher', href: '#teachers' },
  { label: 'Blog',    href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef(null);

  const toggleSearch = () => { setSearchOpen(p => !p); setSearchQuery(''); };

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') setSearchOpen(false); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const handleClick = (e, link) => {
    e.preventDefault();
    setActive(link.label);
    const target = document.querySelector(link.href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => {
      links.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(link.label);
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] sticky top-0 z-[1000] py-3">
      <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="bg-[#f5a623] w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <span className="font-['Poppins'] font-extrabold text-lg text-[#333] tracking-[2px]">
            EDIFICATION
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-7">
          {links.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link)}
                className={`font-['Poppins'] text-[13px] font-semibold uppercase tracking-[0.5px] pb-1 relative transition-colors duration-300 ${active === link.label ? 'text-[#f5a623] after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-[#f5a623] after:rounded-sm' : 'text-[#555] hover:text-[#f5a623]'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          {searchOpen && (
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-[200px] border border-[#e5e5e5] rounded-full px-4 py-1.5 text-sm outline-none focus:border-[#f5a623] transition-colors duration-300"
              />
            </div>
          )}

          <div
            onClick={toggleSearch}
            className="cursor-pointer text-[#555] text-base hover:text-[#f5a623] transition-colors duration-300"
          >
            <i className={searchOpen ? 'fas fa-times' : 'fas fa-search'}></i>
          </div>

          <div
            onClick={() => setMenuOpen(p => !p)}
            className="lg:hidden cursor-pointer text-[#555] text-xl hover:text-[#f5a623] transition-colors duration-300"
          >
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#eee] px-4 py-4 shadow-md">
          <ul className="flex flex-col gap-1">
            {links.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { handleClick(e, link); setMenuOpen(false); }}
                  className={`block font-['Poppins'] text-[13px] font-semibold uppercase tracking-[0.5px] py-2 border-b border-[#f5f5f5] transition-colors duration-300 ${active === link.label ? 'text-[#f5a623]' : 'text-[#555] hover:text-[#f5a623]'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;