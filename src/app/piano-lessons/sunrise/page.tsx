import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Sunrise FL | In-Home & Online Music Instruction',
  description:
    'Private piano lessons in Sunrise FL for kids, teens, and adults. Learn at your own pace with professional local instructors in-home or online.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/sunrise',
  },
};

export default function SunrisePianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Sunrise FL"
        subtitle="Personalized Music Instruction for All Ages"
        herocopy1="Looking for piano lessons in Sunrise? Our instructors offer fun, focused learning in your home or virtually — designed around your pace and interests."
        herocopy2="We work with students of all ages and skill levels. You’ll learn to read music, play songs you love, and grow confidently with each lesson."
        herocopy3="Schedule your first Sunrise piano lesson today and see how enjoyable learning music can be."
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
