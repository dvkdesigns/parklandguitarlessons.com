import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSectionES from '@/components/InfoSectionES';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clases de Guitarra a Domicilio en Parkland | Parkland Guitar Lessons',
  description: 'Clases privadas de guitarra personalizadas en Parkland, FL. Aprende desde casa o en línea. ¡Reserva tu primera clase hoy!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/clases-de-guitarra-en-parkland-fl',
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
            "description": "Clases privadas y personalizadas de guitarra en Parkland, FL. A domicilio o en línea.",
            "url": "https://www.parklandguitarlessons.com/clases-de-guitarra-en-parkland-fl",
            "image": "https://www.parklandguitarlessons.com/og/clases-de-guitarra-en-parkland-fl.jpg",
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
          }),
        }}
      />

      <Hero
        title="Clases de Guitarra a Domicilio en Parkland"
        subtitle="¡Desbloquea tu potencial musical con clases personalizadas en casa!"
        herocopy1="Imagina aprender guitarra desde la comodidad de tu hogar, con lecciones diseñadas exclusivamente para ti. Ya sea que estés empezando o perfeccionando tu técnica, nuestras clases uno-a-uno se adaptan a tu ritmo y objetivos."
        herocopy2="Ofrecemos un ambiente amigable y flexible para que avances sin estrés. Perfecto para todas las edades y niveles de experiencia."
        herocopy3="Descubre lo gratificante que puede ser aprender guitarra. ¡Reserva tu primera clase hoy y da el primer paso hacia tu camino musical!"
        imageSrc="/images/hero.webp"
      />

      <InfoSectionES />

      <TestimonialsSection />

      <PricingSection />

      <CallToActionSection />

    </>
  );
}
