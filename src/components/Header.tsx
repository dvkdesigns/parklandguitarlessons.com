import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import ButtonLink from "./ButtonLink";

export default function Header() {
  return (
    <header className="text-white">
      {/* TOP PROMO BAR */}
      <div className="bg-black text-xs text-center h-8 flex items-center justify-center px-4">
        Classes Filling Fast! Get started today!{" "}
        <ButtonLink
          href="/booking-and-availability"
          label="Book a Lesson"
          size="sm"
        />
      </div>

      {/* MAIN NAV BAR */}
      <div className=" py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* LEFT: Logo */}
          <span className="text-2xl md:text-4xl font-bold text-orange-600">
            <Link href="/">Parkland Guitar Lessons</Link>
          </span>

          {/* RIGHT: Phone + Social */}
          <div className="flex items-center gap-6 text-sm text-black">
            <span className="hidden sm:inline text-2xl font-bold">
              Call/Text:{" "}
              <a href="tel:+19545551234" className="hover:underline">
                (954) 249-8837
              </a>
            </span>
            <div className="flex gap-3 text-lg">
              <Link
                href="https://www.facebook.com/parklandguitarlessons"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebookF className="hover:text-blue-400 transition" />
              </Link>
              {/*<Link href="https://www.instagram.com/parklandguitarlessons" target="_blank" aria-label="Instagram">
                <FaInstagram className="hover:text-pink-400 transition" />
              </Link>*/}
            </div>
          </div>
        </div>

        <nav className="mt-4 flex justify-center gap-8 text-sm text-black">
          {/* <Link href="/booking-and-availability" className="hover:underline">
            Booking & Availability
          </Link> */}

          <details className="relative group">
            <summary className="cursor-pointer hover:underline list-none">
              Guitar Tools
            </summary>
            <div className="absolute bg-white border rounded-md shadow-md mt-2 p-2 hidden group-open:block z-50">
              <Link
                href="/online-guitar-tuner"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Tuner
              </Link>
              <Link
                href="/online-metronome"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Metronome
              </Link>
              <Link
                href="/online-guitar-chord-library"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Chord Library
              </Link>
            </div>
          </details>

          <Link href="/guitar-chalk" className="hover:underline">
            Guitar Chalk
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/about-us" className="hover:underline">
            About Us
          </Link>
          {/* <Link href="/student-portal" className="hover:underline">
            Student Portal
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
