import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Margate FL | Private Christian Guitar Teacher',
  description: 'Faith-based gospel guitar lessons in Margate, FL. Learn Christian songs, gospel chords, and worship techniques from a private local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons-margate',
  },
};

export default function GospelGuitarLessonsMargate() {
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
            "description": "Gospel guitar lessons available in Margate, FL. Learn praise and worship guitar with a local Christian instructor. In-home and virtual options.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons-margate",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Margate",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Margate, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Margate, FL"
        subtitle="Learn to Play Worship Music with Confidence"
        herocopy1="Bring your love for worship music to life with personalized gospel guitar instruction right here in Margate."
        herocopy2="From soulful strumming patterns to gospel chord progressions, we’ll guide you through faith-filled music lessons."
        herocopy3="Our lessons are tailored for beginners and church musicians alike — learn in your home or online."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Faith-Based Guitar Lessons in Margate</h2>
        <p className="mb-4">Searching for <strong>gospel guitar lessons near Margate</strong>? We offer one-on-one instruction that nurtures both your musical skills and your spiritual connection through song. Learn at your pace with a local <strong>Christian guitar teacher</strong> who understands gospel music and modern worship needs.</p>

        <p className="mb-4">Our Margate guitar lessons include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Worship-friendly chord voicings and embellishments</li>
          <li>Mastering 12/8 feel and gospel shuffle strumming</li>
          <li>Using the Nashville Number System for easy transposing</li>
          <li>Playing contemporary and classic praise songs</li>
          <li>Confidence in solo or worship team settings</li>
        </ul>

        <p className="mb-4">You can learn more about our full range of offerings on the <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar lessons page</a>, including nearby cities we also serve.</p>

        <p className="mb-4">Take the next step in your musical faith journey — join our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">gospel guitar community</a> today and book your first Margate lesson!</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Margate</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.4145073941554!2d-80.20206478497314!3d26.24748098340301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d908d5d85db66f%3A0x2a0576d1c65b78f1!2sMargate%2C%20FL!5e0!3m2!1sen!2sus!4v1716223911223!5m2!1sen!2sus"
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
