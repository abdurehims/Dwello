

function SearchBox() {
  return (
   <section className="absolute
bottom-[-120px]
left-1/2
-translate-x-1/2
w-[90%]
max-w-[1180px]
rounded-[28px]
">
      {/* Bottom search bar */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="bg-[#D9C5B2] rounded-2xl px-8 py-9 flex flex-col md:flex-row items-center gap-6">

          {/* Location */}
          <div className="flex-1 flex items-center justify-between bg-white rounded-xl px-5 py-4 gap-3 cursor-pointer hover:shadow-md transition">
            <span className="text-[#2B1B12] font-medium text-base">Location</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2B1B12]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" />
              <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
            </svg>
          </div>

          {/* Type */}
          <div className="flex-1 flex items-center justify-between bg-white rounded-xl px-5 py-4 gap-3 cursor-pointer hover:shadow-md transition">
            <span className="text-[#2B1B12] font-medium text-base">Type</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2B1B12]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6" />
            </svg>
          </div>

          {/* Price Range */}
          <div className="flex-1 flex items-center justify-between bg-white rounded-xl px-5 py-4 gap-3 cursor-pointer hover:shadow-md transition">
            <span className="text-[#2B1B12] font-medium text-base">Price Range</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2B1B12]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v.5M12 17.5V18M9.5 9.5A2.5 2.5 0 0112 8a2.5 2.5 0 010 5 2.5 2.5 0 000 5 2.5 2.5 0 002.5-1.5" />
            </svg>
          </div>

          {/* Search button */}
          <button className="bg-[#2B1B12] text-white px-10 py-4 rounded-xl text-base font-semibold hover:bg-[#3B2619] duration-300 whitespace-nowrap">
            Sign up
          </button>

        </div>
      </div>
  </section>
  );
}

export default SearchBox;