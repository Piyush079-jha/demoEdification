import React, { useState, useEffect } from 'react';

const allTeachers = [
  { id: 1, name: 'Patrick Gunner Deny', role: 'App Developer',   image: 'https://picsum.photos/seed/teacher1/300/220', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.' },
  { id: 2, name: 'Cameron Brown',        role: 'UI/UX Designer',  image: 'https://picsum.photos/seed/teacher2/300/220', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.' },
  { id: 3, name: 'Joseph Mark Monika',   role: 'Data Scientist',  image: 'https://picsum.photos/seed/teacher3/300/220', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.' },
  { id: 4, name: 'Angela Smith',         role: 'Web Developer',   image: 'https://picsum.photos/seed/teacher4/300/220', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.' },
  { id: 5, name: 'Robert Chen',          role: 'Machine Learning',image: 'https://picsum.photos/seed/teacher5/300/220', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.' },
];

const VISIBLE = 3;

const Teachers = () => {
  const [start, setStart] = useState(0);
  const dotCount = allTeachers.length - VISIBLE + 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setStart(prev => (prev >= dotCount - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [dotCount]);

  const prev = () => setStart(s => (s === 0 ? dotCount - 1 : s - 1));
  const next = () => setStart(s => (s >= dotCount - 1 ? 0 : s + 1));
  const visible = allTeachers.slice(start, start + VISIBLE);

  const socialIcons = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-google-plus-g', 'fab fa-instagram'];

  return (
    <section id="teachers" className="py-[70px] bg-white">
      <div className="max-w-[1170px] mx-auto px-4">
        <span className="text-xs text-[#f5a623] font-semibold uppercase tracking-[1px] mb-2 block font-['Poppins']">
          LEARN FROM BEST
        </span>
        <h2 className="text-[28px] font-bold text-[#333] mb-8 font-['Poppins']">
          Our Teachers
        </h2>

        {/* Carousel row */}
        <div className="flex items-center gap-2.5">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="bg-white border border-[#e5e5e5] w-[38px] h-[38px] rounded-full flex items-center justify-center cursor-pointer text-[13px] text-[#777] flex-shrink-0 hover:bg-[#f5a623] hover:border-[#f5a623] hover:text-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-3 gap-6 mt-0">
            {visible.map(t => (
              <div
                key={t.id}
                className="border border-[#e5e5e5] rounded-lg overflow-hidden hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-[15px] font-bold text-[#333] mb-1 font-['Poppins']">{t.name}</h4>
                  <span className="text-xs text-[#f5a623] font-semibold uppercase tracking-[0.5px] block mb-2.5 font-['Poppins']">
                    {t.role}
                  </span>
                  <p className="text-[13px] text-[#777] leading-[1.7] mb-4">{t.bio}</p>
                  <div className="flex gap-2">
                    {socialIcons.map(icon => (
                      <a
                        key={icon}
                        href="#"
                        className="w-7 h-7 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[11px] text-[#777] hover:bg-[#f5a623] hover:border-[#f5a623] hover:text-white transition-all duration-300"
                      >
                        <i className={icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="bg-white border border-[#e5e5e5] w-[38px] h-[38px] rounded-full flex items-center justify-center cursor-pointer text-[13px] text-[#777] flex-shrink-0 hover:bg-[#f5a623] hover:border-[#f5a623] hover:text-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">
          {Array.from({ length: dotCount }).map((_, i) => (
            <span
              key={i}
              onClick={() => setStart(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${start === i ? 'bg-[#f5a623]' : 'bg-[#ddd]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
