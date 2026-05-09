import React from 'react';

const courses = [
  {
    id: 1,
    title: 'Application Design Course',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80',
    rating: 4.5,
    reviews: 124,
    students: 18,
    duration: '3 Year',
    lessons: 48,
    enrolled: '1 Year',
    price: '$45',
    label: 'Design',
  },
  {
    id: 2,
    title: 'Data Structure & Algorithm',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
    rating: 4.7,
    reviews: 98,
    students: 22,
    duration: '3 Year',
    lessons: 36,
    enrolled: '1 Year',
    price: '$55',
    label: 'Development',
  },
  {
    id: 3,
    title: 'Android App Development',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
    rating: 4.6,
    reviews: 87,
    students: 15,
    duration: '2 Year',
    lessons: 42,
    enrolled: '1 Year',
    price: '$50',
    label: 'Mobile',
  },
];

const StarRating = ({ rating }) => (
  <span className="text-[#f5a623] text-xs">
    {[1, 2, 3, 4, 5].map(i => (
      <i
        key={i}
        className={
          i <= Math.floor(rating)
            ? 'fas fa-star'
            : i - 0.5 <= rating
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      ></i>
    ))}
  </span>
);

const Courses = () => {
  return (
    <section id="courses" className="py-[70px] bg-[#f9f9f9]">
      <div className="max-w-[1170px] mx-auto px-4">
        <span className="text-xs text-[#f5a623] font-semibold uppercase tracking-[1px] mb-2 block font-['Poppins']">
          BUILD YOUR CAREER
        </span>
        <h2 className="text-[28px] font-bold text-[#333] mb-8 font-['Poppins']">
          Featured Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-[0_3px_15px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
                <span className="absolute top-3 right-3 bg-[#f5a623] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full font-['Poppins'] uppercase">
                  {course.label}
                </span>
              </div>

              {/* Body */}
              <div className="p-4">
                <h4 className="text-[15px] font-bold mb-2 text-[#333] font-['Poppins']">
                  {course.title}
                </h4>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <StarRating rating={course.rating} />
                  <span className="text-[#777] text-xs">({course.reviews})</span>
                  <span className="ml-auto text-xs text-[#777]">
                    <i className="fas fa-user text-[#f5a623] mr-1"></i>
                    {course.students}
                  </span>
                </div>
                <p className="text-[#777] text-[13px] leading-[1.7] mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                  incididunt labore dolore.
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-[#e5e5e5] text-xs text-[#777]">
                  <span><i className="far fa-clock text-[#f5a623] mr-1"></i>{course.duration}</span>
                  <span><i className="fas fa-book text-[#f5a623] mr-1"></i>{course.lessons}</span>
                  <span><i className="fas fa-graduation-cap text-[#f5a623] mr-1"></i>{course.enrolled}</span>
                  <span className="ml-auto font-['Poppins'] font-bold text-[15px] text-[#f5a623]">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
