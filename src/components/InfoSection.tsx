export default function InfoSection() {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE — Subtitle + Bullets */}
        <div className="text-right">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Our Lessons Work
          </h2>
          <p className="italic text-gray-600 mb-6">
            More than just chords — we build confident musicians.
          </p>
          <ul className="list-disc list-inside space-y-2 text-orange-600 list-none text-2xl">
          <li  className="leading-relaxed mb-7">
            In-Home Lessons
            <br />
            <small className="text-gray-600">
              <i>Learn where you're most comfortable—right at home.</i>
            </small>
          </li>
          <li  className="leading-relaxed mb-7">
            Flexible Scheduling
            <br />
            <small className="text-gray-600">
              <i>Guitar lessons that fit your busy life.</i>
            </small>
          </li>
          <li  className="leading-relaxed mb-7">
            Focus on Your Favorite Styles
            <br />
            <small className="text-gray-600">
              <i>
                Whether it’s rock, pop, blues or beyond—we teach what you love.
              </i>
            </small>
          </li>
          <li  className="leading-relaxed mb-7">
            Preparation for Performances
            <br />
            <small className="text-gray-600">
              <i>Get stage-ready with confidence and skill.</i>
            </small>
          </li>
          <li  className="leading-relaxed mb-7">
            Supportive and Friendly Environment
            <br />
            <small className="text-gray-600">
              <i>No pressure, just progress at your own pace.</i>
            </small>
          </li>
          <li  className="leading-relaxed mb-7">
            No Long-Term Commitment Required
            <br />
            <small className="text-gray-600">
              <i>
                Start when you're ready, stop when you need to—simple as that.
              </i>
            </small>
          </li>
          </ul>
        </div>

        {/* RIGHT SIDE — Titles and Paragraphs */}
        <div className="space-y-8">
          <div>

            <p className="text-gray-700 leading-relaxed mb-5">
            Unlock your musical potential with personalized guitar lessons
          tailored to your unique style, pace, and goals. Whether you’re a
          beginner looking to strum your first chord or an experienced guitarist
          aiming to perfect your technique, we are here to guide you every step
          of the way. With flexible scheduling and in-home lessons, we make
          learning convenient and enjoyable for all skill levels. Don’t wait to
          start your musical journey.</p>
            <p className="text-gray-700 leading-relaxed mb-5">
            We believe every student has their own learning style. That’s why we
          customize each lesson to focus on your personal interests and
          strengths. Whether you're looking to learn your favorite songs,
          improve technique, or master music theory, our instructors will guide
          you in a way that fits your pace and style.</p>
          <p className="text-gray-700 leading-relaxed mb-5">
          We understand that life is busy. With flexible lesson times and the
          ability to reschedule without hassle, we make it easy for you to fit
          guitar lessons into your life, not the other way around. Learn at your
          own pace without the pressure of a rigid schedule.
        </p>

        <p className="text-gray-700 leading-relaxed mb-5">
          Our instructors are not only skilled guitarists but also passionate
          educators. They bring years of experience to the table, helping you
          avoid common mistakes and fast-tracking your progress. Whether you’re
          just starting out or looking to refine advanced techniques, our
          instructors will guide you through each step.
        </p>

        <p className="text-gray-700 leading-relaxed mb-5">
          No more commuting or squeezing lessons into an already packed day. We
          bring the music to you! Enjoy learning in the comfort of your home,
          with lessons designed to help you practice effectively in your own
          space. This convenience gives you more time to focus on what matters —
          making music.
        </p>

        <p className="text-gray-700 leading-relaxed mb-5">
          Whether you’re 8 or 80, we welcome students of all ages and experience
          levels. From first-time players to seasoned musicians looking for a
          fresh perspective, our one-on-one lessons are tailored to suit your
          personal goals and aspirations.
        </p>
          </div>
        </div>
      </div>
    </section>
  );
}
