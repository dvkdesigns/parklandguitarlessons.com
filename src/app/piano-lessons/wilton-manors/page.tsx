import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PianoInfoSection from '@/components/PianoInfoSection';
import PianoLessonDetails from '@/components/PianoLessonDetails';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Piano Lessons in Wilton Manors FL | In-Home & Virtual Instruction',
  description:
    'Private piano lessons in Wilton Manors for kids, teens, and adults. In-home or online lessons tailored to your pace, style, and goals.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/piano-lessons/wilton-manors',
  },
};

export default function WiltonManorsPianoLessons() {
  return (
    <>
      <Hero
        title="Piano Lessons in Wilton Manors"
        subtitle="Private Piano Instruction That Fits Your Life"
        herocopy1="Our piano teachers in Wilton Manors offer flexible, in-home or online lessons — customized for beginners, returning players, and all skill levels."
        herocopy2="We teach piano in a relaxed, supportive environment that keeps students motivated and focused on real musical progress."
        herocopy3="Book your first Wilton Manors piano lesson today and discover how fun, flexible, and personalized music education can be."
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
