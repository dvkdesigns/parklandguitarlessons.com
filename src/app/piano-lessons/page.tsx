// pages/piano-lessons.tsx

import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import ParklandMap from '@/components/maps/ParklandMap';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Piano Lessons Near You | In-Home & Online Piano Teachers',
  description:
    'Fun, personalized piano lessons for beginners to advanced players. Learn to play piano at your own pace with expert local teachers. In-home or virtual options available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons',
  },
};

export default function PianoLessonsPage() {
  return (
    <>
      <Hero
  title="Your Go-To Piano Teacher in Parkland"
  subtitle="Private Piano Lessons for All Ages"
  herocopy1="Get expert piano instruction in a relaxed, one-on-one setting. Whether you're new to piano or picking it back up, every lesson is designed just for you."
  herocopy2="Learn music theory, technique, chords, sight-reading, and your favorite songs — all at your pace, in your home or online."
  herocopy3="Piano lessons should feel inspiring, not intimidating. Book your first session with a friendly, experienced teacher today."
  imageSrc="/images/piano-hero.webp"
/>


      <PianoInfoSection
        heading="Why Our Piano Lessons Work"
        content="Whether you’re just getting started or coming back after a break, our piano lessons are designed to meet you where you are. We focus on music you actually want to play, not rigid one-size-fits-all programs."
        bullets={[
          'Lessons for kids, teens, and adults of all levels',
          'Friendly, experienced teachers who come to you',
          'Modern and classical styles taught',
          'Progress at your pace – no pressure, no stress',
        ]}
      />

        <PianoLessonDetails
         imageSrc="/images/piano-1.webp"
         />

      <TestimonialsSection />
      <CallToActionSection />
      <ParklandMap
        title="Serving Parkland, FL and Surrounding Areas"
        subtitle="We provide in-home and virtual piano lessons for families throughout Parkland and nearby cities."
         
      />
    </>
  );
}
