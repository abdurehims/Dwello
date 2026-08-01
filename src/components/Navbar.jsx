import logo from "../assets/images/logo.png";
import search from "../assets/images/search.png";
import user from "../assets/images/user.png";

function Navbar() {
  return (
    <header className="w-full bg-[#F8F1EA]">
      <nav className="max-w-7xl mx-auto h-24 flex items-center justify-between px-8">

        {/* logoIcon */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-28 object-contain cursor-pointer"
          />
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-16 text-[#2B1B12] font-semibold text-lg">
          <li className="cursor-pointer hover:text-[#6B4A32] transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-[#6B4A32] transition">
            Service
          </li>

          <li className="cursor-pointer hover:text-[#6B4A32] transition">
            Agents
          </li>

          <li className="cursor-pointer hover:text-[#6B4A32] transition">
            Contact
          </li>
        </ul>

       
        <div className="flex items-center gap-7">

          <img
            src={search}
            alt=""
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />

          <img
            src={user}
            alt=""
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />

          <button className="bg-[#2B1B12] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#3C281C] transition">
            Sign up
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;