'use client';
import { useState } from 'react';

export default function PricingSection() {
  const [showAll, setShowAll] = useState(false);

  const plans = [
    {
      name: "Weekday Lessons",
      price: "$40",
      features: ["30 minute, 1-on-1 private session", "Monday-Friday 10am - 3pm", "Email/Text support", "Printable Handouts"],
    },
    {
      name: "Weekly Lessons",
      price: "$45",
      features: ["30 minute, 1-on-1 private session", "Flexible schedule", "Email/Text support", "Printable Handouts"],
    },
    {
      name: "Virtual Lessons",
      price: "$40",
      features: ["30 minute, 1-on-1 private session", "Zoom or FaceTime", "Chat/Text support", "Printable Handouts"],
    },
    {
      name: "Duo Lessons (2 Students)",
      price: "$45 per student",
      features: ["1-hour group session", "Flexible schedule", "Fun, Interactive", "Printable Handouts"],
    },
    {
      name: "Small Group (3–5 Students)",
      price: "$35 per student",
      features: ["1-hour group session", "Flexible schedule", "Fun, interactive", "Printable Handouts"],
    },
    {
      name: "Large Group (6–10 Students)",
      price: "$25 per student",
      features: ["1-hour session", "Song-based learning", "Flexible schedule", "Printable Handouts"],
    },
    {
      name: "4 Lesson Package - Weekly Lessons",
      price: "$180",
      features: ["1-on-1 private session", "Flexible schedule", "Email/Text support", "Printable Handouts"],
    },
    {
      name: "Mechanics of Acoustic Guitar - 12 Week Beginner Course",
      price: "$540",
      features: ["Play along with your favorite songs", "Impress Friends And Relatives", "Email/Text support", "12 Week Course"],
    },
    {
      name: "Mechanics of Electric Guitar - 12 Week Beginner Course",
      price: "$540",
      features: ["Play along with your favorite songs", "Impress Friends And Relatives", "Email/Text support", "12 Week Course"],
    },
    {
      name: "Mechanics of Bass Guitar - 12 Week Beginner Course",
      price: "$540",
      features: ["Join/Start a Band, Solo Project", "Performance Opportunities", "Income Opportunities", "Email/Text support", "24 Week Course"],
    },
    {
      name: "Acoustic Guitar Masterclass - 24 Week Beginner-Intermediate Course",
      price: "$980",
      features: ["Join/Start a Band, Solo Project", "Performance Opportunities", "Income Opportunities", "Email/Text support", "24 Week Course"],
    },
    {
      name: "Electric Guitar Masterclass - 24 Week Beginner-Intermediate Course",
      price: "$980",
      features: ["Join/Start a Band, Solo Project", "Performance Opportunities", "Income Opportunities", "Email/Text support", "24 Week Course"],
    },
  ];

  const displayedPlans = showAll ? plans : plans.slice(0, 3);

  return (
    <section className="py-8 px-6 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-10">Lesson Options</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {displayedPlans.map((plan, i) => (
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
      <div className="mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          {showAll ? 'Show Less' : 'View All Packages'}
        </button>
      </div>
    </section>
  );
}
