import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Coconut Creek FL | In-Home & Online Instruction',
  description:
    'Take piano lessons in Coconut Creek with patient, experienced teachers. We offer in-home and virtual lessons for all ages and skill levels.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/coconut-creek',
  },
};

export default function CoconutCreekPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Coconut Creek"
        subtitle="In-Home and Virtual Lessons That Fit Your Life"
        herocopy1="Whether you're starting from scratch or picking piano back up, our Coconut Creek instructors will guide you every step of the way."
        herocopy2="Learn to read music, play your favorite songs, and build real musical confidence — all from the comfort of your home."
        herocopy3="Book your first piano lesson in Coconut Creek today and start making progress with a friendly local teacher."
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
