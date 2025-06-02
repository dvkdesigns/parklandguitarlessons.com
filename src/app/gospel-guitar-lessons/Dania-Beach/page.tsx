import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Dania Beach FL | Christian Music Classes Near You',
  description: 'Gospel guitar lessons in Dania Beach, FL. Learn praise & worship music, gospel strumming, and Christian songs with a private local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons-dania-beach',
  },
};

export default function GospelGuitarLessonsDaniaBeach() {
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
            "description": "Private gospel guitar lessons in Dania Beach, FL. Learn worship chords, gospel rhythm, and Christian guitar playing from a local instructor.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons-dania-beach",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dania Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Dania Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Dania Beach, FL"
        subtitle="Christian Guitar Instruction for Worship & Praise"
        herocopy1="Looking to learn gospel guitar in Dania Beach? We provide personalized lessons for all ages and skill levels."
        herocopy2="With a focus on faith and music, our local instructor teaches you to play songs used in worship teams, youth bands, and small groups."
        herocopy3="Join virtually or in-person and start learning in a supportive and spiritual setting."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Dania Beach Christian Guitar Lessons</h2>
        <p className="mb-4">Our <strong>gospel guitar program in Dania Beach</strong> helps students grow musically and spiritually. Whether you're new to guitar or looking to deepen your role in worship, we meet you where you are.</p>

        <p className="mb-4">Lessons include instruction on:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Praise & worship strumming techniques</li>
          <li>Common gospel chord progressions and transitions</li>
          <li>How to play by ear using the Nashville Number System</li>
          <li>Building a song list of modern and traditional Christian music</li>
          <li>Confidence and stage readiness for church environments</li>
        </ul>

        <p className="mb-4">Want to explore more? Visit our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar lessons page</a> to learn about our program and other cities served.</p>

        <p className="mb-4">Get started with <a href="/gospel-guitar-lessons" className="text-blue-600 underline">faith-filled guitar lessons in Dania Beach</a> today. We’ll bring the music and the mission together.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Dania Beach</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.1604891700843!2d-80.14557268497231!3d26.05670998338221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ac0586f4cc61%3A0xf7e69d26a38d5464!2sDania%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1716224878791!5m2!1sen!2sus"
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
