import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Hollywood FL | In-Home & Virtual Instruction',
  description:
    'Private piano lessons in Hollywood FL for kids, teens, and adults. Learn to play at your own pace with professional in-home or online instruction.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/hollywood',
  },
};

export default function HollywoodPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Hollywood FL"
        subtitle="Private Piano Instruction, Right at Home or Online"
        herocopy1="Our Hollywood piano teachers provide friendly, structured lessons that meet you where you are — beginner to advanced."
        herocopy2="We focus on helping you develop your musical foundation while playing real music you enjoy, at your own pace and comfort level."
        herocopy3="Book your first Hollywood piano lesson today and experience how easy and fun learning piano can be."
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
