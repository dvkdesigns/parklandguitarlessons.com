import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" text-black pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-xl font-bold text-black mb-2">Parkland Guitar Lessons</h2>
          <p className="text-sm text-orange-600">
            Personalized in-home and virtual guitar instruction tailored to your goals.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-sm uppercase font-semibold mb-3 text-black">Quick Links</h3>
          <ul className="space-y-2 text-sm text-orange-600">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/guitar-chalk" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact + Social */}
        <div>
          <h3 className="text-sm uppercase font-semibold mb-3 text-black">Contact</h3>
          <p className="text-sm mb-2 text-orange-600">Phone: <a href="tel:+19545551234" className="hover:underline">(954) 555-1234</a></p>
          <div className="flex gap-4 text-lg mt-4">
            <Link href="https://www.facebook.com/parklandguitarlessons" target="_blank" aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-400 transition" />
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Parkland Guitar Lessons. All rights reserved.
      </div>
    </footer>
  );
}
