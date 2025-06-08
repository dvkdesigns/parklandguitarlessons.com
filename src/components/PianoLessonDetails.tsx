// components/PianoLessonDetails.tsx
type HeroProps = {
  imageSrc?: string;
};

export default function PianoLessonDetails({ imageSrc }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-14">

        <div className="">
          <h2 className="text-4xl font-extrabold tracking-tight text-center">Local Piano Lessons Near You</h2>
          <p className="mt-4 text-lg text-gray-600">
          <img src={imageSrc}  className="mt-0 pb-5 rounded w-100 float-right" />

            Finding the right piano teacher makes all the difference. That’s why we offer{' '}
            <span className="font-semibold text-gray-800">personalized piano lessons in your home or online</span>, matched to your goals, schedule, and skill level.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Our teachers work with all ages – from young beginners to adults. Lessons are relaxed, supportive, and structured to help you grow with confidence.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">We Serve the Following Areas</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 text-gray-700 list-disc list-inside">
            <li>[Piano lessons in Parkland FL]</li>
            <li>[Piano lessons in Coral Springs]</li>
            <li>[Piano lessons in Boca Raton]</li>
            <li>[Piano lessons in Coconut Creek]</li>
            <li>[Piano lessons in Margate]</li>
            <li>[Piano lessons in Tamarac]</li>
            <li>[Piano lessons in Deerfield Beach]</li>
            <li>[Piano lessons in Pompano Beach]</li>
            <li>[Piano lessons in Sunrise]</li>
            <li>[Piano lessons in Hollywood FL]</li>
            <li>[Piano Lessons Cooper City FL]</li>
            <li>[Piano lessons in Dania Beach]</li>
            <li>[Piano lessons in Hallandale Beach]</li>
            <li>[Piano lessons in Pembroke Park]</li>
          </ul>
        </div>

        <div className="space-y-10">
          <Section
            title="Piano Lessons for All Ages & Skill Levels"
            content={[
              "Everyone learns differently. That’s why our piano lessons for beginners focus on building confidence and creativity — not just memorizing scales.",
              "Intermediate and advanced students can dive deeper into classical pieces, jazz improvisation, or modern arrangements at their own pace.",
            ]}
          />

          <Section
            title="Learn the Music You Love"
            content={[
              "From Beethoven to Billie Eilish, our piano teachers personalize lessons based on your musical taste — pop, classical, jazz, R&B, or soundtracks.",
            ]}
          />

          <Section
            title="In-Home Piano Lessons in South Florida"
            content={[
              "Skip the drive — we come to you. Lessons take place in the comfort of your home, on your piano or keyboard, on a schedule that fits your routine.",
              "Perfect for busy families looking for a flexible, supportive learning environment.",
            ]}
          />

          <Section
            title="Virtual Piano Lessons Available"
            content={[
              "Prefer online learning? Take lessons via Zoom or your favorite video platform. Stay consistent no matter where life takes you.",
            ]}
          />

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">What You'll Learn</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Reading sheet music and rhythms</li>
              <li>Proper posture and hand technique</li>
              <li>Scales, chords, and theory fundamentals</li>
              <li>Playing by ear and improvisation</li>
              <li>Dynamic phrasing and musicality</li>
              <li>Confidence in performance settings</li>
            </ul>
          </div>

          <Section
            title="Flexible Piano Lesson Scheduling"
            content={[
              "Daytime, after school, or evening — we adapt to your schedule. No commute. No stress. Just convenient music learning when it works for you.",
            ]}
          />

          <Section
            title="Affordable Pricing with No Contracts"
            content={[
              "Book weekly or on your schedule. Pay-as-you-go or choose a discounted multi-lesson package — no pressure or commitments.",
            ]}
          />

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Students Love Learning With Us</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Friendly, patient teachers who keep lessons fun</li>
              <li>Flexible plans tailored to your pace and goals</li>
              <li>Simple explanations and step-by-step feedback</li>
              <li>Clear progress tracking and encouragement</li>
              <li>Music with meaning — not just memorization</li>
            </ul>
          </div>

          <Section
            title="Get Started with Piano Lessons Today"
            content={[
              "Looking for beginner lessons for your child, or ready to pick the piano back up as an adult? You’re in the right place.",
              "Fill out the form below to get matched with your perfect instructor. Let’s make music together!",
            ]}
          />
        </div>

        <div className="mt-14 border-t pt-10">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Need Piano Lessons in Your City?</h3>
          <p className="mb-4 text-gray-600">Click your city below to get started:</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-blue-600 font-medium">
            <li>[Piano Lessons Parkland FL]</li>
            <li>[Piano Lessons Coral Springs]</li>
            <li>[Piano Lessons Boca Raton]</li>
            <li>[Piano Lessons Coconut Creek]</li>
            <li>[Piano Lessons Margate]</li>
            <li>[Piano Lessons Tamarac]</li>
            <li>[Piano Lessons Deerfield Beach]</li>
            <li>[Piano Lessons Pompano Beach]</li>
            <li>[Piano Lessons Sunrise]</li>
            <li>[Piano Lessons Hollywood FL]</li>
            <li>[Piano Lessons Cooper City FL]</li>
            <li>[Piano Lessons Dania Beach]</li>
            <li>[Piano Lessons Hallandale Beach]</li>
            <li>[Piano Lessons Pembroke Park]</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      {content.map((text, idx) => (
        <p key={idx} className="text-gray-700 mb-4">
          {text}
        </p>
      ))}
    </div>
  );
}
