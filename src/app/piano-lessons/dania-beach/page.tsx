import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Dania Beach FL | Private & Virtual Instruction',
  description:
    'Learn piano in Dania Beach with expert local teachers. We offer in-home and online piano lessons for kids, teens, and adults at any level.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/dania-beach',
  },
};

export default function DaniaBeachPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Dania Beach"
        subtitle="In-Home and Online Piano Instruction That Fits Your Lifestyle"
        herocopy1="Looking for private piano lessons in Dania Beach? Our friendly instructors come to you — or meet you virtually — on your schedule."
        herocopy2="Whether you're a total beginner or returning to piano after years away, we make learning approachable and rewarding."
        herocopy3="Book your first piano lesson in Dania Beach and start playing music you love in no time."
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
