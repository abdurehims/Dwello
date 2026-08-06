import locationIcon from "../assets/icons/location.png";
import homeIcon from "../assets/icons/home.png";
import priceIcon from "../assets/icons/price.png";

function SearchBox() {
  return (
    <div className="w-[90%] max-w-[1180px] mx-auto -mt-8 relative z-20 pb-10">
      <div className="bg-[#D9C5B2] rounded-2xl px-8 py-9 flex flex-col md:flex-row items-center gap-6 shadow-lg">

        {/* Location */}
        <div className="flex-1 flex items-center justify-between bg-white rounded-xl px-5 py-4 gap-3 cursor-pointer hover:shadow-md transition">
          <span className="text-[#2B1B12] font-medium text-base">Location</span>
          <img src={locationIcon} alt="location" className="w-5 h-5 object-contain" />
        </div>

        {/* Type */}
        <div className="flex-1 flex items-center justify-between bg-white rounded-xl px-5 py-4 gap-3 cursor-pointer hover:shadow-md transition">
          <span className="text-[#2B1B12] font-medium text-base">Type</span>
          <img src={homeIcon} alt="type" className="w-5 h-5 object-contain" />
        </div>

        {/* Price Range */}
        <div className="flex-1 flex items-center justify-between bg-white rounded-xl px-5 py-4 gap-3 cursor-pointer hover:shadow-md transition">
          <span className="text-[#2B1B12] font-medium text-base">Price Range</span>
          <img src={priceIcon} alt="price range" className="w-5 h-5 object-contain" />
        </div>

        {/* Search button */}
        <button className="bg-[#2B1B12] text-white px-10 py-4 rounded-xl text-base font-semibold hover:bg-[#3B2619] duration-300 whitespace-nowrap">
          Sign up
        </button>

      </div>
    </div>
  );
}

export default SearchBox;
