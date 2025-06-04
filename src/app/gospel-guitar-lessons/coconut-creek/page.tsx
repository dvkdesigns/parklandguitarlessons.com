import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Coconut Creek FL | Christian Guitar Instructor',
  description: 'Looking for gospel guitar lessons in Coconut Creek? Learn praise & worship guitar from a local instructor with faith-based training. Virtual & in-home available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons/coconut-creek',
  },
};

export default function GospelGuitarLessonsCoconutCreek() {
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
            "description": "Private gospel guitar lessons available in Coconut Creek, FL. Learn worship songs, gospel rhythm, and faith-driven techniques from a local teacher.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons/coconut-creek",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coconut Creek",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Coconut Creek, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Coconut Creek, FL"
        subtitle="Faith-Based Music Instruction for All Ages"
        herocopy1="Whether you’re just starting or want to join your church’s praise team, we offer gospel guitar lessons right here in Coconut Creek."
        herocopy2="Build your foundation in worship music through strumming patterns, chord progressions, and classic Christian songs."
        herocopy3="You’ll receive personalized instruction with flexible in-home or virtual lesson options."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Worship Guitar Classes in Coconut Creek</h2>
        <p className="mb-4">We provide <strong>Christian guitar lessons</strong> for students of all ages in Coconut Creek, FL. From gospel beginners to players joining praise bands, we help you gain confidence with every chord and strum. </p>

        <p className="mb-4">Lesson topics include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Playing in a 12/8 feel and gospel shuffle rhythm</li>
          <li>Gospel progressions, walk-ups, and embellishments</li>
          <li>Worship-focused repertoire building</li>
          <li>Using the Nashville Number System for live settings</li>
          <li>Guitar tone and feel for faith-based music</li>
        </ul>

        <p className="mb-4">Check out our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar page</a> for more info on lesson structure and other locations we cover nearby.</p>

        <p className="mb-4">Start your gospel guitar journey today. Book <a href="/gospel-guitar-lessons" className="text-blue-600 underline">private lessons in Coconut Creek</a> and grow your worship gift one chord at a time.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Coconut Creek</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.030535789208!2d-80.18498738497288!3d26.18771698339807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d908bda84a9d65%3A0xd6346f54cdbf0f77!2sCoconut%20Creek%2C%20FL!5e0!3m2!1sen!2sus!4v1716224270322!5m2!1sen!2sus"
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
