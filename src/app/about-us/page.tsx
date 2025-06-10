// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dan Kariamis | Parkland Guitar Lessons",
  description:
    "Learn more about Dan Kariamis, founder of Parkland Guitar Lessons. From web developer to guitar teacher, discover how music and passion created a new path.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-lg mb-6">
        <strong>Hi, I’m Dan Kariamis</strong> — musician, teacher, web
        developer, and founder of Parkland Guitar Lessons.
      </p>

      <p className="mb-6">
        For over 15 years, I worked in web development and digital marketing,
        building high-performing websites and helping businesses grow online.
        But in early 2024, I was laid off. What started as a short break turned
        into 15 months of non-stop job hunting. I sent out thousands of
        applications and faced more rejections than I could’ve imagined.
      </p>

      <p className="mb-6">
        Rather than give up, I decided to pivot toward something I’ve always
        loved — music and teaching. I picked up my guitar, leaned into my
        lifelong passion, and combined it with my web skills to launch{" "}
        <strong>Parkland Guitar Lessons</strong>.
      </p>

      <p className="mb-6">
        This isn’t just another guitar school. I created a space where students
        of all ages and experience levels can learn guitar in a fun, supportive,
        and fully personalized environment. Whether you prefer in-person
        lessons, online sessions, or in-home instruction, I tailor each lesson
        to your goals, learning style, and pace.
      </p>

      <p className="mb-6">
        My long-term mission is to build more than just a lesson program. I
        envision a full creative space — complete with a rehearsal studio, a
        small gear shop, and a place where students can perform, record, and
        connect with fellow musicians.
      </p>

      <div className="border-l-4 border-blue-500 pl-4 my-8">
        <p className="italic text-gray-700">
          I play everything from ballads to rock anthems. I teach with patience,
          humor, and a focus on building real confidence. I’ve got two amazing
          daughters who inspire me every day. And I believe learning music
          should feel personal, practical, and fun.
        </p>
      </div>

      <p className="mb-6">
        Whether you're looking for guitar lessons, help choosing gear, or just
        someone to jam and grow with — I'd love to be part of your musical
        journey.
      </p>

      <p className="text-xl font-semibold mt-8">Let’s play.</p>
      <p className="text-xl font-bold">– Dan</p>
    </main>
  );
}
