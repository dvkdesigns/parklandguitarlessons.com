import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Hallandale Beach FL | Faith-Based Guitar Instructor',
  description: 'Private gospel guitar lessons in Hallandale Beach, FL. Learn worship guitar, gospel rhythms, and Christian songs in-home or online with a local teacher.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons/hallandale-beach',
  },
};

export default function GospelGuitarLessonsHallandaleBeach() {
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
            "description": "Faith-based gospel guitar instruction in Hallandale Beach, FL. Learn Christian music, gospel strumming, and praise progressions with private or virtual lessons.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons/hallandale-beach",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hallandale Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Hallandale Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Hallandale Beach, FL"
        subtitle="Christian Guitar Classes That Inspire"
        herocopy1="Ready to grow your musical gift in a spiritual way? Our gospel guitar lessons in Hallandale Beach are rooted in worship and designed for all ages."
        herocopy2="Learn to play Christian music, master gospel rhythms, and gain confidence in a faith-filled learning environment."
        herocopy3="Lessons are available in-home or virtually with a local Christian instructor."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Hallandale Beach Praise Guitar Lessons</h2>
        <p className="mb-4">We offer <strong>gospel guitar lessons in Hallandale Beach</strong> tailored to individuals who want to worship through music. Whether you're new to the guitar or already leading worship, our personalized lessons meet you where you are in your journey.</p>

        <p className="mb-4">Lessons include topics such as:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Gospel-style chord transitions and voicings</li>
          <li>Strumming in 12/8 time and other praise rhythms</li>
          <li>Nashville Number System for live settings</li>
          <li>Building a personal worship song setlist</li>
          <li>Playing with expression and spiritual intention</li>
        </ul>

        <p className="mb-4">Visit our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar page</a> for full lesson details and coverage areas nearby.</p>

        <p className="mb-4">Book a <a href="/gospel-guitar-lessons" className="text-blue-600 underline">trial gospel guitar lesson in Hallandale Beach</a> today and start learning in a way that connects music and faith.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Hallandale Beach</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.872928439402!2d-80.14854638497174!3d25.985609683376403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ac7874f40c05%3A0x90e5e10b69f31d0d!2sHallandale%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1716224974735!5m2!1sen!2sus"
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
