import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Deerfield Beach FL | Worship Music Classes',
  description: 'Faith-based gospel guitar lessons in Deerfield Beach, FL. Learn praise & worship guitar with in-home or online instruction from a Christian teacher.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons/deerfield-beach',
  },
};

export default function GospelGuitarLessonsDeerfieldBeach() {
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
            "description": "Offering gospel guitar lessons in Deerfield Beach, FL. Learn praise & worship music from a local Christian instructor with private or online sessions.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons/deerfield-beach",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Deerfield Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Deerfield Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Deerfield Beach, FL"
        subtitle="Praise Guitar Training for All Ages"
        herocopy1="Explore the joy of worship through gospel guitar lessons in Deerfield Beach. We bring faith and music together with private, personalized lessons."
        herocopy2="Learn gospel strumming patterns, Christian chord progressions, and play songs used in praise teams around the country."
        herocopy3="Instruction is available online or in-home — perfect for students of all levels."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Deerfield Beach Christian Guitar Classes</h2>
        <p className="mb-4">Our <strong>gospel guitar lessons in Deerfield Beach</strong> offer a supportive and spiritual way to grow your skills. Whether you want to play in a worship group or simply strum with soul, our local instructor is here to guide you.</p>

        <p className="mb-4">Each lesson includes:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Worship-based strumming and timing techniques</li>
          <li>Common gospel progressions and walk-ups</li>
          <li>Nashville Number System and ear training basics</li>
          <li>Song-based learning with gospel and praise repertoire</li>
          <li>Confidence-building practice in solo or group contexts</li>
        </ul>

        <p className="mb-4">Want to learn more? Visit the <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar page</a> for a complete overview and additional service areas.</p>

        <p className="mb-4">Begin your <a href="/gospel-guitar-lessons" className="text-blue-600 underline">faith-driven music journey</a> today with lessons tailored to Deerfield Beach students.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Deerfield Beach</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.067408998748!2d-80.11294438497287!3d26.31175598340625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9027c4c1c60fb%3A0xdf2c81c6efdb0bce!2sDeerfield%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1716224402610!5m2!1sen!2sus"
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