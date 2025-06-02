import Link from 'next/link';

const styles = [
  {
    title: 'Gospel Guitar Lessons',
    href: '/gospel-guitar-lessons',
    description: 'Master gospel guitar with soul-filled strumming, church-ready chords, and faith-driven technique.',
  },
  {
    title: 'Rock Guitar Lessons',
    href: '/rock-guitar-lessons',
    description: 'Crank up the amp and learn power chords, classic solos, and stage-ready rock riffs.',
  },
  {
    title: 'Country Guitar Lessons',
    href: '/country-guitar-lessons',
    description: 'Strum through Nashville-style progressions, chicken pickin’ licks, and heartfelt country ballads.',
  },
  {
    title: 'Acoustic Guitar Lessons',
    href: '/acoustic-guitar-lessons',
    description: 'Learn fingerstyle, rhythm, and unplugged performance techniques on acoustic guitar.',
  },
  {
    title: 'Electric Guitar Lessons',
    href: '/electric-guitar-lessons',
    description: 'Explore tone, lead playing, and dynamic control with electric guitar lessons tailored to your style.',
  },
  {
    title: 'Bass Guitar Lessons',
    href: '/bass-guitar-lessons',
    description: 'Lock in your groove, learn foundational basslines, and drive the rhythm from the low end.',
  },
  {
    title: 'Blues Guitar Lessons',
    href: '/blues-guitar-lessons',
    description: 'Learn 12-bar blues, expressive bending, and soulful solo phrasing with structured lessons.',
  },
  {
    title: 'Pop Guitar Lessons',
    href: '/pop-guitar-lessons',
    description: 'Play today’s top hits with modern chords, strumming patterns, and dynamic rhythm technique.',
  },
  {
    title: 'Fingerstyle Guitar Lessons',
    href: '/fingerstyle-guitar-lessons',
    description: 'Develop thumb independence and melody integration with solo acoustic fingerpicking.',
  },
  {
    title: 'Jazz Guitar Lessons',
    href: '/jazz-guitar-lessons',
    description: 'Master jazz chords, improvisation, and comping for smooth, expressive guitar playing.',
  },
  {
    title: 'Funk Guitar Lessons',
    href: '/funk-guitar-lessons',
    description: 'Get in the pocket with syncopated rhythms, muted strumming, and classic funk grooves.',
  },
  {
    title: 'Reggae Guitar Lessons',
    href: '/reggae-guitar-lessons',
    description: 'Learn offbeat skank rhythm, dub dynamics, and roots reggae progressions.',
  },
  {
    title: 'Latin Guitar Lessons',
    href: '/latin-guitar-lessons',
    description: 'Explore the rhythm and passion of Latin guitar styles including salsa, bossa nova, and flamenco.',
  },
  {
    title: 'Metal Guitar Lessons',
    href: '/metal-guitar-lessons',
    description: 'Play fast, heavy riffs, power chords, and solos with advanced metal guitar techniques.',
  },

];

export default function StyleExplorer() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Your Style</h2>
        <p className="text-gray-600 mb-10">
          From soulful worship to shredding metal, browse all guitar styles and find the one that fits your goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style) => (
            <Link
              key={style.href}
              href={style.href}
              className="block group border rounded-2xl p-6 bg-white hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 group-hover:underline">{style.title}</h3>
              <p className="mt-2 text-gray-600">{style.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
