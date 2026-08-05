import location from "../assets/icons/Slocation.png";
import service from "../assets/icons/service.png";
import process from "../assets/icons/document.png";
import support from "../assets/icons/handshake.png";

function Why() {
  const features = [
    {
      icon: location,
      title: "Expert Guidance",
      description:
        "Benefit from our team's seasoned expertise for a smooth buying experience.",
    },
    {
      icon: service,
      title: "Personalized Service",
      description:
        "Our services adapt to your unique needs, making your journey stress-free.",
    },
    {
      icon: process,
      title: "Transparent Process",
      description:
        "Stay informed with our clear and honest approach to buying your home.",
    },
    {
      icon: support,
      title: "Exceptional Support",
      description:
        "Providing peace of mind with our responsive and attentive customer service.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-[#2B1B12]">
            Why Choose Us
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-[#5E5147] text-lg leading-8">
            Elevating Your Home Buying Experience with Expertise, Integrity, <br />
            and Unmatched Personalized Service
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#D9C5B2] rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-[#2B1B12]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[#5E5147] leading-7 font-bold text-1xl">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Why;