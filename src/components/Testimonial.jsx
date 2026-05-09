import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Edification completely transformed how I approach learning. The courses are world-class and the teachers are incredibly supportive. I landed my dream job within 3 months of graduating.",
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    avatar: 'https://picsum.photos/seed/testimonial1/100/100',
  },
  {
    id: 2,
    quote: "The curriculum here is cutting-edge and practical. I loved how every course connected theory with real-world projects. The experience was truly life-changing for my career.",
    name: 'David Martinez',
    role: 'Software Engineer',
    avatar: 'https://picsum.photos/seed/testimonial2/100/100',
  },
  {
    id: 3,
    quote: "Best investment I ever made. The faculty is passionate, the environment is collaborative, and the results speak for themselves. Highly recommend Edification to everyone.",
    name: 'Emily Chen',
    role: 'Data Scientist',
    avatar: 'https://picsum.photos/seed/testimonial3/100/100',
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="bg-[#1c1c2e] py-[70px] text-center text-white">
      <div className="max-w-[700px] mx-auto px-4">
        <span className="text-xs text-[#f5a623] font-semibold uppercase tracking-[1px] mb-4 block font-['Poppins']">
          TESTIMONIALS
        </span>
        <i className="fas fa-award text-[#f5a623] text-[40px] block mb-4"></i>
        <h2 className="text-[28px] font-bold text-white mb-8 font-['Poppins']">
          What Students Say
        </h2>

        {/* Quote */}
        <div key={t.id} className="animate-[fadeIn_0.5s_ease_forwards]">
          <blockquote className="text-[18px] italic text-[#ccc] leading-[1.8] mb-6 relative">
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-[#f5a623]">
              <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <strong className="block font-['Poppins'] font-bold text-white">{t.name}</strong>
              <span className="text-xs text-[#f5a623] uppercase tracking-[0.5px] font-['Poppins']">{t.role}</span>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${current === i ? 'bg-[#f5a623]' : 'bg-[#444]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
