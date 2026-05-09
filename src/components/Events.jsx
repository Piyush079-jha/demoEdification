import React from 'react';

const events = [
  { id: 1, month: 'Jan', day: '19', year: '2018', title: 'Affiliate Marketing', time: '09:00 AM - 05:00 PM', location: 'Central Hall' },
  { id: 2, month: 'Jan', day: '25', year: '2018', title: 'Facebook Marketing',  time: '09:00 AM - 05:00 PM', location: 'Room B12' },
  { id: 3, month: 'Jan', day: '28', year: '2018', title: 'Edutor Autumn',        time: '10:00 AM - 04:00 PM', location: 'Auditorium' },
  { id: 4, month: 'Jan', day: '29', year: '2018', title: 'Workshop PHP',         time: '11:00 AM - 03:00 PM', location: 'Lab 3' },
];

const Events = () => {
  return (
    <section className="py-[70px] bg-[#f5f5f8]">
      <div className="max-w-[1170px] mx-auto px-4">
        <span className="text-xs text-[#f5a623] font-semibold uppercase tracking-[1px] mb-2 block font-['Poppins']">
          JOIN WITH US
        </span>
        <h2 className="text-[28px] font-bold text-[#333] mb-8 font-['Poppins']">
          Upcoming Events to
        </h2>

        <div className="grid grid-cols-2 gap-5">
          {events.map(e => (
            <div
              key={e.id}
              className="flex gap-4 items-start bg-white p-4 rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Date block */}
              <div className="bg-[#f5a623] text-white min-w-[65px] h-[65px] rounded-md flex flex-col items-center justify-center font-['Poppins'] leading-tight flex-shrink-0">
                <span className="text-[22px] font-extrabold">{e.day}</span>
                <span className="text-xs font-semibold uppercase">{e.month}</span>
                <span className="text-[11px] opacity-80">{e.year}</span>
              </div>

              {/* Info */}
              <div>
                <h4 className="text-sm font-bold text-[#333] mb-1.5 font-['Poppins']">{e.title}</h4>
                <p className="text-xs text-[#777] mb-1">
                  <i className="far fa-clock text-[#f5a623] mr-1.5 w-3.5"></i>
                  {e.time}
                </p>
                <p className="text-xs text-[#777]">
                  <i className="fas fa-map-marker-alt text-[#f5a623] mr-1.5 w-3.5"></i>
                  {e.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
