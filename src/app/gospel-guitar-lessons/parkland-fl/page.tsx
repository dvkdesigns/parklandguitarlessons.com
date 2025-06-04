import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Parkland FL | Private Christian Guitar Classes',
  description: 'Faith-based gospel guitar lessons in Parkland, FL. Learn praise & worship songs, gospel chord progressions, and more with a private local teacher.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons/parkland',
  },
};

export default function GospelGuitarLessonsParkland() {
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
            "description": "Private gospel guitar lessons based in Parkland, FL. Specializing in praise and worship guitar, Christian songs, and beginner-friendly faith-based instruction.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons/parkland",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Parkland",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Parkland, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Parkland, FL"
        subtitle="Learn to Worship with Your Guitar"
        herocopy1="Discover the spirit of gospel music through private, one-on-one guitar lessons designed to grow both your skills and your faith."
        herocopy2="Parkland locals now have access to faith-based guitar instruction focused on worship styles, gospel strumming patterns, and chord progressions."
        herocopy3="From absolute beginners to active church musicians, we help you connect musically and spiritually — right from your home or online."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Gospel Guitar Lessons in Parkland?</h2>
        <p className="mb-4">At Parkland Guitar Lessons, we specialize in <strong>Christian guitar instruction</strong> rooted in gospel tradition. Whether you want to lead worship, play in a church band, or just strum along at home, our <strong>Parkland gospel guitar teacher</strong> brings music and message together.</p>

        <p className="mb-4">Lessons are offered in-home or virtually across the Parkland area and include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Classic gospel chord progressions and walk-ups</li>
          <li>Rhythmic patterns like the 12/8 shuffle and soulful strumming</li>
          <li>Hands-on training in the Nashville Number System</li>
          <li>Repertoire building with contemporary and traditional worship songs</li>
          <li>Playing with feel, intention, and spiritual connection</li>
        </ul>

        <p className="mb-4">Want to explore more about our overall program? Visit our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar lessons page</a> for full details and options for other nearby cities.</p>

        <p className="mb-4">Parkland students of all ages are welcome — whether you're new to guitar or seeking to refine your role in the praise team. Start your journey today with <a href="/gospel-guitar-lessons" className="text-blue-600 underline">faith-filled guitar training</a> that fits your schedule and goals.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near You</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.772657376721!2d-80.22383108497273!3d26.258251183396926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9098122cfd35f%3A0x73cfc6f4a8e6e0a2!2sParkland%2C%20FL!5e0!3m2!1sen!2sus!4v1716223544321!5m2!1sen!2sus"
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