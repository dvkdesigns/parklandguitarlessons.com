import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons in Boca Raton, FL | Parkland Guitar Lessons',
  description: 'Personalized acoustic guitar lessons in Boca Raton, FL. Beginner to advanced instruction available for all ages. Book your lesson today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons/boca-raton',
  },
};

export default function AcousticGuitarLessonsBocaRaton() {
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
            "description": "Acoustic guitar lessons in Boca Raton, FL. Private instruction tailored to your musical goals. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons/boca-raton",
            "image": "https://www.parklandguitarlessons.com/images/acoustic-hero.webp",
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
        title="Acoustic Guitar Lessons in Boca Raton, FL"
        subtitle="Customized Instruction for All Skill Levels"
        herocopy1="Discover the joy of playing acoustic guitar with personalized lessons designed just for you, right here in Boca Raton."
        herocopy2="Whether you're a beginner or experienced musician, we'll help you master your favorite acoustic songs and techniques."
        herocopy3="Convenient lessons available in-home or online, tailored specifically to your musical aspirations."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Acoustic Guitar Instruction in Boca Raton</h2>
        <p className="mb-4">Residents of Boca Raton, FL can now enjoy comprehensive <strong>acoustic guitar lessons</strong> personalized to your individual skill level and musical interests. From basic chords and rhythms to advanced fingerpicking techniques, our professional instruction will elevate your playing ability.</p>

        <p className="mb-4">Our acoustic guitar lessons feature:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Beginner to advanced acoustic guitar methods</li>
          <li>Fingerstyle and flatpicking techniques</li>
          <li>Playing songs from popular acoustic genres</li>
          <li>Understanding music theory on guitar</li>
          <li>Performance skills and musical confidence</li>
        </ul>

        <p className="mb-4">Explore additional options by visiting our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">main acoustic guitar page</a> for a detailed look at our program and nearby locations.</p>

        <p className="mb-4">Ready to start strumming? Learn more about our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">acoustic guitar lessons near you</a> and book your first lesson in Boca Raton today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Acoustic Guitar Lessons Near Boca Raton</h2>
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