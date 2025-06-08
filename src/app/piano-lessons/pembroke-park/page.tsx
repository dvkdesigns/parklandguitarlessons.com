import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Pembroke Park FL | In-Home & Online Instruction',
  description:
    'Get private piano lessons in Pembroke Park from expert local teachers. Flexible in-home or virtual lessons for all ages and skill levels.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/pembroke-park',
  },
};

export default function PembrokeParkPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Pembroke Park"
        subtitle="Friendly, Private Piano Instruction at Your Pace"
        herocopy1="In Pembroke Park, our instructors offer personalized piano lessons in the comfort of your home — or virtually, wherever you are."
        herocopy2="Whether you're just starting or picking it up again, you'll learn to play real music with a fun, supportive teacher by your side."
        herocopy3="Book your first Pembroke Park piano lesson today and get started on a rewarding musical journey."
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
