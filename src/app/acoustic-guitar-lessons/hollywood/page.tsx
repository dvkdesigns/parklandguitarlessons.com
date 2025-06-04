import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons in Hollywood, FL | Parkland Guitar Lessons',
  description: 'Personalized acoustic guitar lessons in Hollywood, FL. Tailored instruction for all skill levels. Schedule your session today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons/hollywood',
  },
};

export default function AcousticGuitarLessonsHollywood() {
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
            "description": "Customized acoustic guitar lessons in Hollywood, FL. Expert instructors provide tailored guidance for beginners through advanced musicians, in-home or online.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons-hollywood",
            "image": "https://www.parklandguitarlessons.com/images/acoustic-hero.webp",
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
        title="Acoustic Guitar Lessons in Hollywood, FL"
        subtitle="Achieve Musical Excellence"
        herocopy1="Enhance your acoustic guitar playing with personalized lessons in Hollywood."
        herocopy2="Our professional instructors offer customized guidance to suit your musical interests and skill level."
        herocopy3="Flexible scheduling for convenient in-home or online lessons tailored to your specific goals."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Acoustic Guitar Instruction in Hollywood</h2>
        <p className="mb-4">If you're in Hollywood, FL, our tailored acoustic guitar lessons can help you master the instrument efficiently. Our experienced instructors are dedicated to providing individualized support, helping you achieve your musical ambitions.</p>

        <p className="mb-4">Lesson highlights include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Chord mastery and rhythmic skills</li>
          <li>Advanced fingerstyle and picking techniques</li>
          <li>Personalized song instruction matched to your preferences</li>
          <li>Clear and practical music theory</li>
          <li>Building confidence for performances and stage presence</li>
        </ul>

        <p className="mb-4">For more information, visit our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">main acoustic guitar lessons page</a>, featuring detailed insights and additional locations served.</p>

        <p className="mb-4">Ready to play? Explore <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">acoustic guitar lessons near Hollywood</a> and schedule your first lesson today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Acoustic Guitar Lessons in Hollywood</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.0158387391297!2d-80.15199268497563!3d26.011201283433463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9aa3d9bdcd4db%3A0xdc048eabb49bf218!2sHollywood%2C%20FL!5e0!3m2!1sen!2sus!4v1716224179852!5m2!1sen!2sus"
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
