export default function PricingSection() {
  const plans = [
    {
      name: "Weekday Classes",
      price: "$40",
      features: ["Monday-Friday", "10am to 3pm", "1-on-1 private session"],
    },
    {
      name: "Weekly Lessons",
      price: "$45",
      features: ["1-on-1 private session", "Flexible schedule", "Email/Text support"],
    },
    {
      name: "Virtual Lessons",
      price: "$40",
      features: ["Zoom or FaceTime", "real-time feedback", "Flexible schedule"],
    },
    {
      name: "Duo Lessons (2 Students)",
      price: "$45 per student",
      features: ["4-session commitment", "printable handouts & practice guides", "45-minute session"],
    },
    {
      name: "Small Group (3–5 Students)",
      price: "$35 per student",
      features: ["1-hour session", "Fun, interactive", "printable handouts & practice guides"],
    },
    {
      name: "Large Group (6–10 Students)",
      price: "$25 per student",
      features: ["1-hour session", "Song-based learning", "Flexible schedule"],
    },
  ];

  return (
    <section className="py-8 px-6 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-10">Lesson Options</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className="border rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-blue-600 text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="text-gray-700 space-y-1 mb-4">
              {plan.features.map((f, j) => (
                <li key={j}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
