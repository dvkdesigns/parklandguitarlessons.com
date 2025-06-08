import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Oakland Park FL | In-Home & Virtual Options',
  description:
    'Take piano lessons in Oakland Park with local, friendly instructors. We offer private in-home and online piano lessons for all ages and skill levels.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/oakland-park',
  },
};

export default function OaklandParkPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Oakland Park"
        subtitle="Learn Piano at Home or Online — Your Way"
        herocopy1="In Oakland Park, we make learning piano easy and enjoyable. Our teachers bring expert instruction to your home or meet with you virtually."
        herocopy2="From beginner to advanced, each lesson is tailored to your pace and interests — so you stay motivated and make real progress."
        herocopy3="Book your first Oakland Park piano lesson and see how rewarding one-on-one instruction can be."
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
