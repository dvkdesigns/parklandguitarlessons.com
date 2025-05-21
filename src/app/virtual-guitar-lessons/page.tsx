import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import Image from 'next/image';

export const metadata = {
  title: 'Virtual Guitar Lessons | Parkland Guitar Lessons',
  description: 'Learn guitar from anywhere with live, personalized virtual guitar lessons. Perfect for beginners, hobbyists, and intermediate players. Start your online journey today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/virtual-guitar-lessons',
  },
};

export default function VirtualGuitarLessonsPage() {
  return (
    <>
      <Hero
  title="Virtual Guitar Lessons — Learn from Anywhere"
  subtitle="Live, private, and personalized guitar coaching from the comfort of your own home."
  herocopy1="Take lessons from anywhere in the world with our interactive virtual guitar sessions."
  herocopy2="We use Zoom or Google Meet with high-quality audio and multi-camera setups for a true live experience."
  herocopy3="No commute. No hassle. Just progress, from the comfort of your home."
  imageSrc="/images/virtual-guitar-lesson-hero.jpg"
/>


      <section className="py-16 px-6 max-w-5xl mx-auto text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Virtual Guitar Lessons?</h2>
        <p>
          At Parkland Guitar Lessons, we believe distance shouldn’t limit your access to high-quality instruction. Whether you’re in a different city, juggling a busy schedule, or simply prefer learning from home, our virtual lessons bring the full experience directly to you.
        </p>
        <p className="mt-4">
          Our virtual lessons are conducted over Zoom or Google Meet, featuring high-quality audio, multi-camera views, real-time feedback, and a personalized curriculum. You’ll still receive the same detailed coaching and structure as in-person students, just with the flexibility of online learning.
        </p>
        <Image
          src="/images/virtual-guitar-setup.jpg"
          alt="Virtual guitar lesson setup with instructor and student"
          width={1000}
          height={600}
          className="rounded-xl my-8 mx-auto"
        />
        <h3 className="text-2xl font-semibold mt-10 mb-4">What You’ll Need</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Guitar (acoustic or electric)</li>
          <li>Stable internet connection</li>
          <li>Device with webcam and microphone</li>
          <li>Zoom or Google Meet app</li>
          <li>Headphones or speakers for clear audio</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Who Virtual Lessons Are Perfect For</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Students living outside of our South Florida service area</li>
          <li>Homeschooling families</li>
          <li>Busy adults with unpredictable schedules</li>
          <li>Teens and college students who prefer remote sessions</li>
          <li>Anyone seeking expert guitar coaching without the commute</li>
        </ul>

        <Image
          src="/images/online-guitar-lesson-student.jpg"
          alt="Young guitarist learning virtually at home"
          width={1000}
          height={600}
          className="rounded-xl my-8 mx-auto"
        />

        <h3 className="text-2xl font-semibold mt-10 mb-4">Our Approach</h3>
        <p>
          Each lesson is tailored to your musical interests, skill level, and pace. Whether you're learning chords, mastering barre shapes, or building confidence in improvisation, we focus on building real-world musical skills.
        </p>
        <p className="mt-4">
          We use screen sharing, custom PDFs, looping tracks, and camera angles to create an interactive and engaging lesson experience. You’ll also receive weekly recap notes and optional practice assignments.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Flexible Scheduling</h3>
        <p>
          With virtual lessons, you have more flexibility than ever. Choose from weekday afternoons, evening slots, or weekend mornings. We make scheduling easy and offer one-off sessions, recurring weekly plans, and short-term packages.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Try a Free Lesson</h3>
        <p>
          Not sure if virtual lessons are right for you? Book a free 20-minute trial session. We’ll discuss your goals, assess your current level, and play a little to see how it feels.
        </p>
        <p className="mt-4">
          Many students are surprised at how personal and productive our online sessions are. Give it a try and experience the difference.
        </p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}