import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Tamarac FL | Private In-Home & Online Lessons',
  description:
    'Looking for piano lessons in Tamarac? Our experienced teachers offer private in-home and virtual piano instruction for students of all ages.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/tamarac',
  },
};

export default function TamaracPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Tamarac"
        subtitle="Expert Piano Instruction at Home or Online"
        herocopy1="Tamarac families love how easy we make learning piano. Our instructors come to you — or connect virtually — with personalized lessons for every level."
        herocopy2="From first-time players to returning musicians, we help you master the skills you need while playing music you actually enjoy."
        herocopy3="Book your first Tamarac piano lesson today and let’s make music happen on your terms."
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
