import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "",
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
            name: "Parkland Guitar Lessons",
            description:
              "Clases privadas y personalizadas de guitarra en Parkland, FL. A domicilio o en línea.",
            url: "https://www.parklandguitarlessons.com/clases-de-guitarra-en-parkland-fl",
            image:
              "https://www.parklandguitarlessons.com/og/clases-de-guitarra-en-parkland-fl.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Parkland",
              addressRegion: "FL",
              addressCountry: "US",
            },
            telephone: "+1-954-555-1234",
            areaServed: {
              "@type": "Place",
              name: "Parkland, FL y alrededores",
            },
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "10:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/parklandguitarlessons",
              "https://www.instagram.com/parklandguitarlessons",
            ],
          }),
        }}
      />

      {/* Hero section */}
      <h1>Fun, Personalized Guitar Lessons for Kids in Parkland (Ages 4–18)</h1>
      <p>
        In-home and in-studio options available. Build confidence, creativity,
        and skill — one chord at a time.
      </p>
      <button>Book a Free Trial Lesson</button>
      {/* Hero section end */}

      {/* FAQ section */}
      {/* FAQ section end */}
    </>
  );
}
