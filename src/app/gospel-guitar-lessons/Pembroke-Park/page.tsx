import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Pembroke Park FL | Christian Guitar Instructor Near You',
  description: 'Private gospel guitar lessons in Pembroke Park, FL. Learn Christian songs, gospel rhythms, and worship music in-home or online with a local teacher.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons-pembroke-park',
  },
};

export default function GospelGuitarLessonsPembrokePark() {
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
            "description": "Faith-based gospel guitar instruction in Pembroke Park, FL. Learn worship music, gospel chords, and praise progressions from a local instructor.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons-pembroke-park",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pembroke Park",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Pembroke Park, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Pembroke Park, FL"
        subtitle="Faith-Focused Guitar Classes for Worship Music"
        herocopy1="Looking to learn gospel guitar in Pembroke Park? We help students of all ages connect with their faith through music."
        herocopy2="Lessons cover gospel chords, praise rhythms, and Christian songs played in church bands and youth groups."
        herocopy3="Choose in-home or virtual sessions with a local instructor who cares about your musical and spiritual growth."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Christian Guitar Instruction in Pembroke Park</h2>
        <p className="mb-4">Our <strong>gospel guitar lessons in Pembroke Park</strong> are built for beginners and experienced players alike. Whether you want to play at home or prepare for a worship team, our structured and spiritual curriculum will help guide your journey.</p>

        <p className="mb-4">Students will explore:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Gospel-style strumming and dynamics</li>
          <li>Christian chord progressions with embellishments</li>
          <li>Using the Nashville Number System in worship settings</li>
          <li>Popular gospel and contemporary praise songs</li>
          <li>How to prepare for church performance or home worship</li>
        </ul>

        <p className="mb-4">Visit our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar page</a> for more about our services and nearby locations.</p>

        <p className="mb-4">Ready to begin? Join our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">gospel guitar community in Pembroke Park</a> and start learning with purpose today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Pembroke Park</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.8757532217346!2d-80.17728708497169!3d25.985253983376125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ac758666eed1%3A0x55fd8d13fdce04df!2sPembroke%20Park%2C%20FL!5e0!3m2!1sen!2sus!4v1716225080321!5m2!1sen!2sus"
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