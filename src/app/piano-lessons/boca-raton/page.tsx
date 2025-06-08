import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Boca Raton FL | In-Home & Online',
  description:
    'Private piano lessons in Boca Raton for all ages. Learn at your own pace with friendly, local instructors. In-home or virtual piano lessons available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/boca-raton',
  },
};

export default function BocaRatonPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Boca Raton That Inspire"
        subtitle="Private, Personalized Piano Instruction for All Ages"
        herocopy1="Experience one-on-one piano lessons from passionate instructors in Boca Raton — right in your home or online."
        herocopy2="Learn the foundations of music, build technique, and play songs you love in a relaxed, encouraging environment."
        herocopy3="Book your first Boca Raton piano lesson today and discover how fun and rewarding learning piano can be."
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
