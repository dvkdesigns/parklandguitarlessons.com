import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Pompano Beach FL | Private In-Home & Online',
  description:
    'Take piano lessons in Pompano Beach with friendly, experienced teachers. In-home and virtual sessions available for kids, teens, and adults.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/pompano-beach',
  },
};

export default function PompanoBeachPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Pompano Beach"
        subtitle="Flexible, Fun, and Personalized Instruction"
        herocopy1="Learning piano in Pompano Beach has never been easier. We offer in-home and virtual lessons designed around your goals and schedule."
        herocopy2="Whether you’re a brand-new player or ready to take your skills further, our patient instructors will guide you every step of the way."
        herocopy3="Book your first Pompano Beach piano lesson today — and let’s make music together."
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
