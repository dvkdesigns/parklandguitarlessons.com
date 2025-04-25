export default function TestimonialsSection() {
  const testimonials = [
    { name: "Alex R.", quote: "Dan is incredibly patient and motivating!" },
    { name: "Jenna L.", quote: "I learned more in 3 weeks than I did in 3 months on YouTube." },
    { name: "Mike G.", quote: "Flexible schedule, and I finally feel confident playing." },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-2xl font-semibold mb-10 text-center">What Students Are Saying</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="bg-white p-6 shadow rounded-md text-center">
            <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
            <footer className="font-semibold text-gray-800">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
