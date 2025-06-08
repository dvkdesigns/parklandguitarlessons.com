import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Margate FL | Private In-Home & Online',
  description:
    'Learn piano in Margate with professional local teachers. In-home or virtual piano lessons available for children, teens, and adults at all levels.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/margate',
  },
};

export default function MargatePianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Margate"
        subtitle="Private, Personalized Piano Instruction for All Ages"
        herocopy1="Take the stress out of learning piano. Our Margate instructors come to your home or teach online — whatever fits your schedule best."
        herocopy2="Whether you’re a complete beginner or already playing, we’ll help you grow with fun, structured lessons tailored to your goals."
        herocopy3="Book your first piano lesson in Margate and start learning music the way you’ve always wanted to."
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
