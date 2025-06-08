import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in North Lauderdale FL | In-Home & Online',
  description:
    'Private piano lessons in North Lauderdale FL. Learn from patient, experienced instructors either in your home or online — all ages and skill levels welcome.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/north-lauderdale',
  },
};

export default function NorthLauderdalePianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in North Lauderdale"
        subtitle="In-Home and Virtual Piano Instruction for All Ages"
        herocopy1="Looking for piano lessons in North Lauderdale? We make it easy with experienced instructors who come to your home or meet you online."
        herocopy2="Whether your goal is to play your first song or get back to a musical passion, we’ll guide you step-by-step — no pressure, all progress."
        herocopy3="Book your first North Lauderdale piano lesson and see how fun and convenient learning music can be."
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
