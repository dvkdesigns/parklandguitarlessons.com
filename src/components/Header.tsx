import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import ButtonLink from './ButtonLink';

export default function Header() {
  return (
    <header className="text-white">
      {/* TOP PROMO BAR */}
      <div className="bg-black text-xs text-center h-8 flex items-center justify-center px-4">
        10% Off Weekday Classes: 10am-3pm Mon-Fri <ButtonLink href="/contact" label="Book a Free Lesson" size="sm" />
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
            <span className="hidden sm:inline text-2xl font-bold">Call/Text: <a href="tel:+19545551234" className="hover:underline">(954) 249-8837</a></span>
            <div className="flex gap-3 text-lg">
              <Link href="https://www.facebook.com/parklandguitarlessons" target="_blank" aria-label="Facebook">
                <FaFacebookF className="hover:text-blue-400 transition" />
              </Link>
              {/*<Link href="https://www.instagram.com/parklandguitarlessons" target="_blank" aria-label="Instagram">
                <FaInstagram className="hover:text-pink-400 transition" />
              </Link>*/}
            </div>
          </div>
        </div>

        {/* NAV LINKS 
        <nav className="mt-4 flex justify-center gap-8 text-sm">
          <Link href="/guitar-chalk" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>*/}
      </div>
    </header>
  );
}
