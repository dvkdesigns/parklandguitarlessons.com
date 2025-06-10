import Script from "next/script";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import LatestBlogSection from "@/components/LatestBlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import PricingSection from "@/components/PricingSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Guitar Lessons in Boca Raton, FL | In-Home or In-Studio at Clint Moore Rd",
  description:
    "Learn guitar in Boca Raton, FL with personalized in-home or in-studio lessons. Located on Clint Moore Rd or at your doorstep. Book today!",
  alternates: {
    canonical:
      "https://www.parklandguitarlessons.com/guitar-lessons-boca-raton-fl",
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
              "One-on-one private guitar lessons in Boca Raton, FL. Choose in-home or visit our studio on Clint Moore Rd.",
            url: "https://www.parklandguitarlessons.com/guitar-lessons-boca-raton-fl",
            image:
              "https://www.parklandguitarlessons.com/og/guitar-lessons-boca-raton-fl.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1200 Clint Moore Rd STE 13",
              addressLocality: "Boca Raton",
              addressRegion: "FL",
              postalCode: "33487",
              addressCountry: "US",
            },
            telephone: "+1-954-555-1234",
            areaServed: {
              "@type": "Place",
              name: "Boca Raton, FL and surrounding neighborhoods",
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

      <Hero
        title="Boca Raton Guitar Lessons – In-Home or In-Studio"
        subtitle="Private Guitar Lessons in Boca Raton, FL – Your Place or Ours"
        herocopy1="Looking for guitar lessons in Boca Raton? We offer professional, one-on-one guitar instruction either at your home or at our comfortable Boca Raton studio located at 1200 Clint Moore Rd STE 13."
        herocopy2="Whether you're a total beginner or a lifelong strummer, our Boca Raton guitar lessons are tailored to your goals, skill level, and preferred learning style. Take lessons right in your home in East Boca, West Boca, or downtown—or come visit us in our Clint Moore studio near the I-95 exit!"
        herocopy3="We serve all neighborhoods in Boca Raton including Broken Sound, Mizner Park, Boca Del Mar, and more. Book your first guitar lesson in Boca Raton today and start your musical journey with a trusted local instructor."
        imageSrc="/images/hero.webp"
      />

      <InfoSection />

      <TestimonialsSection />

      <PricingSection />

      <CallToActionSection />

      <LatestBlogSection
        title="Featured Articles"
        slugs={[
          "adult-guitar-lessons-boca-raton",
          "bring-guitar-to-your-boca-raton-clubhouse-or-hoa",
          "guitar-after-golf-a-creative-hobby-for-boca-raton-golfers",
          "how-boca-raton-hoa-clubs-are-enhancing-community-life-with-guitar-lessons",
          "top-boca-raton-retirement-communities-for-guitar-lessons",
          "why-guitar-is-the-best-hobby-for-adults-in-boca-raton",
          "how-to-choose-the-right-guitar",
          "clases-de-guitarra-en-florida-top-10-busquedas-populares-de-la-comunidad-latina",
          "essential-tips-for-maintaining-your-guitar-in-florida",
          "how-to-tune-your-guitar",
          "learn-guitar-parts-for-beginners",
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Boca Raton Studio Location
        </h2>
        <p className="text-center mb-4">
          Visit us at our conveniently located Boca Raton guitar studio:
          <br />
          <strong>1200 Clint Moore Rd STE 13, Boca Raton, FL 33487</strong>
        </p>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.499578723252!2d-80.1183371849748!3d26.404591383317874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91f83d8c6d9d3%3A0x70b703b935d35fdd!2s1200%20Clint%20Moore%20Rd%20STE%2013%2C%20Boca%20Raton%2C%20FL%2033487!5e0!3m2!1sen!2sus!4v1718000000000"
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
