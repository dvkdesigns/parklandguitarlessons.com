import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Cooper City FL | In-Home & Virtual Instruction',
  description:
    'Private piano lessons in Cooper City for kids, teens, and adults. Learn to play at your pace with expert teachers in your home or online.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/cooper-city',
  },
};

export default function CooperCityPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Cooper City"
        subtitle="Friendly, One-on-One Instruction for All Ages"
        herocopy1="Looking for a piano teacher in Cooper City? We make learning convenient with in-home and online piano lessons for all skill levels."
        herocopy2="Whether you're a total beginner or want to refine your playing, we’ll help you reach your musical goals with clarity and confidence."
        herocopy3="Schedule your first Cooper City piano lesson today and start your musical journey with a supportive teacher."
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
