import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Tamarac FL | Worship Guitar Instructor',
  description: 'Learn gospel guitar in Tamarac, FL with a local instructor. Private praise & worship guitar classes for all ages. In-home or virtual available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons/tamarac',
  },
};

export default function GospelGuitarLessonsTamarac() {
  return (
    <>
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Parkland Guitar Lessons",
            "description": "Offering gospel guitar lessons in Tamarac, FL. Learn praise and worship guitar with a Christian instructor. In-home and online sessions available.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons/tamarac",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tamarac",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Tamarac, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Tamarac, FL"
        subtitle="Faith-Focused Music Instruction in Your Area"
        herocopy1="Bring your worship music to life with local gospel guitar lessons in Tamarac, tailored for beginners and aspiring church musicians."
        herocopy2="We teach Christian strumming patterns, gospel chords, and faith-based songs to help you grow musically and spiritually."
        herocopy3="Lessons are personalized and available in-home or virtually — perfect for youth, teens, and adults."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Worship Guitar Lessons in Tamarac</h2>
        <p className="mb-4">Our <strong>Christian guitar lessons</strong> in Tamarac offer one-on-one support from an experienced instructor who understands worship music. Whether you’re new to guitar or preparing for praise team leadership, our <strong>gospel guitar teacher</strong> will help you grow in both skill and confidence.</p>

        <p className="mb-4">Learn key gospel and worship techniques, including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Strumming patterns used in gospel and praise music</li>
          <li>Gospel progressions with embellishments and fills</li>
          <li>Understanding and using the Nashville Number System</li>
          <li>Classic and modern Christian songs</li>
          <li>Preparing to play with a church band or solo</li>
        </ul>

        <p className="mb-4">Want to know more about our program? Visit our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar lessons page</a> for an overview of our curriculum and nearby cities we serve.</p>

        <p className="mb-4">Book a <a href="/gospel-guitar-lessons" className="text-blue-600 underline">Tamarac gospel guitar lesson</a> today and discover how faith and music come together beautifully — right from your home.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Tamarac</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.160246232366!2d-80.25084008497293!3d26.200928983399113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d908c3a3e73135%3A0x6527c9d4170307a3!2sTamarac%2C%20FL!5e0!3m2!1sen!2sus!4v1716224011141!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
