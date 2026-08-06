import houseA from '../assets/images/Group11A.png';
import houseB from '../assets/images/Group11B.png';
import houseC from '../assets/images/Group11C.png';
import location from "../assets/icons/location.png";
import rooms from '../assets/icons/rooms.png';
import length from '../assets/icons/size.png';

function PropertyCard() {
  const characters = [
    {
      id: 1,
      image: houseA,
      location: "San Francisco, California",
      rooms: 4,
      size: '3,500',
      price: '$2,500,000'
    },
    {
      id: 2,
      image: houseB,
      location: "Beverly Hills, California",
      rooms: 3,
      size: '1,500',
      price: '$850,000'
    },
    {
      id: 3,
      image: houseC,
      location: "Palo Alto, California",
      rooms: 6,
      size: '4.000',
      price: '$3,700,000'
    }
  ]
  return (
    <section>
      <div>
        <h1 className='pt-13 font-bold text-center font-sans text-4xl mt-0'>Our Popular Residences</h1>
        <div className='flex gap-10   flex-wrap justify-center p-8 bg-white min-h-screen font-sans'>
          {characters.map((Character) => (
            <div key={Character.id} className='w-[310px] h-[450px] rounded-2xl overflow-hidden bg-[#e3d2c4]'>
              <div>
                <img src={Character.image} className='w-cover h-[50%]' />
              </div>
              <div className='flex p-3'>
                <img src={location} />
                <h1 className='pl-2 font-bold'>{Character.location}</h1>
              </div>
              <div className='flex gap-1 p-3'>
                <img src={rooms} />
                <p>{Character.rooms} Rooms</p>
                <img src={length} className='pl-9' />
                <p>{Character.size} sq ft</p>
              </div>
              <div className='flex  items-center mt-3'>
                <button className='bg-[#2B1B12] text-white py-2 px-5 rounded-[9px] ml-4 text-sm'> Sign Up</button>
                <h3 className='pl-20 text-[#4F3527] font-bold text-[20px]'>{Character.price}</h3>
              </div>
              <div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PropertyCard;