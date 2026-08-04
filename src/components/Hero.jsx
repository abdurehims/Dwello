import house from "../assets/images/heroImage.png";
import SearchBox from "./SearchBox";

function Hero() {
  return (
    <section className="bg-[#F8F1EA]">

      {/* Top: heading + image overlapping */}
      <div className="relative max-w-[1400px] h-[760px] mx-auto px-8 pt-16 pb-0 flex items-center justify-between gap-8 overflow-visible">

        {/* Left — text */}
        <div className="relative z-10 max-w-sm flex-shrink-0">
          <h1 className="text-[#2B1B12] text-5xl md:text-6xl font-extrabold 
          leading-tight text-[74px] leading-[82px] tracking-[-2px]">
            Find Your
            <br />
            Dream Home

          </h1>

          <p className="mt-6 text-sm md:text-base text-[#5E5147] leading-7 max-w-xs">
            Explore our curated selection of exquisite properties
            meticulously tailored to your unique dream home vision
          </p>

          <button className="mt-10 bg-[#2B1B12] text-white px-10 py-4 rounded-xl text-base font-semibold hover:bg-[#3B2619] duration-300
          px-14 py-5 rounded-xl text-xl">
            Sign up
          </button>
        </div>

        {/* Right — large house image, overflows right edge */}
        <div className="flex-1 flex justify-end -mr-8">
          <img
            src={house}
            alt="Modern luxury home"
            className="w-[640px] md:w-[780px] lg:w-[1080px] xl:w-[1000px] object-contain"
          />
        </div>

      </div>

      <SearchBox />

    </section>
  );
}

export default Hero;
