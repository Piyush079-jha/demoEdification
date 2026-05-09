import React from 'react';

const posts = [
  {
    id: 1,
    title: 'The Death Of Architecture',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80',
    category: 'Architecture',
    date: 'September 15, 21',
    comments: '3 Comments',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore eiusmod.',
  },
  {
    id: 2,
    title: 'Assess id allamcorper',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
    category: 'Education',
    date: 'September 18, 21',
    comments: '5 Comments',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore eiusmod.',
  },
  {
    id: 3,
    title: 'The Death Of Architecture',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
    category: 'Design',
    date: 'September 20, 21',
    comments: '7 Comments',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore eiusmod.',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-[70px] bg-[#f9f9f9]">
      <div className="max-w-[1170px] mx-auto px-4">

        {/* Header row */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs text-[#f5a623] font-semibold uppercase tracking-[1px] mb-2 block font-['Poppins']">
              TOP STORIES
            </span>
            <h2 className="text-[28px] font-bold text-[#333] font-['Poppins']">Blog & news</h2>
          </div>
          <div className="flex gap-2">
            {['left', 'right'].map(dir => (
              <button
                key={dir}
                className="w-9 h-9 rounded-full border border-[#e5e5e5] bg-white cursor-pointer flex items-center justify-center text-[13px] text-[#777] hover:bg-[#f5a623] hover:border-[#f5a623] hover:text-white transition-all duration-300"
              >
                <i className={`fas fa-chevron-${dir}`}></i>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          {posts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
                <span className="absolute bottom-3 left-3 bg-[#f5a623] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full font-['Poppins'] uppercase">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="flex gap-4 text-xs text-[#777] mb-2.5">
                  <span><i className="far fa-calendar-alt text-[#f5a623] mr-1"></i>{post.date}</span>
                  <span><i className="far fa-comment text-[#f5a623] mr-1"></i>{post.comments}</span>
                </div>
                <h4 className="text-[15px] font-bold text-[#333] mb-2.5 font-['Poppins']">{post.title}</h4>
                <p className="text-[13px] text-[#777] leading-[1.7] mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="bg-[#f5a623] hover:bg-[#e6951a] text-white text-[11px] px-4 py-1.5 rounded-full font-['Poppins'] font-semibold uppercase tracking-[0.5px] transition-colors duration-300 inline-block"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
