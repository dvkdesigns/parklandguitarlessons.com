// src/app/pricing/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lesson Pricing | Parkland Guitar Lessons',
  description: 'Explore private, group, virtual, and weekday guitar lesson rates with flexible options to suit your schedule and skill level.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/pricing',
  },
};

export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">🎸 Guitar Lesson Pricing</h1>
      <p className="text-lg text-center text-gray-700 mb-12">
        Flexible options to fit your schedule, goals, and learning style — whether you're booking solo, virtually, or as part of a group.
      </p>

      {/* Weekday Lessons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">🌞 Weekday Lessons (10AM–3PM) — $40</h2>
        <p className="text-gray-700 mb-2">In-home private guitar lessons available during off-peak weekday hours.</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Perfect for homeschoolers, retirees, remote workers</li>
          <li>One-on-one personalized instruction</li>
          <li>Includes all learning materials</li>
        </ul>
      </section>

      {/* Virtual Lessons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">💻 Virtual Guitar Lessons (Zoom or FaceTime)</h2>
        <p className="text-gray-700 mb-4">Learn from anywhere with structured online sessions tailored to your pace.</p>
        <ul className="text-gray-700 mb-4 space-y-1">
          <li>• 30 minutes – <strong>$40</strong></li>
          <li>• 45 minutes – <strong>$55</strong></li>
          <li>• 60 minutes – <strong>$70</strong></li>
        </ul>
        <ul className="list-disc list-inside text-gray-600">
          <li>Includes PDF handouts and video follow-ups</li>
          <li>Real-time feedback and technique correction</li>
          <li>No commute required!</li>
        </ul>
      </section>

      {/* Group Lessons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600">👥 Group Guitar Lessons</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800">Duo Lessons (2 Students) – $45/student</h3>
          <p className="text-sm text-gray-500 mb-2">45-minute session • Minimum: 4-session commitment</p>
          <p className="text-gray-700 mb-1">
            Perfect for siblings, couples, or friends at a similar level.
          </p>
          <p className="text-gray-600">Learn together and stay motivated! Sessions are tailored so both students make progress side-by-side.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800">Small Group (3–5 Students) – $35/student</h3>
          <p className="text-sm text-gray-500 mb-2">1-hour session • Minimum: 3 students to start</p>
          <p className="text-gray-700 mb-1">
            Perfect for neighborhood kids, homeschool pods, or parent + kids combos.
          </p>
          <p className="text-gray-600">Fun, interactive, and affordable. Students work on group songs, chord drills, and take turns with focused feedback.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">Large Group / HOA or Clubhouse Class (6–10 Students) – $25/student</h3>
          <p className="text-sm text-gray-500 mb-2">1-hour session • Minimum: 6 students</p>
          <p className="text-gray-700 mb-1">
            Perfect for community centers, retirement clubs, or teen enrichment programs.
          </p>
          <p className="text-gray-600">These sessions cover rhythm, popular songs, and basic technique in a fun, no-pressure way to learn and socialize.</p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📅 Ready to Book?</h2>
        <p className="text-gray-700 mb-4">Spots are limited — reserve your lesson time today!</p>
        <a
          href="/book"
          className="inline-block bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow hover:bg-orange-700 transition"
        >
          Book Your First Lesson
        </a>
      </div>
    </main>
  );
}
