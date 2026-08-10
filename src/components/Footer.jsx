import logo from "../assets/images/logo.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook.png";

function Footer() {
  return (
    <footer className="w-full bg-[#DDC7BB] text-[#4B362D]">
      <div className="max-w-[1450px] mx-auto px-8 md:px-12 lg:px-16 py-[90px]">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-x-16">

          {/* ================= LOGO ================= */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Dwello"
              className="w-[110px] h-auto object-contain mb-8"
            />

            <p className="text-[20px] leading-[1.25] font-semibold max-w-[260px]">
              Bringing you closer to
              <br />
              your dream home, one
              <br />
              click at a time.
            </p>
          </div>

          {/* ================= ABOUT ================= */}
          <div>
            <h2 className="text-[25px] font-bold mb-9">
              About
            </h2>

            <ul className="space-y-8">
              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Our Story
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Our Team
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* ================= SUPPORT ================= */}
          <div>
            <h2 className="text-[25px] font-bold mb-9">
              Support
            </h2>

            <ul className="space-y-8">
              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* ================= FIND US ================= */}
          <div>
            <h2 className="text-[25px] font-bold mb-9">
              Find Us
            </h2>

            <ul className="space-y-8">
              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Events
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Locations
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold hover:opacity-70 transition"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* ================= SOCIAL ================= */}
          <div>
            <h2 className="text-[25px] font-bold mb-9">
              Our Social
            </h2>

            <div className="space-y-7">

              {/* Instagram */}
              <a
                href="#"
                className="flex items-center gap-6 group"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-[30px] h-[30px] object-contain"
                />

                <span className="text-[20px] font-semibold group-hover:opacity-70 transition">
                  Instagram
                </span>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="flex items-center gap-6 group"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-[30px] h-[30px] object-contain"
                />

                <span className="text-[20px] font-semibold group-hover:opacity-70 transition">
                  Facebook
                </span>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="flex items-center gap-6 group"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-[30px] h-[30px] object-contain"
                />

                <span className="text-[20px] font-semibold group-hover:opacity-70 transition">
                  Twitter (X)
                </span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;