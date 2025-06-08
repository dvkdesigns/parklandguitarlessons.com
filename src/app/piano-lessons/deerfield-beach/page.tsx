import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Deerfield Beach FL | In-Home & Online Instruction',
  description:
    'Take piano lessons in Deerfield Beach with experienced local instructors. Private, in-home or virtual sessions available for kids, teens, and adults.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/deerfield-beach',
  },
};

export default function DeerfieldBeachPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Deerfield Beach"
        subtitle="Learn Piano at Your Pace, In-Home or Online"
        herocopy1="Get personalized piano lessons in Deerfield Beach from friendly, qualified instructors who work around your schedule."
        herocopy2="We teach all levels — from first-time beginners to adults getting back into music. You'll learn theory, technique, and real songs you enjoy."
        herocopy3="Book your first Deerfield Beach piano lesson today and see how fun and rewarding it can be to make music."
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
