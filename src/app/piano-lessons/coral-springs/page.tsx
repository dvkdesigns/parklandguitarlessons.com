import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Coral Springs FL | In-Home & Online',
  description:
    'Take private piano lessons in Coral Springs with expert local teachers. In-home and virtual options available for all ages and skill levels.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/coral-springs',
  },
};

export default function CoralSpringsPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Coral Springs"
        subtitle="Private Piano Instruction Tailored to You"
        herocopy1="Our Coral Springs piano teachers offer personalized lessons for beginners and experienced players alike — in your home or online."
        herocopy2="Learn theory, technique, and your favorite songs with step-by-step guidance in a relaxed, supportive environment."
        herocopy3="Start your Coral Springs piano lessons today and build a musical skill that lasts a lifetime."
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
