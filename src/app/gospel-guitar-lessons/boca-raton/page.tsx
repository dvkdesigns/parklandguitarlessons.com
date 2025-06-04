import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Boca Raton FL | Worship Guitar Classes',
  description: 'Learn gospel guitar in Boca Raton, FL with personalized Christian guitar lessons. In-home or online worship music training available now.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons/boca-raton',
  },
};

export default function GospelGuitarLessonsBocaRaton() {
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
            "description": "Gospel guitar lessons now available in Boca Raton, FL. Learn praise & worship guitar with a local Christian teacher. In-home and virtual lessons offered.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons/boca-raton",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Boca Raton",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Boca Raton, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Boca Raton, FL"
        subtitle="Faith-Inspired Music Lessons for All Ages"
        herocopy1="Now serving Boca Raton, our gospel guitar lessons help you connect spiritually while building your musical foundation."
        herocopy2="From classic hymns to modern worship, we teach gospel chords, rhythms, and songs in a supportive, Christ-centered setting."
        herocopy3="Take lessons from home or online with a Christian guitar teacher who tailors your learning to your goals."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Christian Guitar Lessons in Boca Raton</h2>
        <p className="mb-4">If you're located in or near Boca Raton, FL and want to grow your musical gifts in a spiritual way, our <strong>faith-based guitar lessons</strong> are perfect for you. We offer personalized instruction focused on <strong>praise and worship guitar</strong>, designed to meet students where they are — spiritually and musically.</p>

        <p className="mb-4">In-home or virtual lessons include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Gospel strumming and 12/8 feel rhythms</li>
          <li>Nashville Number System basics</li>
          <li>Popular Christian songs & worship arrangements</li>
          <li>Playing in a church band setting</li>
          <li>Fretboard understanding through a gospel lens</li>
        </ul>

        <p className="mb-4">Want to see what else we offer? Visit our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar page</a> for our approach and list of nearby locations served.</p>

        <p className="mb-4">Take your next step in music and worship. Explore <a href="/gospel-guitar-lessons" className="text-blue-600 underline">gospel guitar lessons near you</a> and schedule a free trial in Boca Raton today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Boca Raton</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.866144821427!2d-80.12278468497404!3d26.368306983412167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d2e46c0fc9f%3A0xcdf64ff3cbec4e87!2sBoca%20Raton%2C%20FL!5e0!3m2!1sen!2sus!4v1716224179852!5m2!1sen!2sus"
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
