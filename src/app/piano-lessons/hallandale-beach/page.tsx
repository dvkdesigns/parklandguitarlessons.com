import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Hallandale Beach FL | Private & Online',
  description:
    'Discover piano lessons in Hallandale Beach with expert local teachers. In-home and virtual options for children, teens, and adults of all levels.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/hallandale-beach',
  },
};

export default function HallandaleBeachPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Hallandale Beach"
        subtitle="Private In-Home and Online Piano Instruction"
        herocopy1="We bring personalized piano lessons right to your home in Hallandale Beach — or teach you online at your convenience."
        herocopy2="From young beginners to adult students, our piano teachers tailor every lesson to your pace and musical goals."
        herocopy3="Book your first Hallandale Beach piano lesson today and experience fun, engaging music instruction designed around you."
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

      <PianoLessonDetails imageSrc="/images/piano-1.webp" />

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
