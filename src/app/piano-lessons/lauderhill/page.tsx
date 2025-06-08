import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Lauderhill FL | Private In-Home & Online',
  description:
    'Book piano lessons in Lauderhill with expert local teachers. Learn at your own pace with in-home or virtual piano lessons for all ages and levels.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/lauderhill',
  },
};

export default function LauderhillPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Lauderhill"
        subtitle="In-Home and Online Instruction That Meets You Where You Are"
        herocopy1="Our Lauderhill piano instructors teach beginners and returning players in a relaxed, personalized format — at your place or online."
        herocopy2="We help kids, teens, and adults learn to play the music they love, build solid technique, and grow confidence at every step."
        herocopy3="Start your Lauderhill piano lessons today and enjoy music lessons that truly fit your life."
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
