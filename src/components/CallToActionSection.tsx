import Link from 'next/link';
import ButtonLink from './ButtonLink';

export default function CallToActionSection() {
  return (
    <section className="bg-black text-white py-16 text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
      <p className="mb-6 text-lg">Book your first lesson now and see how fun learning guitar can be.</p>
      <ButtonLink href="/contact" label="Get Started" size="lg" />
    </section>
  );
}
