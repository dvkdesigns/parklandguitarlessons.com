import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons in Margate, FL | Parkland Guitar Lessons',
  description: 'Tailored acoustic guitar lessons in Margate, FL. Expert guidance for all ages and skill levels. Book your first lesson today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons/margate',
  },
};

export default function AcousticGuitarLessonsMargate() {
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
            "description": "Personalized acoustic guitar instruction in Margate, FL. Skilled instructors offer custom-tailored lessons for beginners through advanced musicians, available in-home or online.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons-margate-fl",
            "image": "https://www.parklandguitarlessons.com/images/acoustic-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Margate",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Margate, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Acoustic Guitar Lessons in Margate, FL"
        subtitle="Start Your Musical Journey"
        herocopy1="Boost your guitar skills with custom acoustic lessons in Margate."
        herocopy2="Our experienced teachers design lessons tailored to your musical preferences and learning style."
        herocopy3="Enjoy the convenience of flexible scheduling with in-home or online lessons designed around your musical goals."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Acoustic Guitar Lessons in Margate</h2>
        <p className="mb-4">Residents of Margate, FL can now enjoy individually tailored acoustic guitar lessons. Whether you're just starting or looking to refine your existing skills, our dedicated instructors will help you quickly advance and enjoy your musical journey.</p>

        <p className="mb-4">Our lessons feature:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Essential chord structures and strumming rhythms</li>
          <li>Fingerstyle techniques and advanced picking skills</li>
          <li>Personalized songs suited to your tastes</li>
          <li>Practical and straightforward music theory</li>
          <li>Performance preparation and stage confidence</li>
        </ul>

        <p className="mb-4">Find additional information by visiting our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">main acoustic guitar lessons page</a>, including further details and other locations served.</p>

        <p className="mb-4">Ready to begin? Check out <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">acoustic guitar lessons near Margate</a> and book your first session today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Acoustic Guitar Lessons in Margate</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.9266267380096!2d-80.21100538497479!3d26.24692998342029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9075112f9a0a5%3A0xffccaf9e8efb8ed7!2sMargate%2C%20FL!5e0!3m2!1sen!2sus!4v1716224179852!5m2!1sen!2sus"
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