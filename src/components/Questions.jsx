import verify from '../assets/icons/verify.png';
import email from '../assets/icons/email.png';

function Questions() {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#352520] leading-tight mb-2">
          Do You Have Any Questions? <br className="hidden md:block" /> Get Help From Us
        </h2>
      </div>

      <div className='text-[#543E32] flex justify-center gap-1 font-bold mt-8'>
        <img src={verify} />
        <p>Chat live with our support team</p>
        <img src={verify} className='ml-15' />
        <p>Browse our FAQ</p>
      </div>
      <div>

        <div className='flex items-center justify-center mt-10'>
          <form className="flex items-center gap-3">
            <div className="relative flex items-center w-[420px] h-[48px] bg-[#E6D7CE] rounded-xl shadow-sm px-5">
              <img src={email}
                className="w-5 h-5 mr-3 shrink-0 brightness-0 saturate-100 opacity-85"
              />

              <input type="email" placeholder='Enter your email address...'
                className=' w-full bg-transparent text-[#5C4A42] placeholder-[#5C4A42] text-base font-medium outline-none' />
            </div>

            <button
              className='h-[48px] px-8 py-3 bg-[#2A1D15] hover:bg-[#3D2C22] text-white font-medium text-base rounded-xl transition-colors shadow-sm'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Questions;