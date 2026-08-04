import house from "../assets/images/luxury_and_rich_home_exterior_side_view.png";

function Houses() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              src={house}
              alt="Luxury House"
              className="w-full rounded-3xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">

            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#2B1B12] leading-tight">
              We Help You To Find
              <br />
              Your Dream Home
            </h2>

            <p className="mt-8 text-lg text-[#5E5147] leading-8">
              From cozy cottages to luxurious estates, our dedicated team
              guides you through every step of the journey, ensuring your
              dream home becomes a reality.
            </p>

            {/* Statistics */}
            <div className="flex justify-between mt-12">

              <div>
                <h3 className="text-5xl font-bold text-[#2B1B12]">
                  8K+
                </h3>
                <p className="mt-2 text-lg text-[#5E5147]">
                  Houses Available
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-[#2B1B12]">
                  6K+
                </h3>
                <p className="mt-2 text-lg text-[#5E5147]">
                  Houses Sold
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-[#2B1B12]">
                  2K+
                </h3>
                <p className="mt-2 text-lg text-[#5E5147]">
                  Trusted Agents
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Houses;