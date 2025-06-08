// components/PianoInfoSection.tsx

type PianoInfoSectionProps = {
  heading: string;
  content: string;
  bullets?: string[];
};

export default function PianoInfoSection({
  heading,
  content,
  bullets,
}: PianoInfoSectionProps) {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">{heading}</h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">{content}</p>

        {bullets && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bullets.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-white shadow-md rounded-xl px-5 py-4 border border-gray-200 hover:shadow-lg transition"
              >
                <span className="text-green-500 mt-1">✓</span>
                <p className="text-gray-700 text-base">{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
