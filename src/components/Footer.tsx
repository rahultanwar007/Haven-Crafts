import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-200 to-secondary text-gray-300 py-10 border-t border-gray-700">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">HavenCraft</h2>
          <p className="text-dark text-sm leading-relaxed">
            Crafting digital experiences that blend creativity, innovation, and
            reliability. We aim to bring your vision to life with modern
            solutions tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-accent text-dark transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-accent text-dark transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-accent text-dark transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-accent text-dark transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">
            Stay Connected
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition"
            >
              <FaFacebookF className="text-primary" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition"
            >
              <FaInstagram className="text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition"
            >
              <FaLinkedinIn className="text-primary" />
            </a>
          </div>
          <p className="text-sm text-dark flex items-center gap-2">
            <IoIosMail className="text-primary text-lg" />
            {process.env.NEXT_PUBLIC_EMAIL}
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-[90%] mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-sm text-primary">
        © {new Date().getFullYear()} HavenCrafts. All rights reserved.
      </div>
    </footer>
  );
}
