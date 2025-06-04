import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Hollywood FL | Christian Guitar Teacher Near You',
  description: 'Faith-based gospel guitar lessons in Hollywood, FL. Learn worship guitar, gospel strumming, and Christian music from a local private instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons/hollywood',
  },
};

export default function GospelGuitarLessonsHollywood() {
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
            "description": "Private gospel guitar lessons in Hollywood, FL. Learn praise & worship music, gospel chords, and spiritual rhythm in-home or online.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons/hollywood",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hollywood",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Hollywood, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Hollywood, FL"
        subtitle="Faith-Based Music Instruction for Worship and Praise"
        herocopy1="If you're in Hollywood, FL and looking to learn gospel guitar, you're in the right place. We offer structured, uplifting lessons for all ages."
        herocopy2="From beginner Christian guitar training to advanced praise team prep, we teach gospel chords, worship rhythms, and songs that inspire."
        herocopy3="Book virtual or in-home sessions with a local faith-based instructor dedicated to helping you grow in music and purpose."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Gospel Guitar Lessons in Hollywood</h2>
        <p className="mb-4">We specialize in <strong>Christian guitar lessons in Hollywood, FL</strong> for students of all backgrounds. Whether you're new to the instrument or already playing at your local church, our personalized lessons help you elevate your sound.</p>

        <p className="mb-4">Each session may include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Learning gospel chord shapes and embellishments</li>
          <li>Strumming patterns in 12/8 and swing feel</li>
          <li>Understanding the Nashville Number System</li>
          <li>Playing along with worship songs and team dynamics</li>
          <li>Fretboard knowledge rooted in faith and creativity</li>
        </ul>

        <p className="mb-4">You can explore more about our lesson options and areas served on the <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar lessons page</a>.</p>

        <p className="mb-4">Begin your journey in faith-based music today. Learn more about <a href="/gospel-guitar-lessons" className="text-blue-600 underline">gospel guitar instruction near Hollywood</a>.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Hollywood</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.3460957867717!2d-80.20101668497245!3d26.160194983389693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ac317ed14755%3A0x2db8ea8bb86e10c9!2sHollywood%2C%20FL!5e0!3m2!1sen!2sus!4v1716224725379!5m2!1sen!2sus"
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
