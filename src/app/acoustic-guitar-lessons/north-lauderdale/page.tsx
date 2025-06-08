import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons in North Lauderdale, FL | Parkland Guitar Lessons',
  description: 'Tailored acoustic guitar lessons in North Lauderdale, FL. Expert instruction for all ages and skill levels. Book your first lesson today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons/north-lauderdale',
  },
};

export default function AcousticGuitarLessonsNorthLauderdale() {
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
            "description": "Personalized acoustic guitar instruction in North Lauderdale, FL. Skilled instructors offer custom-tailored lessons for beginners through advanced musicians, available in-home or online.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons/north-lauderdale-fl",
            "image": "https://www.parklandguitarlessons.com/images/acoustic-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "North Lauderdale",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "North Lauderdale, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Acoustic Guitar Lessons in North Lauderdale, FL"
        subtitle="Personalized Lessons That Fit You"
        herocopy1="Build your acoustic guitar skills with lessons designed just for you in North Lauderdale."
        herocopy2="Our instructors customize each session to match your goals, whether you're starting out or leveling up."
        herocopy3="Enjoy flexible scheduling for in-home or virtual lessons that fit your lifestyle."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Acoustic Guitar Lessons in North Lauderdale</h2>
        <p className="mb-4">Live in North Lauderdale, FL? Our one-on-one acoustic guitar lessons help you make real progress at your pace. Whether you’re new to the instrument or brushing up on technique, we’ve got you covered.</p>

        <p className="mb-4">Our lessons focus on:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Essential chord transitions and rhythm work</li>
          <li>Fingerstyle and lead guitar development</li>
          <li>Practicing real songs you actually want to play</li>
          <li>Clear, simple theory that makes sense</li>
          <li>Getting comfortable performing solo or in a group</li>
        </ul>

        <p className="mb-4">For more info on our approach and offerings, check out our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">main acoustic guitar lessons page</a>.</p>

        <p className="mb-4">Take the first step today. Explore <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">acoustic guitar lessons in North Lauderdale</a> and schedule your trial session.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Acoustic Guitar Lessons in North Lauderdale</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.545626332951!2d-80.22512278497456!3d26.216551983422537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d902c27e24a8c1%3A0xf1c404af509183ac!2sNorth%20Lauderdale%2C%20FL!5e0!3m2!1sen!2sus!4v1716224179852!5m2!1sen!2sus"
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
