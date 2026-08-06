import testimoniOne from '../assets/images/TestimoniOne.png';
import testimoniTwo from '../assets/images/TestimoniTwo.png';
import testimoniThree from '../assets/images/TestimoniThree.png';
import sarah from '../assets/images/sarah.png';
import michael from '../assets/images/michael.png';
import emily from '../assets/images/emily.png';
import star from '../assets/icons/star-4.5.png';
import Stars from '../assets/icons/star-5.png';
import leftArrow from '../assets/icons/leftOpen.png';
import rightArrow from '../assets/icons/rightopen.png';

function Testmonial() {
  const testimonials = [
    {
      id: 1,
      image: testimoniOne,
      profile: sarah,
      name: 'Sarah Nguyen',
      location: 'San Francisco',
      stars: Stars,
      description: 'Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.',
    },
    {
      id: 2,
      image: testimoniTwo,
      profile: michael,
      name: 'Michael Rodriguez',
      location: 'San Diego',
      stars: star,
      description: 'I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!',
    },
    {
      id: 3,
      image: testimoniThree,
      profile: emily,
      name: 'Emily Johnson',
      location: 'Los Angeles',
      stars: Stars,
      description: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
    },
  ];

  return (
    <section className="bg-[#FEF7F2] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#352520] leading-tight mb-2">
            What People Say <br className="hidden md:block" /> About Dwello
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-[#e4d1c4] rounded-3xl overflow-hidden flex flex-col shadow-sm max-w-[340px]"
            >
              {/* Property Image */}
              <div className="h-48 w-full">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* User Info & Rating Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={testi.profile}
                      alt={testi.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-transparent"
                    />
                    <div>
                      <h3 className="font-bold text-[#352520] text-lg leading-none mb-1">
                        {testi.name}
                      </h3>
                      <p className="text-sm text-[#4a3a35]">
                        {testi.location}
                      </p>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="bg-white px-2.5 py-1.5 rounded-md flex items-center shadow-sm">
                    <img
                      src={testi.stars}
                      alt="Rating stars"
                      className="h-4 object-contain"
                    />
                  </div>
                </div>

                {/* Review Description */}
                <p className="text-[#352520] text-[15px] leading-relaxed">
                  {testi.description}
                </p>
              </div>
            </div>
          ))}
     
        </div>

        <div className="flex justify-center items-center gap-4 pt-9">
          <button className="w-12 h-12 rounded-full bg-[#2B1B12] flex items-center justify-center hover:scale-90 transition-colors">
            <img src={leftArrow} alt="Previous" className="w-5 h-5 object-contain" />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#2B1B12] flex items-center justify-center hover:scale-90 transition-colors">
            <img src={rightArrow} alt="Next" className="w-5 h-5 object-contain" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testmonial;