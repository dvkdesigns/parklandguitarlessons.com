import Script from "next/script";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import LatestBlogSection from "@/components/LatestBlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import PricingSection from "@/components/PricingSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultimate Guitar Masterclass | Parkland Guitar Lessons",
  description:
    "Join the 52-week Ultimate Guitar Masterclass at Parkland Guitar Lessons. A full year of expert instruction, all styles, and career-building opportunities.",
  alternates: {
    canonical:
      "https://www.parklandguitarlessons.com/ultimate-guitar-masterclass",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="course-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Ultimate Guitar Masterclass",
            description:
              "A 52-week complete guitar course from beginner to advanced with expert instructors, income opportunities, and all styles of music covered.",
            provider: {
              "@type": "Organization",
              name: "Parkland Guitar Lessons",
              url: "https://www.parklandguitarlessons.com",
            },
          }),
        }}
      />

      <Hero
        title="Ultimate Guitar Masterclass"
        subtitle="52 Weeks • All Styles • Career Opportunities"
        herocopy1="Ready to go all in? This one-year masterclass is the ultimate guitar journey for beginners and intermediate players who want to reach the next level."
        herocopy2="Work with a teacher 2x a week for a full year across every style — from rock, blues, funk, gospel, and jazz to pop, country, and metal. Weekly instruction, real-world performance prep, and personalized feedback are all included."
        herocopy3="Whether you dream of recording music, performing live, or teaching, this course gives you the tools, mentorship, and potential income opportunities to build your music path."
        imageSrc="/images/guitar-masterclass-hero.webp"
      />

      <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          What’s Included in the Masterclass
        </h2>
        <p className="text-lg leading-relaxed space-y-4">
          The Ultimate Guitar Masterclass is a 52-week guided journey designed
          to take you from beginner to confident, advanced guitarist—no matter
          your current skill level. Whether you’ve never picked up a guitar or
          you’ve been self-teaching with limited progress, this program is built
          to give you clarity, structure, and mentorship throughout the year.
          <ul className="list-disc list-outside p-4">
            <li className="mb-4">
              <strong>104 Lessons Over 1 Year:</strong> One-on-one and group
              sessions delivered consistently to build lasting skills.
            </li>
            <li className="mb-4">
              <strong>Learn All Styles:</strong> Dive into rock, blues, jazz,
              country, gospel, metal, funk, pop, and more. Expand your musical
              vocabulary with hands-on playing and real song applications.
            </li>
            <li className="mb-4">
              <strong>Multiple Instructors:</strong> Learn from passionate
              teachers who are active, gigging musicians across different
              genres—gain different perspectives and techniques that round out
              your style.
            </li>
            <li className="mb-4">
              <strong>Expert Feedback:</strong> Get detailed guidance on
              technique, tone, songwriting, ear training, recording, and
              improvisation.
            </li>
            <li className="mb-4">
              <strong>Income Opportunities:</strong> As you progress, we open
              doors to perform at recitals, earn from student referrals, and
              even assist in group coaching. You’ll build not just skill—but
              potential income too.
            </li>
            <li className="mb-4">
              <strong>Full Support:</strong> Have a question between sessions?
              You’ll have email and text support for accountability and
              motivation.
            </li>
            <li className="mb-4">
              <strong>Career-Builder Features:</strong> Showcase performances,
              create video demos, and build a portfolio for college, bands, or
              teaching.
            </li>
          </ul>
          This course isn’t just about learning songs—it’s about transforming
          your identity as a musician. By the end of the year, you’ll not only
          play with confidence but also have the tools to use music in a
          meaningful way—whether for fun, creative expression, or as a side
          income. Enrollment is limited to ensure personal attention, so don’t
          wait—take the leap and apply today.
        </p>
      </div>

      <TestimonialsSection />

      <CallToActionSection />

      <LatestBlogSection
        title="Featured Guitar Tips"
        slugs={[
          "how-to-choose-the-right-guitar",
          "learn-guitar-parts-for-beginners",
          "how-to-tune-your-guitar",
          "essential-tips-for-maintaining-your-guitar-in-florida",
          "adult-guitar-lessons-boca-raton",
          "why-guitar-is-the-best-hobby-for-adults-in-boca-raton",
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Serving All of South Florida
        </h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.717613746561!2d-80.221245!3d26.310789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91e632b7986fb%3A0xa2b4bbd7d7a9e2a6!2sParkland%2C%20FL!5e0!3m2!1sen!2sus!4v1716221123456!5m2!1sen!2sus"
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
