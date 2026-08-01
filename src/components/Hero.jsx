import house from "../assets/images/heroImage.png";

function Hero() {
  return (
    <section className="bg-[#F8F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Left Side */}
          <div className="max-w-xl">

            <h1 className="text-[#2B1B12] text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Find Your
              <br />
              Dream Home
            </h1>

            <p className="mt-8 text-lg text-[#5E5147] leading-8">
              Explore our curated selection of exquisite properties
              meticulously tailored to your unique dream home vision.
            </p>

            <button className="mt-12 bg-[#2B1B12] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#3B2619] duration-300">
              Sign up
            </button>

          </div>

          {/* Right Side */}

          <div className="flex justify-center lg:justify-end">

            <img
              src={house}
              alt="Modern House"
              className="w-[500px] md:w-[650px] lg:w-[720px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;