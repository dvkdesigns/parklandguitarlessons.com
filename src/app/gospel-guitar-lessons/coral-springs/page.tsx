import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Coral Springs FL | Worship Guitar Teacher',
  description: 'Gospel guitar lessons in Coral Springs with a faith-first approach. Learn praise & worship guitar, gospel chords, and more from a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons-coral-springs',
  },
};

export default function GospelGuitarLessonsCoralSprings() {
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
            "description": "Offering gospel guitar lessons in Coral Springs, FL. Focused on Christian songs, worship strumming, and gospel progressions for all ages.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons-coral-springs",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coral Springs",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Coral Springs, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Coral Springs, FL"
        subtitle="Play Your Faith Out Loud"
        herocopy1="Looking for gospel guitar classes in Coral Springs? We help you bring your musical calling to life."
        herocopy2="Get personalized instruction in praise & worship guitar styles, whether you’re new to music or already leading at church."
        herocopy3="Learn at home or online with a local Christian guitar instructor who understands your goals."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Coral Springs-Based Christian Guitar Lessons</h2>
        <p className="mb-4">If you're searching for <strong>faith-based guitar lessons</strong> in the Coral Springs area, you're in the right place. Our <strong>gospel guitar teacher</strong> helps students build their skills while staying rooted in worship.</p>

        <p className="mb-4">In-home and virtual sessions are available, with flexible scheduling for youth, teens, and adults. Learn:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Gospel-style chord progressions and embellishments</li>
          <li>Strumming patterns in 12/8, shuffles, and swing</li>
          <li>The Nashville Number System for transposing and arranging</li>
          <li>How to accompany vocals and lead a worship set</li>
          <li>Popular Christian and gospel songs for solo or group playing</li>
        </ul>

        <p className="mb-4">See our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar page</a> for more about our approach and additional cities we serve.</p>

        <p className="mb-4">Serving Coral Springs and neighboring communities, our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">gospel guitar lessons</a> make faith and music come together beautifully. Book a trial lesson today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Coral Springs</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.691501418875!2d-80.27673268497332!3d26.27119298340539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d909e2e8c1f0cd%3A0xb2d7c78f8935f71!2sCoral%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1716223850550!5m2!1sen!2sus"
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
