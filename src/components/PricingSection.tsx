"use client";
import { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
  const [showAll, setShowAll] = useState(false);

  const plans = [
    {
      name: "Guitar Lessons",
      price: "$45",
      url: "/booking-and-availability",
      features: [
        "30 minute, 1-on-1 private session",
        "Flexible schedule",
        "Email/Text support",
        "Printable Handouts",
      ],
    },
    {
      name: "Bass Lessons",
      price: "$45",
      url: "/booking-and-availability",
      features: [
        "30 minute, 1-on-1 private session",
        "Flexible schedule",
        "Email/Text support",
        "Printable Handouts",
      ],
    },
    {
      name: "Piano Lessons",
      price: "$55",
      url: "/booking-and-availability",
      features: [
        "30 minute, 1-on-1 private session",
        "Flexible schedule",
        "Email/Text support",
        "Printable Handouts",
      ],
    },
    {
      name: "Drum Lessons",
      price: "$65",
      url: "/booking-and-availability",
      features: [
        "45 minute, 1-on-1 private session",
        "Flexible schedule",
        "Email/Text support",
        "Printable Handouts",
      ],
    },
    // {
    //   name: "Guitar or Bass Lessons",
    //   price: "$45",
    //   url: "/booking-and-availability",
    //   features: [
    //     "30 minute, 1-on-1 private session",
    //     "Flexible schedule",
    //     "Email/Text support",
    //     "Printable Handouts",
    //   ],
    // },
    // {
    //   name: "Virtual Lessons",
    //   price: "$40",
    //   url: "/guitar-lesson-packages/virtual-lessons",
    //   features: [
    //     "30 minute, 1-on-1 private session",
    //     "Zoom or FaceTime",
    //     "Chat/Text support",
    //     "Printable Handouts",
    //   ],
    // },
    // {
    //   name: "Duo Lessons (2 Students)",
    //   price: "$45 per student",
    //   url: "/guitar-lesson-packages/duo-lessons",
    //   features: [
    //     "1-hour group session",
    //     "Flexible schedule",
    //     "Fun, Interactive",
    //     "Printable Handouts",
    //   ],
    // },
    // {
    //   name: "Small Group (3–5 Students)",
    //   price: "$35 per student",
    //   url: "/guitar-lesson-packages/small-group-lessons",
    //   features: [
    //     "1-hour group session",
    //     "Flexible schedule",
    //     "Fun, interactive",
    //     "Printable Handouts",
    //   ],
    // },
    // {
    //   name: "Large Group (6–10 Students)",
    //   price: "$25 per student",
    //   url: "/guitar-lesson-packages/large-group-lessons",
    //   features: [
    //     "1-hour session",
    //     "Song-based learning",
    //     "Flexible schedule",
    //     "Printable Handouts",
    //   ],
    // },
    // {
    //   name: "4 Lesson Package - Weekly Lessons",
    //   price: "$180",
    //   url: "/guitar-lesson-packages/4-lesson-package",
    //   features: [
    //     "1-on-1 private session",
    //     "Flexible schedule",
    //     "Email/Text support",
    //     "Printable Handouts",
    //   ],
    // },
    // {
    //   name: "Mechanics of Acoustic Guitar - 12 Week Beginner Course",
    //   price: "$540",
    //   url: "/guitar-lesson-packages/mechanics-acoustic-guitar",
    //   features: [
    //     "Play along with your favorite songs",
    //     "Impress Friends And Relatives",
    //     "Email/Text support",
    //     "12 Week Course",
    //   ],
    // },
    // {
    //   name: "Mechanics of Electric Guitar - 12 Week Beginner Course",
    //   price: "$540",
    //   url: "/guitar-lesson-packages/mechanics-electric-guitar",
    //   features: [
    //     "Play along with your favorite songs",
    //     "Impress Friends And Relatives",
    //     "Email/Text support",
    //     "12 Week Course",
    //   ],
    // },
    // {
    //   name: "Mechanics of Bass Guitar - 12 Week Beginner Course",
    //   price: "$540",
    //   url: "/guitar-lesson-packages/mechanics-bass-guitar",
    //   features: [
    //     "Join/Start a Band, Solo Project",
    //     "Performance Opportunities",
    //     "Income Opportunities",
    //     "Email/Text support",
    //     "24 Week Course",
    //   ],
    // },
    // {
    //   name: "Acoustic Guitar Masterclass - 24 Week Beginner-Intermediate Course",
    //   price: "$980",
    //   url: "/guitar-lesson-packages/acoustic-masterclass",
    //   features: [
    //     "Join/Start a Band, Solo Project",
    //     "Performance Opportunities",
    //     "Income Opportunities",
    //     "Email/Text support",
    //     "24 Week Course",
    //   ],
    // },
    // {
    //   name: "Electric Guitar Masterclass - 24 Week Beginner-Intermediate Course",
    //   price: "$980",
    //   url: "/guitar-lesson-packages/electric-masterclass",
    //   features: [
    //     "Join/Start a Band, Solo Project",
    //     "Performance Opportunities",
    //     "Income Opportunities",
    //     "Email/Text support",
    //     "24 Week Course",
    //   ],
    // },
    {
      name: "Ultimate Guitar Masterclass - 52 Week Beginner-Advanced Course",
      price: "$2500",
      url: "/guitar-lesson-packages/ultimate-guitar-masterclass",
      features: [
        "Multiple Teachers",
        "All Styles Covered",
        "Income Opportunities",
        "Email/Text support",
        "1 year weekly Course",
      ],
    },
  ];

  const displayedPlans = showAll ? plans : plans.slice(0, 3);

  return (
    <section className="py-8 px-6 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-10">Lesson Options</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {displayedPlans.map((plan, i) => (
          <Link
            href={plan.url}
            key={i}
            className="border rounded-lg p-6 shadow hover:shadow-md transition block hover:bg-gray-50"
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-blue-600 text-2xl font-bold mb-4">
              {plan.price}
            </p>
            <ul className="text-gray-700 space-y-1 mb-4">
              {plan.features.map((f, j) => (
                <li key={j}>• {f}</li>
              ))}
            </ul>
            <p className="text-blue-500 hover:underline font-medium">
              View Details
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          {showAll ? "Show Less" : "View All Packages"}
        </button>
      </div>
    </section>
  );
}
