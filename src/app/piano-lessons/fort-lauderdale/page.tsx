import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Fort Lauderdale FL | In-Home & Online Instruction',
  description:
    'Learn piano in Fort Lauderdale with private instruction from experienced local teachers. In-home and virtual piano lessons for all ages and levels.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/fort-lauderdale',
  },
};

export default function FortLauderdalePianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Fort Lauderdale"
        subtitle="Flexible In-Home or Online Piano Instruction"
        herocopy1="Our Fort Lauderdale piano teachers bring the music to you — whether you’re learning from home or connecting online."
        herocopy2="With lessons built around your interests and schedule, we make it easy to learn piano in a fun and personalized way."
        herocopy3="Book your first Fort Lauderdale piano lesson today and start making music that motivates you."
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
