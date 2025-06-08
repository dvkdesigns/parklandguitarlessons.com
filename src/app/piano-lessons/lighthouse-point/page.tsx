import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Lighthouse Point FL | In-Home & Online Instruction',
  description:
    'Book piano lessons in Lighthouse Point with experienced teachers. In-home and virtual lessons available for kids, teens, and adult students of all levels.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/lighthouse-point',
  },
};

export default function LighthousePointPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Lighthouse Point"
        subtitle="Private Instruction That Comes to You"
        herocopy1="Looking for piano lessons in Lighthouse Point? Our experienced instructors teach in-home or online lessons built around your goals and pace."
        herocopy2="Learn music theory, technique, and real songs — all in a relaxed, one-on-one setting for students of all ages."
        herocopy3="Schedule your first Lighthouse Point piano lesson today and see just how enjoyable and effective custom instruction can be."
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
