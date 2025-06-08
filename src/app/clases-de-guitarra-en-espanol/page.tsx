import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
title: 'Clases de Guitarra en Español | Parkland Guitar Lessons',
description: 'Clases de guitarra en español con instructores bilingües. Aprende desde casa o en línea en Parkland, Boca Raton y alrededores.',
alternates: {
canonical: 'https://www.parklandguitarlessons.com/clases-de-guitarra-en-espanol',
},
};

export default function Home() {
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
"description": "Clases privadas de guitarra en español en Parkland, FL. Disponibles en casa y en línea.",
"url": "https://www.parklandguitarlessons.com/clases-de-guitarra-en-espanol",
"image": "https://www.parklandguitarlessons.com/og/clases-de-guitarra-en-espanol.jpg",
"address": {
"@type": "PostalAddress",
"addressLocality": "Parkland",
"addressRegion": "FL",
"addressCountry": "US"
},
"telephone": "+1-954-555-1234",
"areaServed": {
"@type": "Place",
"name": "Parkland, FL y alrededores"
},
"priceRange": "$$",
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday"
],
"opens": "10:00",
"closes": "18:00"
}
],
"sameAs": [
"https://www.facebook.com/parklandguitarlessons",
"https://www.instagram.com/parklandguitarlessons"
]
})
}}
/>
  <Hero
    title="Clases de Guitarra en Español"
    subtitle="Aprende guitarra con un maestro que habla tu idioma."
    herocopy1="Ofrecemos clases personalizadas completamente en español, con instructores bilingües que se adaptan a tu ritmo y estilo musical."
    herocopy2="Ya sea que seas principiante o intermedio, nuestras clases están diseñadas para ayudarte a progresar con confianza y claridad."
    herocopy3="Clases presenciales en tu hogar o virtuales disponibles. ¡Agenda una clase de prueba gratuita hoy mismo!"
    imageSrc="/images/hero-guitarra-espanol.jpg"
  />

  <InfoSection />

  <TestimonialsSection />

  <PricingSection />

  <CallToActionSection />

  <LatestBlogSection
    title="Artículos Destacados"
    slugs={[
      "clases-de-guitarra-en-florida-top-10-busquedas-populares-de-la-comunidad-latina",
      "how-to-choose-the-right-guitar",
      "learn-guitar-parts-for-beginners",
      "essential-tips-for-maintaining-your-guitar-in-florida",
      "adult-guitar-lessons-boca-raton"
    ]}
  />

  <div className="max-w-5xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4 text-center">Zonas que Atendemos</h2>
    <div className="w-full h-[400px] rounded overflow-hidden shadow">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.7378772380673!2d-80.126137!3d26.368306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91f32d4150e15%3A0x32ea2c36aa1e319a!2sBoca%20Raton%2C%20FL!5e0!3m2!1sen!2sus!4v1716220065423!5m2!1sen!2sus"
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