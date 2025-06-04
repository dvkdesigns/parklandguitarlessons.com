import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons in Coconut Creek, FL | Parkland Guitar Lessons',
  description: 'Enjoy personalized acoustic guitar instruction in Coconut Creek, FL. Lessons suitable for all ages and skill levels. Schedule your first lesson today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons/coconut-creek',
  },
};

export default function AcousticGuitarLessonsCoconutCreek() {
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
            "description": "Expert acoustic guitar instruction in Coconut Creek, FL. Personalized lessons available for beginners and experienced players, in-home or online.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons/coconut-creek",
            "image": "https://www.parklandguitarlessons.com/images/acoustic-hero.webp",
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
        title="Acoustic Guitar Lessons in Coconut Creek, FL"
        subtitle="Learn Acoustic Guitar Your Way"
        herocopy1="Unlock your musical potential with tailored acoustic guitar lessons right in Coconut Creek."
        herocopy2="Our expert instruction adapts to all skill levels, guiding you through your favorite songs and guitar techniques."
        herocopy3="Lessons available at your home or online, designed to fit your personal goals and musical preferences."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Acoustic Guitar Classes in Coconut Creek</h2>
        <p className="mb-4">If you're in Coconut Creek, FL and eager to learn acoustic guitar, we offer individualized lessons perfect for every stage of musical growth. Our experienced teachers help students quickly master essential techniques and enjoy playing their favorite acoustic songs.</p>

        <p className="mb-4">Our acoustic guitar curriculum includes:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Basic chords, strumming, and rhythm skills</li>
          <li>Advanced fingerstyle and picking patterns</li>
          <li>Song-learning tailored to your musical taste</li>
          <li>Guitar theory made simple</li>
          <li>Building stage presence and confidence</li>
        </ul>

        <p className="mb-4">Discover more about our programs by visiting our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">primary acoustic guitar lessons page</a>, where you can see additional details and other nearby service areas.</p>

        <p className="mb-4">Start your musical journey today! Learn about <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">acoustic guitar lessons near you</a> and arrange your first lesson in Coconut Creek.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Acoustic Guitar Lessons in the Coconut Creek Area</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.7842041361777!2d-80.19365998497469!3d26.247231983418925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d903098e9d2477%3A0xd88c7e3767fc7b78!2sCoconut%20Creek%2C%20FL!5e0!3m2!1sen!2sus!4v1716224179852!5m2!1sen!2sus"
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